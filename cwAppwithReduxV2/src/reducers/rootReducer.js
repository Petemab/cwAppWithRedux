import { combineReducers } from 'redux';
import NameList from './NameListReducer';
import NameShow from './NameShowReducer';

const rootReducer = combineReducers({
  NameList, NameShow

});

export default rootReducer;
