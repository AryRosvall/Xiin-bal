import axios from 'axios';

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const registerUser = (payload, redirectURL) => {

  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest()))
      .then(() => { window.location.href = redirectURL; })
      .catch((err) => dispatch(setError(err)));
  };
};

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const loginUser = ({ email, password }, redirectURL) => {

  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.email}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.id}`;
        dispatch(registerRequest(data));
      })
      .then(() => { window.location.href = redirectURL; })
      .catch((err) => dispatch(setError(err)));
  };
};

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const getPlace = (payload) => ({
  type: 'GETPLACE_REQUEST',
  payload,
});

export const getPlaces = (payload) => {
  return (dispatch) => {
    axios.post('/places/', payload)
      .then(({ data }) => console.log(data))
      .catch((err) => dispatch(setError(err)));
  };
};

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const saveFavorite = (payload) => {
  return (dispatch) => {
    axios.post('/user-places/', payload)
      .then(({ data }) => console.log(data))
      .then(({ data }) => dispatch(setFavorite()))
      .then(() => { window.location.href = redirectURL; })
      .catch((err) => dispatch(setError(err)));
  };
};

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const viewFavorites = (payload) => ({
  type: 'VIEW_FAVORITES',
  payload,
});

export const getFavorites = (userId, token) => {

  return (dispatch) => {
    axios(
      {
        url: '/userFavorites/',
        method: 'post',
        data: {
          userId,
          token,
        },
      },
    )
      .then(({ data }) => dispatch(viewFavorites(data)))
      .catch((err) => dispatch(setError(err)));
  };
};
