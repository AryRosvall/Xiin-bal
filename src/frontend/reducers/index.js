/* eslint-disable array-callback-return */
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR_REQUEST':
      console.log('error', action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GETPLACES_REQUEST': {
      return {
        ...state,
        mainView: action.payload === 'All' ? 'Todos los lugares' : action.payload,
        filteredPlaces: action.payload === 'All' ? state.places : state.places.filter(item => item.tags.some(tag => tag.includes(action.payload))),
      };
    }
    case 'GETPLACE_REQUEST':
      return {
        ...state,
        lookingPlace: state.places.find(item => item.id.toString() === action.payload.toString()),
      };
    case 'SEARCHPLACES_REQUEST': {
      return {
        ...state,
        mainView: 'Encontrados: ',
        filteredPlaces: state.places.filter(obj => Object.values(obj).some(val => (val ? val.toString().toLowerCase().includes(action.payload.toLowerCase()) : false))),
      };
    }
    case 'SET_FAVORITE_REQUEST': {

      const data = [...state.places],
        index = data.findIndex((place, index) => index === action.payload.index); //finding which index should get udpate
      if (index > -1) {
        data[index].favorite = true;
        return { ...state, filteredPlaces: data };
      } return { ...state };
    }
    case 'DELETE_FAVORITE_REQUEST':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'VIEW_FAVORITES_REQUEST': {
      return {
        ...state,
        mainView: 'Favoritos',
        filteredPlaces: state.places.filter((item) => {
          const semiPlaces = [];
          action.payload.data.map((place) => {
            if (place.placeId === item.id) semiPlaces.push(place.placeId);
          });
          return semiPlaces[0] === item.id;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
