import { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USER,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repo: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search users

  // Get user

  // Get repos

  // Clear user

  // Set loading

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
