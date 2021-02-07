import { useState } from 'react';

const UserItem = () => {
  const [id, setId] = useState(1);
  const [login, setLogin] = useState('mojombo');
  const [avatar_url, setAvatar_url] = useState(
    'https://avatars.githubusercontent.com/u/1?v=4'
  );
  const [html_url, sethtml_Url] = useState('https://github.com/mojombo');

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={login}
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
