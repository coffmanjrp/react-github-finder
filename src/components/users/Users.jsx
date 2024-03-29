import { useContext } from 'react';
import UserItem from './UserItem';
import { Spinner } from '../layout';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { isLoading, users } = githubContext;

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
