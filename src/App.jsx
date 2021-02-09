import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Alert, Navbar } from './components/layout';
import { About } from './components/pages';
import { Search, User, Users } from './components/users';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

function App() {
  return (
    <GithubState>
      <AlertState>
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
                      <Alert />
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
      </AlertState>
    </GithubState>
  );
}

export default App;
