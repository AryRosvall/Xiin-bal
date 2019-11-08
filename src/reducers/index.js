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
                    lookingPlace: state.places.find((item) => item.id.toString() === action.payload.toString())
                };
        default:
            return state;
    }
};

export default reducer;