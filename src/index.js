import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import App from './routes/app';

const InitialState = {
  'user': {},
  'lookingPlace': {},
  'places': [
    {
      'id': 1,
      'place': 1,
      'name': '1. Los Güeros',
      'type': 'Taquería',
      'priceRange': '$$',
      'address': 'Colonia Sideral, Iztapalapa',
      'schedule': ['M-S opens at 7pm '],
      'rating': 9.6,
      'votes': 164,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.2009822 },
      'phone': '5544332211',
      'website': 'chinillos@ohsi.com'
    
    },
    {
      'id': 2,
      'place': 1,
      'name': '1. Los Güeros',
      'type': 'Taquería',
      'priceRange': '$$',
      'address': 'Colonia Sideral, Iztapalapa',
      'schedule': ['M-S opens at 7pm '],
      'rating': 9.6,
      'votes': 164,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.2009822 },
    
    },
    {
      'id': 3,
      'place': 1,
      'name': '1. Los Güeros',
      'type': 'Taquería',
      'priceRange': '$$',
      'address': 'Colonia Sideral, Iztapalapa',
      'schedule': ['M-S opens at 7pm '],
      'rating': 9.6,
      'votes': 164,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.2009822 },
    
    },
    {
      'id': 4,
      'place': 1,
      'name': '1. Los Güeros',
      'type': 'Taquería',
      'priceRange': '$$',
      'address': 'Colonia Sideral, Iztapalapa',
      'schedule': ['M-S opens at 7pm '],
      'rating': 9.6,
      'votes': 164,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.2009822 },
    
    },
    {
      'id': 5,
      'place': 2,
      'name': 'Tortas del Oxxo',
      'type': 'Tortería',
      'priceRange': '$',
      'address': 'En el oxxo del moral, Iztapalapa',
      'schedule': ['M-S opens at 7pm '],
      'rating': 9.0,
      'votes': 50,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.5009822 },
    },
    {
      'id': 6,
      'place': 3,
      'name': 'Birria',
      'type': 'Taquería',
      'priceRange': '$$',
      'address': 'Colonia Sideral, Iztapalapa',
      'schedule': ['Only saturdays opens at 8 am '],
      'rating': 9.8,
      'votes': 80,
      'image': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'location': { lat: 19.4417749, long: -99.8809822 },
    },
    {
      id: 'd2a24a062-d256-41bb-b1b2-9d915af6b75e',
      name: 'Notti bianche, Le (White Nights)',
      type: 'Fonda',
      priceRange: 1,
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      address: 'En el oxxo del moral, Iztapalapa',
      rating: 9.0, 
      votes: 50,
      schedule: [
        'Opens 24/7',
      ],
      mainImage: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      catalogImages: {
        image1: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image2: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image3: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image4: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image5: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      },
      'location': { lat: 19.4417749, long: -99.5009822 },
      tags: [
        'Comida',
        'Nocturna',
      ]
    },
    {
      id: 'd2a4a062-d2526-41bb-b1b2-9d915af6b75e',
      name: 'Notti bianche, Le (White Nights)',
      type: 'Antro',
      priceRange: 3,
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      address: 'habitasse platea dictumst. Etiam f',
      rating: 7.0, 
      votes: 500,
      schedule: [
        'Jueves 22:00 a 3:00 hrs',
        'Viernes 22:00 a 3:00 hrs',
        'Sábado 22:00 a 3:00 hrs',
      ],
      mainImage: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      catalogImages: {
        image1: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image2: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image3: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image4: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image5: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      },
      'location': { lat: 19.4417749, long: -99.5009822 },
      tags: [
        'Comida',
        'Nocturna',
      ]
    },
    {
      id: 'd2a4a062-d256-41bb-b1b22-9d915af6b75e',
      name: 'Notti bianche, Le (White Nights)',
      type: 'Fonda',
      priceRange: 1,
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      address: 'En el oxxo del moral, Iztapalapa',
      rating: 9.0, 
      votes: 50,
      schedule: [
        'Opens 24/7'
      ],
      mainImage: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      catalogImages: {
        image1: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image2: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image3: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image4: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image5: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      },
      'location': { lat: 19.4417749, long: -99.5009822 },
      tags: [
        'Comida',
        'Nocturna',
      ]
    },
    {
      id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e2',
      name: 'Notti bianche, Le (White Nights)',
      type: 'Fonda',
      priceRange: 1,
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      address: 'En el oxxo del moral, Iztapalapa',
      rating: 9.0, 
      votes: 50,
      schedule: [
        'Opens 24/7'
      ],
      mainImage: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      catalogImages: {
        image1: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image2: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image3: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image4: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image5: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      },
      'location': { lat: 19.4417749, long: -99.5009822 },
      tags: [
        'Comida',
        'Nocturna',
      ]
    },
    {
      id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e3',
      name: 'Notti bianche, Le (White Nights)',
      type: 'Fonda',
      priceRange: 1,
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      address: 'En el oxxo del moral, Iztapalapa',
      rating: 9.0, 
      votes: 50,
      schedule: [
        'Opens 24/7'
      ],
      mainImage: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      catalogImages: {
        image1: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image2: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image3: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image4: 'http://dummyimage.com/800x600.png/99118E/ffffff',
        image5: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      },
      'location': { lat: 19.4417749, long: -99.5009822 },
      tags: [
        'Comida',
        'Nocturna',
      ]
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
