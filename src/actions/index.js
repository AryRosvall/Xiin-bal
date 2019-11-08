export const registerRequest = (payload) => ({
    type: 'REGISTER_REQUEST',
    payload,
});

export const loginRequest = (payload) => ({
    type: 'LOGIN_REQUEST',
    payload,
});

export const logoutRequest = (payload) => ({
    type: 'LOGOUT_REQUEST',
    payload,
});

export const getPlace = (payload) => ({
    type: 'GETPLACE_REQUEST',
    payload,
});