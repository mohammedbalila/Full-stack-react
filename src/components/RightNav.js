import React from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Link,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkLogin, getCurrentUser} from '../actions';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import Button from 'muicss/lib/react/button';

class Nav extends React.Component {
  componentWillMount() {
    this.props.checkLogin();
    this.props.getCurrentUser();
  }
  logout() {
    localStorage.removeItem('auth-token');
    this.props.checkLogin();
    window.location.assign('/login');
  }
  renderNav() {
    const {currentUser} = this.props;
    if (this.props.status && this.props.currentUser) {
      return (
        <Dropdown color="primary" label="Account">
          <DropdownItem link={`/users/${currentUser._id}`}>
            {currentUser.username}
          </DropdownItem>
          <DropdownItem link={`/settings/`}>
          Settings
          </DropdownItem>
          <DropdownItem onClick={() => this.logout()}>
          Logout
          </DropdownItem>
        </Dropdown>
      );
    }
    return (
      <div>
        <li>
          <Link to="/login/">Login</Link>
        </li>
        <li>
          <Link to="/signup/">Signup</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <div>
        <ul style={{float: 'right', marginLeft: '%2'}}>
          {this.renderNav()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {status, currentUser} = state.auth;
  return {
    status,
    currentUser,
  };
};

export default connect(mapStateToProps, {checkLogin, getCurrentUser})(Nav);
