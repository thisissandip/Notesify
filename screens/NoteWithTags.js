import React, {useEffect, useState} from 'react';
import {GlobalStyles} from '../src/GlobalStyles';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Internal dependencies
 */
import Header from '../src/Header';
import Footer from '../src/Footer';
import Layout from '../src/Layout';
import AddNoteCard from '../src/AddNoteCard';
import {isEmpty} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNotes} from '../src/redux/actions';
import NotePreview from '../src/NotePreview';
import {
  LIGHT_BG_COLOR,
  LEFTPADDING,
  RIGHTPADDING,
  FOOTER_HEIGHT,
} from '../src/constants';

function NoteWithTags({route}) {
  const {tagname} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const notes = useSelector(state => state.noteR.notes);

  const [notesToDisplay, setNotesToDisplay] = useState([]);
  useEffect(() => {
    let notewiththistag = notes.filter(note => {
      if (note.tags.includes(tagname)) {
        return note;
      }
    });

    setNotesToDisplay(notewiththistag);
  }, [notes]);

  return (
    <View>
      <Layout>
        {isEmpty(notesToDisplay) ? (
          <>
            <SafeAreaView>
              <Header text={`#${tagname}`} />
            </SafeAreaView>
            <View style={styles.container}>
              <Text
                style={{
                  fontFamily: GlobalStyles.customFontFamily.fontFamily,
                  fontWeight: '400',
                }}>
                You don't have any papr with #{tagname}
              </Text>
              {/*   <AddNoteCard /> */}
            </View>
          </>
        ) : (
          <View style={styles.flatlist_container}>
            <SafeAreaView>
              <FlatList
                ListHeaderComponent={() => <Header text={`#${tagname}`} />}
                contentContainerStyle={{alignItems: 'center'}}
                data={notesToDisplay.reverse()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <NotePreview note={item} />}
                bounces={false}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{height: 20}} />}
              />
            </SafeAreaView>
          </View>
        )}
      </Layout>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_BG_COLOR,
  },
  text: {
    fontSize: 17,
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontWeight: '500',
  },
  flatlist_container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: FOOTER_HEIGHT,
    /* backgroundColor: 'yellow', */
  },
});

export default NoteWithTags;
