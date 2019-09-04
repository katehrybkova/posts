import axios from 'axios';
import {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
} from './commentsActions';

export const addComment = comment => dispatch => {
  dispatch(addCommentRequest());

  axios
    .post('https://bloggy-api.herokuapp.com/posts', comment)
    .then(res => {
      dispatch(addCommentSuccess(res.data));
    })
    .catch(error => {
      dispatch(addCommentError(error));
    });
};

// DUMMY
export const dummy = () => null;
