export const FETCH_USER = 'FETCH_USER';
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export const fetchUser = (id) => (dispatch) => {
  fetch(`http://localhost:8000/users/${id}`)
      .then( (res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_USER,
          payload: data.user,
        })
})
      .catch((err) => console.error(err));
};
