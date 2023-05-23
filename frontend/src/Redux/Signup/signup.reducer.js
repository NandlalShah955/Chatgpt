import { SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./signup.types";

const init = {
  isRegistered: false,
  isLoading: false,
  isError: false,
};
export const registerReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
        successMessage: payload,
        isLoading: false,
        isError: false,
        
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }
    default: {
      return state;
    }
  }
};
