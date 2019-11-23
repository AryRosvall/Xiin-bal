import getManifest from '../getManifest';
import { config } from '../config';

const files = getManifest();
const isDev = config.dev;

const render = (html, preloadedState) => {

  return (`
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Xíinbal</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <link rel="stylesheet" href="${isDev ? 'assets/app.css' : files['main.css']}" type="text/css"></link>
      </head>
      <body>
      <div id='app'>${html}</div>
      <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c',
    )}
    </script>
      <script src="${isDev ? 'assets/app.js' : files['main.js']}" type="text/javascript"></script>
      <script src="${isDev ? 'assets/vendor.js' : files['vendors.js']}" type="text/javascript"></script>
  </body>
  </html>
  `);
};

export default render;

