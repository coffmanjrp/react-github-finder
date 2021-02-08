import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Alert, Navbar } from './components/layout';
import { About } from './components/pages';
import { Search, User, Users } from './components/users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
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
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      setUsers(res.data.items);
      setLoading(false);
      setAlert(null);
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get single user
  const getUser = async (username) => {
    setLoading(true);

    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      setUser(res.data);
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
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Alert alert={alert} />
                  <Search
                    clearUsers={clearUsers}
                    callAlert={callAlert}
                    searchUsers={searchUsers}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users users={users} loading={loading} />
                </>
              )}
            />
            <Route exact path={'/about'} component={About} />
            <Route
              exact
              path={'/user/:login'}
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
