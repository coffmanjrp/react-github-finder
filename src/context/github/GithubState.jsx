import { useReducer } from 'react';
import axios from 'axios';
import { GithubContext, GithubReducer } from './';
import {
  GET_USERS,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING,
} from '../types';

const githubClientId =
  process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_GITHUB_CLIENT_ID
    : process.env.GITHUB_CLIENT_ID;

const githubClientSecret =
  process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_GITHUB_CLIENT_SECRET
    : process.env.GITHUB_CLIENT_SECRET;

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
    isFirstRender: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get users
  const getUsers = async () => {
    const randomNumber = Math.floor(Math.random() * 78800000);

    setLoading();

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/users?since=${randomNumber}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({ type: GET_USERS, payload: res.data });
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Search users
  const searchUsers = async (text) => {
    setLoading();

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({ type: SEARCH_USERS, payload: res.data.items });
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get user
  const getUser = async (username) => {
    setLoading();

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      dispatch({ type: GET_USER, payload: res.data });
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get repos
  const getUserRepos = async (username) => {
    setLoading();

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      dispatch({ type: GET_REPOS, payload: res.data });
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Clear user
  const clearUsers = () => dispatch({ type: CLEAR_USER });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        isFirstRender: state.isFirstRender,
        getUsers,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
