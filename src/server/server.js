/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import axios from 'axios';
import passport from 'passport';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import main from './routes/main';
import { config } from './config';

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');

dotenv.config();

const ENV = process.env.NODE_ENV;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`));

// Basic strategy
require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  console.log('Loading development environment');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: 'https://xiinbal.herokuapp.com/',
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {

  console.log(`Loading ${ENV} config`);
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', async (error, data) => {
    try {
      if (error || !data) {
        return next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;
        res.clearCookie('token');

        res.cookie('token', token, {
          httpOnly: false,
          secure: false,
          /*  httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
          domain: 'xiinbal.com', */
        });
        res.status(200).json(user.user);
      });
    } catch (error) {
      next(error);
    }
    return true;
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: user,
    });

    res.status(201).json({
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
});

app.post('/userFavorites/', async (req, res, next) => {

  const { body: data } = req;

  let places;
  try {
    await axios({
      url: `${config.apiUrl}/api/user-places?userId=${data.userId}`,
      method: 'get',
      headers: { Authorization: `Bearer ${data.token}` },
    }).then(({ data }) => { places = data; });

    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
});

app.post('/saveFavorites/', async (req, res, next) => {

  const { body: data } = req;
  console.log(data.userId, 'save favorite');

  try {
    await axios({
      url: `${config.apiUrl}/api/user-places/`,
      method: 'post',
      headers: { Authorization: `Bearer ${data.token}` },
      data: {
        userId: data.userId,
        placeId: data.placeId,
      },
    });

    res.status(201).json();
  } catch (error) {
    next(error);
  }
});
/* router.post('/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['create:user-places']),
  validationHandler(createUserPlaceSchema),
  async (req, res, next) => {

    const { body: userPlace } = req;

    try {
      if (Object.keys(userPlace).length === 0) {
        next(boom.unauthorized('User favorite is required'));
      } else {
        const createdUserPlaceId = await userPlacesService.createUserPlace(userPlace);
        res.status(201).json({
          data: createdUserPlaceId,
          message: 'user place created',
        });
      }

    } catch (err) {
      next(err);
    }
  });

router.delete('/:userPlaceId',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:delete-places']),
  validationHandler({ userPlaceId: placeIdSchema }, 'params'),
  async (req, res, next) => {
    const { userPlaceId } = req.params;
    try {
      const deletedUserPlaceId = await userPlacesService.deleteUserPlace({ userPlaceId });
      res.status(200).json({
        data: deletedUserPlaceId,
        message: 'user place deleted',
      });
    } catch (err) {
      next(err);
    }
  });
 */
app.use(express.json());
app.get('*', main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on http://localhost:${PORT}`);
});
