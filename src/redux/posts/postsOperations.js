import axios from 'axios';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  fetchPostWithCommentsRequest,
  fetchPostWithCommentsSuccess,
  fetchPostWithCommentsError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  editPostRequest,
  editPostSuccess,
  editPostError,
  delPostRequest,
  delPostSuccess,
  delPostError,
} from './postsActions';

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest());
  axios
    .get('https://bloggy-api.herokuapp.com/posts')
    .then(res => {
      dispatch(fetchPostsSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchPostsError(error));
    });
};

export const fetchPostWithComment = id => dispatch => {
  dispatch(fetchPostWithCommentsRequest());

  axios
    .get(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`)
    .then(res => {
      dispatch(fetchPostWithCommentsSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchPostWithCommentsError(error));
    });
};

export const addPost = post => dispatch => {
  dispatch(addPostRequest());

  axios
    .post('https://bloggy-api.herokuapp.com/posts', post)
    .then(res => {
      dispatch(addPostSuccess(res.data));
    })
    .catch(error => {
      dispatch(addPostError(error));
    });
};

export const editPost = (id, updatedPost) => dispatch => {
  dispatch(editPostRequest());

  axios
    .put(`https://bloggy-api.herokuapp.com/posts/${id}`, updatedPost)
    .then(res => {
      dispatch(editPostSuccess(res.data));
    })
    .catch(error => {
      dispatch(editPostError(error));
    });
};

export const delPost = (id) => dispatch => {
  dispatch(delPostRequest());

  axios
    .delete(`https://bloggy-api.herokuapp.com/posts/${id}`)
    .then(res => {
      dispatch(delPostSuccess(res.data));
    })
    .catch(error => {
      dispatch(delPostError(error));
    });
};
