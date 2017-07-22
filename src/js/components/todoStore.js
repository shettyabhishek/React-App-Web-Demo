import {createStore} from 'redux';
import rootReducer from './reducers/todoReducers';

export default function createTodoStore(initialState) {
    return createStore(rootReducer, initialState);
}
