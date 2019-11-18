/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import axios from 'axios';
import main from './routes/main';
import { config } from './config';

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/public`));

if (ENV === 'development') {
  console.log('Loading development environment');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
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

app.use(express.json());
app.get('*', main);

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;
  console.log(user, 'user');
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

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on http://localhost:${PORT}`);
});
