import {FETCH_NOTES, UPDATE_NOTES} from './types';

const initialstate = {
  notes: [],
};

export default NoteReducer = (state = initialstate, action) => {
  switch (action.type) {
    case UPDATE_NOTES:
      let newnotes = [...state.notes, action.payload];
      return {
        notes: newnotes,
        ...state,
      };
    default:
      return state;
  }
};
