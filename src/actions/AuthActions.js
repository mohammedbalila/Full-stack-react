export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const login = () => (dispatch) => {
  const body = {
    'email': 'safi@gmail.com',
    'password': '1234567890',
  };
  fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  })

      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('auth-token', data.token);
        dispatch({
          type: LOGIN,
          payload: data.user});
      })
      .catch((err) => console.error(err));
};

export const signup = (_) => (dispatch) => {
  fetch()
      .then((res) => res.json())
      .then((user) => dispatch({
        type: SIGNUP,
        payload: user}))
      .catch((err) => console.error(err));
};

export const checkLogin = () => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    return {
      type: CHECK_LOGIN,
      payload: true,
    };
  }
  return {
    type: CHECK_LOGIN,
    payload: false,
  };
};

export const getCurrentUser = () => (dispatch) => {
  const token = localStorage.getItem('auth-token');
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
  });

  const reqOptions = {
    method: 'GET',
    headers: headers,
  };
  fetch('http://localhost:8000/users/me', reqOptions)
      .then((res) => res.json())
      .then((data) => dispatch({
        type: GET_CURRENT_USER,
        payload: data.user,
      }));
};
