import {UPDATE_NOTES, FETCH_NOTES} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchNotes = () => {
  return async dispatch => {
    const allnotesdata = await AsyncStorage.getItem('papr_notes');
    const allnotes = JSON.parse(allnotesdata);
    dispatch({
      type: FETCH_NOTES,
      payload: allnotes,
    });
  };
};

export const updateNotes = () => {
  return {
    type: UPDATE_NOTES,
    payload: note,
  };
};
