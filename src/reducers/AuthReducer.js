import { LOGIN, SIGNUP, CHECK_LOGIN, GET_CURRENT_USER, AUTH_ERR } from '../actions/AuthActions';

const INIT_STATE = {user: null, status: false, errors: null};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN: case SIGNUP:
            return {
                ...state,
                user: action.payload
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case CHECK_LOGIN:
            return {
                ...state,
                status: action.payload
            }
        case AUTH_ERR:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}
