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
import {GlobalStyles} from './GlobalStyles';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notesify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
  },
  text: {
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    paddingLeft: 25,
    fontSize: 35,
  },
});

export default Header;
