import React from 'react';
import {connect} from 'react-redux';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import {login} from '../actions';

import './styles/Global.css';

class Login extends React.Component {
    state = {
      email: '',
      password: '',
    };
  componentWillReceiveProps(props) {
    const {user} = props;

    if (!user) {
      return null;
    }
    this.props.history.push('/');
  }

  renderErrors() {
      const { errors } = this.props;
      let errs = [];
      if (errors) {
          errs.push((errors.message || errors))
      }
      console.log(errors);
      return errs;
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)} className="login">
        <legend>Login</legend>
        <Input id="email"
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}/>
        <Input placeholder="Password"
          onChange={(e) => this.setState({ password: e.target.value })}/>
        <div className="error">
        {this.renderErrors().map(error => <p key={error}>{error}</p>)}
        </div>
        <Button variant="raised">Login</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, errors } = state.auth;
  return {
    user,
    errors,
  };
};
export default connect(mapStateToProps, {login})(Login);
