import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_ERROR,
} from '../constants';

const ROOT_URL = '';

export const loginRequest = (payload?: any) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (payload?: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginError = (payload?: any) => {
  return {
    type: LOGIN_ERROR,
    payload,
  };
};

export const login = async (
  dispatch: {
    (arg0: { type: string; payload: any }): void;
    mobileNumber?: any;
    password?: string;
    token?: string;
  },
  payload: {
    mobileNumber: any;
    password: string;
  }
) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dispatch),
  };

  try {
    dispatch(loginRequest());
    const response = await fetch(ROOT_URL, requestOptions);
    const data = await response.json();
    if (data) {
      return dispatch(loginSuccess(data));
    }
  } catch (error) {
    return dispatch(loginError(error));
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
