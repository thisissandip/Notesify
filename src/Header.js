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
import {
  LEFTPADDING,
  RIGHTPADDING,
  HEADER_HEIGHT,
  LIGHT_BG_COLOR,
} from './constants';

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
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: LEFTPADDING,
    /* paddingLeft: 6, */
    paddingRight: RIGHTPADDING,
    backgroundColor: LIGHT_BG_COLOR,
    /* backgroundColor: 'red', */
    marginBottom: 15,
  },
  text: {
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontSize: 35,
    fontWeight: '700',
  },
});

export default Header;
