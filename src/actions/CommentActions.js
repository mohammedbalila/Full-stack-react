export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export const fetchComments = (id) => (dispatch) => {
  fetch(`http://localhost:8000/posts/${id}`)
      .then( (res) => res.json())
      .then((data) => dispatch({
        type: FETCH_COMMENTS,
        payload: data.post,
      }))
      .catch((err) => console.error(err));
};

export const createComment = (data) => (dispatch) => {
  const body = {body: data.body};
  const {id} = data;
  console.log(data);
  const token = localStorage.getItem('auth-token');
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  });
  const reqOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  };
  fetch(`http://localhost:8000/posts/${id}/comment`, reqOptions)
      .then( (res) => res.json())
      .then((data) => {
          console.log('res', data);
        dispatch({
          type: CREATE_COMMENT,
          payload: data.post,
        });
      })
      .catch((err) => console.error(err));
};
