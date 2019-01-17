import React from 'react';
import {connect} from 'react-redux';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import {login} from '../actions';

import './styles/Global.css';

class Login extends React.Component {
  componentWillReceiveProps(props) {
    const {user} = props;

    if (!user) {
      return null;
    }
    this.props.history.push('/');
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.login();
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)} className="login">
        <legend>Login</legend>
        <Input placeholder="username"
          onChange={(e) => []}/>
        <Input placeholder="password"
          onChange={(e) => []}/>
        <div className="error">
        </div>
        <Button variant="raised">Login</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  const {user} = state.auth;
  return {
    user,
  };
};
export default connect(mapStateToProps, {login})(Login);
