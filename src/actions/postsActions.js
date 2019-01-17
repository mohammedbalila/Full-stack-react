export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';

export const fetchPosts = (_) => (dispatch) => {
  fetch('http://localhost:8000/posts')
      .then( (res) => res.json())
      .then((data) => dispatch({
        type: FETCH_POSTS,
        payload: data.posts,
      }))
      .catch((err) => console.error(err));
};

export const fetchPost = (id) => (dispatch) => {

  fetch(`http://localhost:8000/posts/${id}`)
      .then( (res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_POST,
          payload: data.post,
        });
      })
      .catch((err) => console.error(err));
};

export const createPost = (data) => (dispatch) => {
  const body = {body: data.body, tags: data.tags};
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
  fetch('http://localhost:8000/posts/create', reqOptions)
      .then( (res) => res.json())
      .then((data) => {
        dispatch({
          type: CREATE_POST,
          payload: data.post,
        });
      })
      .catch((err) => console.error(err));
};
