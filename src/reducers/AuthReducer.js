import { LOGIN, SIGNUP, CHECK_LOGIN, GET_CURRENT_USER } from '../actions/AuthActions';

const INIT_STATE = {user: null, status: false };
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN: case SIGNUP: case GET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        case CHECK_LOGIN:
            return {
                ...state,
                status: action.payload
            };

        default:
            return state;
    }
}
