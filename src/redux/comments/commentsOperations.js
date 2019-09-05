import axios from 'axios';
import {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
} from './commentsActions';

export const addComment = comment => dispatch => {
  dispatch(addCommentRequest());

  axios
    .post('https://bloggy-api.herokuapp.com/comments', comment)
    .then(res => {
      dispatch(addCommentSuccess(res.data));
    })
    .catch(error => {
      dispatch(addCommentError(error));
    });
};
export const getComments = comments => dispatch => {
  dispatch(getCommentsRequest(comments));

  axios
    .get('https://bloggy-api.herokuapp.com/comments')
    .then(res => {
      dispatch(getCommentsSuccess(res.data));
    })
    .catch(error => {
      dispatch(getCommentsError(error));
    });
};

// DUMMY
export const dummy = () => null;
