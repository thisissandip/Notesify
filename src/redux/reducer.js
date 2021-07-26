import {FETCH_NOTES, UPDATE_NOTES} from './types';

const initialstate = {
  notes: [],
};

export default NoteReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        notes: [...action.payload],
      };
    case UPDATE_NOTES:
      let newnotes = [...state.notes, action.payload];
      return {
        ...state,
        notes: newnotes,
      };
    default:
      return state;
  }
};
