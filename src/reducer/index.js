import { combineReducers } from 'redux';
import sv from './sv'
import edit from './edit'


const myReducer = combineReducers({
    sv,
    edit
})
export default myReducer