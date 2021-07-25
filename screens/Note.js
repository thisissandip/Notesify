import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  Dimensions,
  BackHandler,
} from 'react-native';
import {GlobalStyles} from '../src/GlobalStyles';
import Layout from '../src/Layout';
import NoteHeader from '../src/NoteHeader';
import {LEFTPADDING, RIGHTPADDING} from '../src/constants';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {isEmpty} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {elastic} from 'react-native/Libraries/Animated/Easing';

function Note() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', saveData);
  }, [navigation, note, title]);

  useEffect(() => {
    const getExistingNotes = async () => {
      /*   await AsyncStorage.removeItem('papr_notes'); */
      const allnotes = await AsyncStorage.getItem('papr_notes');
      console.warn(JSON.parse(allnotes));
      if (!isEmpty(allnotes)) {
        console.warn(JSON.parse(allnotes));
      }
    };

    getExistingNotes();
  }, []);

  const saveData = async () => {
    if (!isEmpty(title) && !isEmpty(note)) {
      const allnotes = await AsyncStorage.getItem('papr_notes');
      const currentNote = {
        title,
        content: note,
      };
      let newallnotes = [];
      if (!isEmpty(allnotes)) {
        newallnotes = JSON.parse(allnotes)?.map(note => note);
        newallnotes.push(currentNote);
      } else {
        newallnotes.push(currentNote);
      }
      const notes = JSON.stringify(newallnotes);

      await AsyncStorage.setItem('papr_notes', notes);
    }
  };

  return (
    <View>
      <Layout>
        <SafeAreaView>
          <NoteHeader saveData={saveData} />
        </SafeAreaView>
        <View style={styles.container}>
          <Title title={title} setTitle={setTitle} />
          <NoteInput note={note} setNote={setNote} />
        </View>
      </Layout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 5,
    paddingLeft: LEFTPADDING,
    paddingRight: RIGHTPADDING,
  },
});

/* Title Input Component */

function Title({title, setTitle}) {
  return (
    <View>
      <TextInput
        style={titlestyles.titleInput}
        onChangeText={value => setTitle(value)}
        placeholder="Title"
      />
    </View>
  );
}

const titlestyles = StyleSheet.create({
  titleInput: {
    width: '100%',
    fontFamily: 'Inter-Black',
    fontSize: 25,
    paddingVertical: 0,
    marginBottom: 15,
  },
});

/* Note Input Component */

function NoteInput({note, setNote}) {
  return (
    <View>
      <TextInput
        style={noteinputstyles.input}
        onChangeText={value => setNote(value)}
        placeholder="Start writing your amazing idea"
        multiline={true}
      />
    </View>
  );
}

const noteinputstyles = StyleSheet.create({
  input: {
    width: '100%',
    fontFamily: 'Inter-Regular',
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 15,
  },
});

export default Note;
