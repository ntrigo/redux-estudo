import { combineReducers } from 'redux';
import pessoas from './users';

const rootReducer = combineReducers({
  Pessoas : pessoas
});

export default rootReducer;
