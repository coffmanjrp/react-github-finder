import { useState } from 'react';
import { Navbar } from './components/layout';
import { Users } from './components/users';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    },
    {
      id: 2,
      login: 'defunkt',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
      html_url: 'https://github.com/defunkt',
    },
    {
      id: 3,
      login: 'pjhyett',
      avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
      html_url: 'https://github.com/pjhyett',
    },
  ]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Users users={users} />
      </div>
    </div>
  );
}

export default App;
