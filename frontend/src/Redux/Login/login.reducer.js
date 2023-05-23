import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
}
from "./login.types";

const init = {
  isAuth: false,
  isLoading: false,
  isError: false,
  user:{},
};
export const loginReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth:true,
        isLoading: false,
        isError:false,
        user:payload
       
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isAuth:false,
        isLoading: false,
        isError:true,
        errorMessage:payload,
      };
    }
    case LOGOUT: {
      return {
       ...init
      };
    }
    default: {
      return state;
    }
  }
};
