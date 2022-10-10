import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_ERROR,
} from '../constants';

export const initialState = {
  isAuth: false,
  name: '',
  mobileNumber: '',
  email: '',
  password: '',
  token: '',
  loading: false,
  errorMessage: null,
};

export const authReducer = (
  state = initialState,
  action: {
    [x: string]: any;
    type: any;
  }
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        mobileNumber: action.mobileNumber,
        password: action.password,
        token: action.token,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuth: true,
        name: action.name,
        email: action.email,
        mobileNumber: action.mobileNumber,
        password: action.password,
        token: action.token,
        loading: false,
      };
    case SIGNUP_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        mobileNumber: '',
        password: '',
        token: '',
        loading: false,
      };
    default:
      return state;
  }
};
