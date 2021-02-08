import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Navbar } from './components/layout';
import { Search, Users } from './components/users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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
      setAlert(null);
      setLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set alert
  const callAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Alert alert={alert} />
        <Search
          clearUsers={clearUsers}
          callAlert={callAlert}
          searchUsers={searchUsers}
          showClear={users.length > 0 ? true : false}
        />
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
}

export default App;
