import {UPDATE_NOTES} from './types';

export const updateNotes = () => {
  return {
    type: UPDATE_NOTES,
    payload: note,
  };
};
