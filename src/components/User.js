import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as
  Router,
  Route,
  Link,
} from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import {fetchUser, getCurrentUser} from '../actions';
import './styles/Global.css';

class Home extends React.Component {
  componentWillMount() {
    this.props.getCurrentUser();
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(props) {

  }

  renderEditProfile() {
      const { user, currentUser } = this.props;
    if (user && currentUser) {
      if (user.user._id === currentUser._id) {
        return (
          <li style={{cursor: 'pointer', float: 'right', margin: 5}}>
            <p>
                    Edit Profile &nbsp;
              <i class="fas fa-lg fa-pencil-alt"></i>
            </p>
          </li>
        );
      }
      return <li></li>;
    }
  }

  renderUserInfo() {
    const { user } = this.props;
    if (user) {
      return (
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="https://materializecss.com/images/yuna.jpg"
              alt="" className="circle" />
            <p>
              {user.user.username}
            </p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">email</i>
            <p>
              {user.user.email}
            </p>
          </li>
          <li className="collection-item avatar">
            <p>
              {user.user.bio}
            </p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle red">play_arrow</i>
            <p>
     Second Line
            </p>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <Container className="container">
        <div className="row">
          <div className="col s12">
            <div>
              <div className="row">
                <div className="col s2">
                  <img src="https://materializecss.com/images/yuna.jpg" className="circle responsive-img m2"/>
                </div>
                <div className="col s11">
                  <nav>
                    <div className="nav-wrapper">
                      <ul id="nav-mobile" className="left hide-on-med-and-down m2">
                        {this.renderEditProfile()}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            {this.renderUserInfo()}
          </div>
          <div className="col s8">
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.auth;
  const { user } = state;
  return {
    user,
    currentUser,
  };
};
export default connect(mapStateToProps, {fetchUser, getCurrentUser})(Home);
