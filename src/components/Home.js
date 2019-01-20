import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as
  Router,
  Route,
  Link,
} from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import CreatePost from './CreatePost';
import {fetchPosts, checkLogin} from '../actions';
import './styles/Global.css';

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
    this.props.checkLogin();
  }

  componentWillReceiveProps(props) {
    const {posts} = props;

    this.renderPosts(posts);
  }

  renderPosts({posts}) {
    if (posts) {
      return posts.map((post) => {
        return (
          <Container key={post._id}>
            <div key={post._id}>
              <h3>
                <Link to={`/users/${post.user._id}`}>
                  {post.user.username}
                </Link>
              </h3>
            </div>
            <p>
              <Link to={`/posts/${post._id}`} className='link'>
                {`${post.body.slice(0, 100)}...`}
              </Link>
            </p>
            <span>{post.tags}</span>
          </Container>
        );
      });
    }
    return <div>loading...</div>;
  }

  render() {
    return (
      <Container>
        <CreatePost />
        {this.renderPosts(this.props.posts)}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {posts} = state;
  return {posts};
};
export default connect(mapStateToProps, {fetchPosts, checkLogin})(Home);
