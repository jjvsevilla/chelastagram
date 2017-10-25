import comments from '../data/comments';
import { ADD_COMMENT } from '../actions/commentsActions';

const initialState = comments;

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.chelaId]: [
          ...state[action.chelaId] || [],
          {
            user: action.user,
            text: action.comment
          }
        ]
      }
    default:
      return state;
  }
}

export default commentsReducer;