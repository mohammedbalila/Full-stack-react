import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as
  Router,
  Route,
  Link,
} from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import {fetchUser} from '../actions';
import './styles/Global.css';

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(props) {

  }


  render() {
    return (
      <Container className="container">
        <div class="row">
          <div class="col s12">
            <div>
              <div className="row">
                <div class="col s2">
                  <img src="https://materializecss.com/images/yuna.jpg" class="circle responsive-img m2"/>
                </div>
                <div className="col s11">
                  <nav>
                    <div class="nav-wrapper">
                      <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s4">
            <ul class="collection">
              <li class="collection-item avatar">
                <img src="images/yuna.jpg" alt="" class="circle" />
                <span class="title">Title</span>
                <p>First Line <br />
       Second Line
                </p>
                <a href="#!" class="secondary-content">
                  <i class="material-icons">grade</i></a>
              </li>
              <li class="collection-item avatar">
                <i class="material-icons circle">folder</i>
                <span class="title">Title</span>
                <p>First Line <br />
       Second Line
                </p>
                <a href="#!" class="secondary-content">
                  <i class="material-icons">grade</i></a>
              </li>
              <li class="collection-item avatar">
                <i class="material-icons circle green">insert_chart</i>
                <span class="title">Title</span>
                <p>First Line <br />
       Second Line
                </p>
                <a href="#!" class="secondary-content">
                  <i class="material-icons">grade</i></a>
              </li>
              <li class="collection-item avatar">
                <i class="material-icons circle red">play_arrow</i>
                <span class="title">Title</span>
                <p>First Line <br />
       Second Line
                </p>
                <a href="#!" class="secondary-content">
                  <i class="material-icons">grade</i></a>
              </li>
            </ul>
          </div>
          <div class="col s8">
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps, {fetchUser})(Home);
