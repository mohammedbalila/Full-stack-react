import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Container from 'muicss/lib/react/container';
import CreateComment from './CreateComment';
import {fetchPost, checkLogin} from '../actions';

import './styles/Global.css';

class Post extends React.Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderComments(comments) {
    return (comments || []).map((comment) => (
      <div key={comment._id}>
        <h4>{comment.user.username}</h4>
        <p style={{lineHeight: 2.0, fontSize: 14}}>
          {comment.body}
        </p>
        <nav style={{backgroundColor: '#1E90FF'}}>
          <ul style={{padding: 10, display: 'flex',
            justifyContent: 'space-between'}}>
            <li style={{cursor: 'pointer'}}>
              <i className="far fa-comment-alt"></i>
            </li>
            <li style={{cursor: 'pointer'}}>
              <i className="fas fa-heart"></i>
            </li>
            <li style={{cursor: 'pointer'}}>
              <i className="fas fa-file-invoice-dollar"></i>
            </li>
          </ul>
        </nav>
      </div>
    ));
  }

  render() {
    const {body, user, comments, tags, date, _id} = this.props.post;
    if (!user) {
      return <div>loading...</div>;
    }
    return (
      <div style={{display: 'flex',
        justifyContent: 'space-around', flexDirection: 'column'}}>
        <Container
          style={{backgroundColor: '#F0F8FF', margin: 15}}>
          <h3>{user.username}</h3>
          <div style={{padding: '%5'}}>
            <p>
              {body}
            </p>
          </div>
        </Container>
        <Container
          style={{margin: 15}}>
          <nav style={{backgroundColor: '#1E90FF'}}>
            <ul style={{padding: 10, display: 'flex',
              justifyContent: 'space-between'}}>
              <li style={{cursor: 'pointer'}}>
                <i className="far fa-comment-alt"></i>
              </li>
              <li style={{cursor: 'pointer'}}>
                <i className="fas fa-heart"></i>
              </li>
              <li style={{cursor: 'pointer'}}>
                <i className="fas fa-file-invoice-dollar"></i>
              </li>
            </ul>
          </nav>
        </Container>

        <CreateComment id={_id}/>

        <Container style={{margin: 15, backgroundColor: '#F0F8FF'}}>
          {this.renderComments(comments)}
        </Container>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  const {post} = state.posts;
  return {post};
};

export default connect(mapStateToProps, {fetchPost})(Post);
