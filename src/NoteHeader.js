import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalStyles} from './GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {LEFT_HEADER_PADDING, RIGHT_HEADER_PADDING} from './constants';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {fetchNotes} from './redux/actions';
import BottomDrawer from './BottomDrawer';

function NoteHeader({saveData, noteid, setTagListOpen, noteToEdit}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // save on back button from header
  const handleBack = () => {
    navigation.goBack();
  };

  const deleteNote = async () => {
    navigation.goBack();
    const allnotesdata = await AsyncStorage.getItem('papr_notes');
    const allnotes = JSON.parse(allnotesdata);

    const newnotes = allnotes.filter(item => item.id !== noteid);
    const notes = JSON.stringify(newnotes);

    await AsyncStorage.setItem('papr_notes', notes);
    dispatch(fetchNotes());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3} onPress={() => handleBack()}>
        <Icon name="arrow-back-outline" size={23} color="#636363" />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => setTagListOpen(true)}>
          <Icon name="book-outline" size={23} color="#636363" />
        </TouchableOpacity>
        {noteToEdit !== null && (
          <TouchableOpacity
            style={{marginLeft: 25}}
            activeOpacity={0.3}
            onPress={() => deleteNote()}>
            <Icon name="trash-outline" size={23} color="#636363" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.primaryBackgroundColor.backgroundColor,
    paddingLeft: LEFT_HEADER_PADDING,
    paddingRight: RIGHT_HEADER_PADDING,
    /* backgroundColor: 'pink', */
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default NoteHeader;
