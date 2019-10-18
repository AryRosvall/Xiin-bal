import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import App from './routes/app';

const InitialState = {
  'user': {},
  'places': [
    {
      'id': 1,
      'place': 1,
      'name': '1. Los Güeros',
      'type': 'Taquería',
      'priceRange': '$$',
      'address': 'Colonia Sideral, Iztapalapa',
      'schedule': 'M-S opens at 7pm ',
      'rating': 9.6,
      'votes': 164,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.2009822 },
    
    },
    {
      'id': 2,
      'place': 2,
      'name': 'Tortas del Oxxo',
      'type': 'Tortería',
      'priceRange': '$',
      'address': 'En el oxxo del moral, Iztapalapa',
      'schedule': 'M-S opens 24/7',
      'rating': 9.0,
      'votes': 50,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.5009822 },
    },
    {
      'id': 3,
      'place': 3,
      'name': 'Birria',
      'type': 'Taquería',
      'priceRange': '$$',
      'address': 'Colonia Sideral, Iztapalapa',
      'schedule': 'Only saturdays opens at 8 am ',
      'rating': 9.8,
      'votes': 80,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.8809822 },
    },
  ],
};

const Store = createStore(reducer, InitialState);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
