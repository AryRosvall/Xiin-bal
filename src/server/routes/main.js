import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';

require('dotenv').config();

const main = async (req, res, next) => {
  try {
    let initialState = {};
    try {

      const { token, email, name, id } = req.cookies;

      let user = {};

      if (email || name || id) {
        user = {
          id,
          name,
          email,
        };
      }

      let placesList = await axios({
        url: `${process.env.API_URL}/api/places`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'post',
      });

      placesList = placesList.data.data;

      initialState = {
        user,
        lookingPlace: {},
        places: placesList,
        filteredPlaces: placesList,
      };

    } catch (error) {
      initialState = {
        user: {},
        lookingPlace: {},
        places: {},
        filteredPlaces: {},
      };

    }

    const isLogged = (initialState.user.id !== undefined);

    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>
            {renderRoutes(Routes(isLogged))}
          </Layout>
        </StaticRouter>

      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
