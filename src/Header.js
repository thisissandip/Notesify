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
import {LEFTPADDING, RIGHTPADDING} from './constants';

function Header({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: LEFTPADDING,
    paddingRight: RIGHTPADDING,
  },
  text: {
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontSize: 35,
    fontWeight: '700',
  },
});

export default Header;
