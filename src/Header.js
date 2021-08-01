import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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
import Icon from 'react-native-vector-icons/Ionicons';

function Header({text}) {
  // if top text is papr then it is home page
  return text === 'papr' ? (
    <View style={styles.homeContainerNormal}>
      <Text style={styles.hometitle}>{text}</Text>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          width: '95%',
          borderRadius: 6,
          padding: 5,
          paddingLeft: 8,
          marginBottom: 6,
          marginTop: 5,
          borderColor: '#a1a1a1',
          borderWidth: 1,
          overflow: 'hidden',
        }}>
        <Icon
          style={{marginRight: 10}}
          name="search-outline"
          size={25}
          color="#636363"
        />
        <TextInput
          autoCapitalize="none"
          maxLength={35}
          style={{
            width: '100%',
            fontFamily: GlobalStyles.customFontFamily.fontFamily,
            color: '#404040',
            overflow: 'hidden',
            fontSize: 16,
          }}
          placeholder="Search"
        />
      </View>
    </View>
  ) : (
    /*    <View style={styles.homeContainer}>
      <Text style={styles.text}>{text}</Text>
      <Icon
        style={styles.search}
        name="search-outline"
        size={30}
        color="#636363"
      />
    </View> */
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  /*   homeContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: HEADER_HEIGHT,
    justifyContent: 'space-between',
    paddingLeft: LEFTPADDING - 15,
    backgroundColor: LIGHT_BG_COLOR,
    backgroundColor: 'red',
    marginBottom: 20,
    marginTop: 20,
  },
  search: {
    paddingTop: 6,
    paddingRight: RIGHTPADDING - 15,
  }, */
  homeContainerNormal: {
    width: '100%',
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHT_BG_COLOR,
    marginBottom: 35,
    marginTop: 30,
  },
  hometitle: {
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 10,
  },
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
