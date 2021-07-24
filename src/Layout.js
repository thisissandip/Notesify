import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GlobalStyles} from './GlobalStyles';

function Layout({children}) {
  return <View style={[styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: GlobalStyles.primaryBackgroundColor.backgroundColor,
    paddingLeft: 25,
    paddingRight: 25,
  },
});

export default Layout;
