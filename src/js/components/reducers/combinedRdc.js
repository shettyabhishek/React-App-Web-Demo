import { combineReducers } from 'redux';
import todo from './todoReducers';

export default combineReducers({
    todo: todo
    // More reducers if there are can go here
});
