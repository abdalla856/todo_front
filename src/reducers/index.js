import {combineReducers} from 'redux';
import Users from './user'
import Todo from './todo';
export default combineReducers({
    Users :Users,
    Todo:Todo

})