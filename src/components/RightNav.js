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

class Nav extends React.Component {
  componentWillMount() {
    this.props.checkLogin();
    this.props.getCurrentUser();
  }
  renderNav() {
    const {user} = this.props;
    if (this.props.status && this.props.user) {
      return (
        <Dropdown color="primary" label="Account">
          <DropdownItem link="/users">{user.username}</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
          <DropdownItem>Option 4</DropdownItem>
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
  const {status, user} = state.auth;
  return {
    status,
    user,
  };
};

export default connect(mapStateToProps, {checkLogin, getCurrentUser})(Nav);
