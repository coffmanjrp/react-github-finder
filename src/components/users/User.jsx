import { useEffect } from 'react';

const User = ({ getUser, loading, match, user }) => {
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    follwers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(match.params.login);
    // eslint-disable-next-line
  }, []);

  return <div>{name}</div>;
};

export default User;
