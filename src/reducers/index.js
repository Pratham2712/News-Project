import { combineReducers } from 'redux';
import topHeadlineReducer from './topHeadlineReducer';
const rootReducer = combineReducers({
	top: topHeadlineReducer
});

export default rootReducer;
