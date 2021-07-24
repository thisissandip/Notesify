import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from './GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AddNoteButton() {
  return (
    <>
      <TouchableOpacity style={styles.container} activeOpacity={0.3}>
        <View style={styles.view}>
          <Icon name="add" size={21} style={styles.plusIcon} />
          <Text style={styles.text}>Add new note </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
  text: {
    fontSize: 17,
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontWeight: '500',
  },
  plusIcon: {
    marginRight: 13,
  },
});

export default AddNoteButton;
