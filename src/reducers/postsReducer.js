import {FETCH_POSTS, CREATE_POST, FETCH_POST} from '../actions/postsActions';

const INIT_STATE = {posts: [], post: {}};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, posts: action.payload};
        case FETCH_POST:
            return {...state, post: action.payload};
        case CREATE_POST:
            return {...state, post: action.payload};
        default:
            return state;
    }
}
