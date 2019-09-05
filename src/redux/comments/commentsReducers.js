import { ActionType } from "./commentsActions";

const commentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.ADD_COMMENT_SUCCESS:
      return [...state, payload];
    case ActionType.GET_COMMENT_SUCCESS:
      return  payload;

    default:
      return state;
  }
};


export default  commentsReducer;
