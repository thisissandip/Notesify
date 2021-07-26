import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import NoteReducer from './reducer';

const rootReducer = combineReducers({noteR: NoteReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
