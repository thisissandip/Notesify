import React, {useEffect, useState} from 'react';
import {GlobalStyles} from '../src/GlobalStyles';

import {
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

function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const notes = useSelector(state => state.noteR.notes);

  useEffect(() => {
    const getExistingNotes = async () => {
      /*  await AsyncStorage.removeItem('papr_notes'); */
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
        <View style={styles.container}>
          {isEmpty(notes) && <AddNoteCard />}
        </View>
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
  },
  view: {},
  text: {
    fontSize: 17,
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontWeight: '500',
  },
  addIcon: {},
});

export default Home;
