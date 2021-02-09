import { useContext, useEffect } from 'react';
import { Alert } from '../layout';
import { Search, Users } from '../users';
import GithubContext from '../../context/github/githubContext';

const Home = () => {
  const githubContext = useContext(GithubContext);
  const { getUsers, firstRender } = githubContext;

  useEffect(() => {
    if (!firstRender) {
      getUsers();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Alert />
      <Search />
      <Users />
    </>
  );
};

export default Home;
