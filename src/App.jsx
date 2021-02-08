import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './components/layout';
import { Search, Users } from './components/users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${clientID}&client_secret=${clientSecret}`
      );
      setUsers(res.data);
      setLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }

    // eslint-disable-next-line
  }, []);

  // Search GitHub users
  const searchUsers = async (text) => {
    setLoading(true);

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${clientID}&client_secret=${clientSecret}`
      );
      setUsers(res.data.items);
      setLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Search searchUsers={searchUsers} />
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
}

export default App;
