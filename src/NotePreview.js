import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NOTE_PREVIEW_WIDTH, NOTE_PREVIEW_MAX_HEIGHT} from './constants';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

function NotePreview({note}) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onLongPress={() => {
        console.log('do something');
      }}
      onPress={() =>
        navigation.navigate('Note', {
          noteToEdit: note,
        })
      }>
      <View style={styles.note}>
        <Text style={styles.title}>{note ? note?.title : 'Dummy Title'}</Text>
        <Text style={styles.content}>
          {note ? note.content : 'Dummy content'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  note: {
    width: NOTE_PREVIEW_WIDTH,
    marginBottom: 13,
    height: 'auto',
    maxHeight: NOTE_PREVIEW_MAX_HEIGHT,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#c4c4c4',
  },
  title: {
    width: '100%',
    fontFamily: 'Inter-Black',
    fontSize: 21,
    color: '#5c5c5c',
    paddingVertical: 0,
    marginBottom: 10,
  },
  content: {
    width: '100%',
    fontFamily: 'Inter-Regular',
    color: '#878787',
    paddingVertical: 0,
    fontSize: 16,
    maxHeight: NOTE_PREVIEW_MAX_HEIGHT - 85,
  },
});

export default NotePreview;
