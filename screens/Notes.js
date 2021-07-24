import React from 'react';
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
/**
 * Internal dependencies
 */
import Header from '../src/Header';
import Layout from '../src/Layout';
import AddNoteCard from '../src/AddNoteCard';

function Notes() {
  return (
    <View>
      <Layout>
        <Header text="Notesify" />
        <View style={styles.container}>
          <AddNoteCard />
        </View>
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
  },
  view: {},
  text: {
    fontSize: 17,
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontWeight: '500',
  },
  addIcon: {},
});

export default Notes;
