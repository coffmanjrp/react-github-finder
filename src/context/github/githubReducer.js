import {
  GET_USERS,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING,
} from '../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isFirstRender: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        users: [],
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default GithubReducer;
