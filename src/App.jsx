import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Alert, Navbar } from './components/layout';
import { About } from './components/pages';
import { Search, User, Users } from './components/users';
import GithubState from './context/github/GithubState';
import './App.css';

function App() {
  const [alert, setAlert] = useState(null);

  const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  // useEffect(() => {
  //   setLoading(true);

  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //     );
  //     setUsers(res.data);
  //     setLoading(false);
  //   };

  //   try {
  //     fetchData();
  //   } catch (error) {
  //     throw new Error(error);
  //   }

  //   // eslint-disable-next-line
  // }, []);

  // Set alert
  const callAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <Alert alert={alert} />
                    <Search />
                    <Users />
                  </>
                )}
              />
              <Route exact path={'/about'} component={About} />
              <Route exact path={'/user/:login'} component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
