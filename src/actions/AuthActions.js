export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const AUTH_ERR = 'AUTH_ERR';

export const login = ({ email, password }) => (dispatch) => {
  const body = {
    'email': email,
    'password': password,
  };
  fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: AUTH_ERR,
          payload: data.message,
        });
        if (data.token) {
          localStorage.setItem('auth-token', data.token);
        };
        dispatch({
          type: LOGIN,
          payload: data.user,
        });
      })
      .catch((err) => console.error(err));
};

export const signup = ({
  username,
  email,
  password,
  dateOfBirth,
}) => (dispatch) => {
  const body = {
    email,
    password,
    username,
    dateOfBirth,
  };

  fetch('http://localhost:8000/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('auth-token', data.token);
        };

        dispatch({
          type: AUTH_ERR,
          payload: data.message.errors,
        });
        dispatch({
          type: SIGNUP,
          payload: data.user,
        });
      })
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
  if (!token) {
    return dispatch({ type: GET_CURRENT_USER, payload: null });
  }
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
  });
  const id = parseJwt(token).user._id;
  const reqOptions = {
    method: 'GET',
    headers: headers,
  };
  fetch(`http://localhost:8000/users/${id}`, reqOptions)
      .then((res) => res.json())
      .then((data) => dispatch({
        type: GET_CURRENT_USER,
        payload: data.user,
      }));
};

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};
