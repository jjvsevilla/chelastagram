import { combineReducers } from 'redux';

import chelasReducer from './chelasReducers';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  chelas: chelasReducer,
  comments: commentsReducer
});

export default rootReducer;