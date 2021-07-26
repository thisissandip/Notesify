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

  useEffect(() => {
    console.log('content', note.content);
  }, []);

  return (
    <TouchableWithoutFeedback
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
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  title: {
    width: '100%',
    fontFamily: 'Inter-Black',
    fontSize: 25,
    paddingVertical: 0,
    marginBottom: 10,
  },
  content: {
    width: '100%',
    fontFamily: 'Inter-Regular',
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 15,
  },
});

export default NotePreview;
