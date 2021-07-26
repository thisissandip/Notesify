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
import MasonryList from '@react-native-seoul/masonry-list';
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
import {LIGHT_BG_COLOR, LEFTPADDING, RIGHTPADDING} from '../src/constants';

function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const notes = useSelector(state => state.noteR.notes);

  useEffect(() => {
    const getExistingNotes = async () => {
      /*      await AsyncStorage.removeItem('papr_notes'); */
      const allnotesdata = await AsyncStorage.getItem('papr_notes');
      const allnotes = JSON.parse(allnotesdata);

      if (!isEmpty(allnotes)) {
        dispatch(fetchNotes());
      }
    };

    getExistingNotes();
  }, [navigation]);

  useEffect(() => {
    console.log('notes', notes);
  }, [notes]);

  return (
    <View>
      <Layout>
        <SafeAreaView>
          <Header text="papr" />
        </SafeAreaView>

        {isEmpty(notes) ? (
          <View style={styles.container}>
            <AddNoteCard />
          </View>
        ) : (
          <View style={styles.flatlist_container}>
            <FlatList
              contentContainerStyle={{alignItems: 'center'}}
              data={notes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => <NotePreview note={item} />}
              bounces={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </Layout>
      <Footer />
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
    paddingTop: 10,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    /*    backgroundColor: 'yellow', */
  },
});

export default Home;
