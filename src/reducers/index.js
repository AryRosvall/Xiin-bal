const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GETPLACE_REQUEST':
      return {
        ...state,
        lookingPlace: state.places.find((item) => item.id.toString() === action.payload.toString()),
      };
    case 'SET_FAVORITE': {

      const data = [...state.places],
        index = data.findIndex((place, index) => index === action.payload.index); //finding which index should get the udpate
      if (index > -1) {
        data[index].favorite = true;
        return { ...state, places: data } ;
      } return { ...state } ; }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'VIEW_FAVORITES':
      return {
        ...state,
        places: state.places.filter((item) => item.favorite === true),
      };

    default:
      return state;
  }
};

export default reducer;
