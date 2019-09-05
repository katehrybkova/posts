export const ActionType = {
  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
  GET_COMMENT_REQUEST: 'GET_COMMENT_REQUEST',
  GET_COMMENT_SUCCESS: 'GET_COMMENT_SUCCESS',
  GET_COMMENT_ERROR: 'GET_COMMENT_ERROR',
};

// ADD_COMMENT

export const addCommentRequest = () => ({
  type: ActionType.ADD_COMMENT_REQUEST,
});

export const addCommentSuccess = (comment) => ({
  type: ActionType.ADD_COMMENT_SUCCESS,
  payload: comment,
});

export const addCommentError = error => ({
  type: ActionType.ADD_COMMENT_ERROR,
  payload: {
    error,
  },
});
export const getCommentsRequest = () => ({
  type: ActionType.GET_COMMENT_REQUEST,
});

export const getCommentsSuccess = (comments) => ({
  type: ActionType.GET_COMMENT_SUCCESS,
  payload: comments,
});

export const getCommentsError = error => ({
  type: ActionType.GET_COMMENT_ERROR,
  payload: {
    error,
  },
});
