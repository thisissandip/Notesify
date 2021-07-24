import React from 'react';
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
import AddNoteButton from '../src/AddNoteButton';

function Notes() {
  return (
    <View>
      <Layout>
        <Header />
        <AddNoteButton />
      </Layout>
    </View>
  );
}

export default Notes;
