import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PostEditor from '../PostEditor/PostEditor';
import css from './PostsList.module.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';



class PostsList extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    location: PropTypes.shape().isRequired,
  };

  state = {
    isCreating: false,
  };


  openCreatePost = () => {
    this.setState({ isCreating: true });
  };

  closeCreatePost = () => {
    this.setState({ isCreating: false });
  };

  createPost = post => {
    const { addPost } = this.props;
    const postToAdd = {
      ...post,
    };

    addPost(postToAdd);

    this.closeCreatePost();
  };

  render() {

    const { items = [], location } = this.props;
    const { isCreating } = this.state;
    return (
      <div className={css.main}>

        <h2>Posts</h2>
        <ul className={css.list}>
          {items.map(
            item =>
              <li key={item.id} className={css.item}>
                <Card style={{
                  maxWidth: "80%",
                  margin: "25px auto",
                  height: "100px",
                  padding: "12px",
                  overflow: "hidden"
                }}>
                  <div className={css.cardContent}>
                    <Link
                      to={{
                        pathname: `/posts/${item.id}`,
                        state: { from: location },
                      }}
                      className={css.link}
                      >
                      <h3>
                        {item.title ? item.title.toUpperCase() : "NO TITLE"}
                      </h3>
                    </Link>
                  </div>
                </Card>
              </li>

          )}
        </ul>
        <Button type="button"
          onClick={this.openCreatePost}
          style={{
            margin: "0 auto",
            height: "55px",
          }}
          variant="contained"
          color="primary">
          Create Post
        </Button>
        {isCreating && (
          <Modal onClose={this.closeCreatePost}>
            <PostEditor
              onSave={this.createPost}
              onCancel={this.closeCreatePost}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default PostsList;


