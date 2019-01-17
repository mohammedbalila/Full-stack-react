import React from 'react';
import {connect} from 'react-redux';
import {
  checkLogin,
  createPost,
  fetchPosts,
  createComment,
} from '../actions';
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

import './styles/Global.css';

class CreateComment extends React.Component {
    state = {
        body: ''
    };
  Submit(event) {
    event.preventDefault();
    const data = {body: this.state.body, id: this.props.id};
    this.props.createComment(data);
  }
  render() {
    return (
        <Form id="comment-form" onSubmit={this.Submit.bind(this)} className="form">
          <Input id='comment-input' placeholder="Comment"
            onChange={(e) => this.setState({body: e.target.value})} />

          <Button variant="raised" color="primary">Comment</Button>
        </Form>

    );
  }
}


export default connect(null, {
  checkLogin,
  createPost,
  fetchPosts,
  createComment,
})(CreateComment);
