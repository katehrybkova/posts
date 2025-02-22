import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PostsList from './PostsList/PostsListContainer';
import Post from './Post/PostContainer';
import * as postsOperations from '../redux/posts/postsOperations';
import * as commentsOperations from '../redux/comments/commentsOperations';

class App extends Component {


  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
  }

  render() {
    return (
      <div>
        
        <Switch>
          <Route path="/" exact component={PostsList} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts: postsOperations.fetchPosts,
  fetchComments: commentsOperations.getComments,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
