import { combineReducers } from 'redux';
import flagReducer from './flagReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  tasks: taskReducer,
  flag: flagReducer
});
