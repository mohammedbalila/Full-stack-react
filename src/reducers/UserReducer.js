import {FETCH_USER} from '../actions/UserActions';

const INIT_STATE = null;
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};
