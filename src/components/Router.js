import React from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Link,
} from 'react-router-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import Home from './Home';
import Post from './Post';
import Login from './Login';
import Nav from './RightNav';
import User from './User';

const About = () => <h2>About</h2>;

class RootRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav style={{backgroundColor: '#1E90FF'}}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">User</Link>
              </li>
              <Nav />
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/:id" component={User} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default RootRouter;
