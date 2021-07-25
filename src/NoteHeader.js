import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalStyles} from './GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {LEFT_HEADER_PADDING, RIGHT_HEADER_PADDING} from './constants';
import {useNavigation} from '@react-navigation/native';

function NoteHeader({saveData}) {
  const navigation = useNavigation();

  // save on back button from header
  const handleBack = () => {
    saveData();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3} onPress={() => handleBack()}>
        <Icon name="arrow-back-outline" size={23} color="#636363" />
      </TouchableOpacity>
      {/*    <TouchableOpacity activeOpacity={0.3}>
        <Icon name="ellipsis-horizontal-outline" size={23} color="#636363" />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.primaryBackgroundColor.backgroundColor,
    paddingLeft: LEFT_HEADER_PADDING,
    paddingRight: RIGHT_HEADER_PADDING,
    /* backgroundColor: 'pink', */
  },
});

export default NoteHeader;
