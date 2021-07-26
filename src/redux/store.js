import {createStore, combineReducers} from 'redux';
import NoteReducer from './reducer';

const rootReducer = combineReducers({noteR: NoteReducer});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
