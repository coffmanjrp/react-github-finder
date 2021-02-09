import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Home, NotFound } from './components/pages';
import { Navbar } from './components/layout';
import { User } from './components/users';
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
                <Route exact path="/" component={Home} />
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/user/:login'} component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
