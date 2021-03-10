import { combineReducers } from 'redux';
import dataReducer from './data';
import fileReducer from './files';

export default combineReducers({
    pageData: dataReducer,
    fileData: fileReducer
});

