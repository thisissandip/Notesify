import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Platform} from 'react-native';
import {GlobalStyles} from './GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

function AddNoteButton() {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('Note')}>
        <View style={styles.view}>
          <Icon
            name="add-outline"
            size={80}
            style={styles.addIcon}
            color="#636363"
          />
          <Text style={styles.text}>Add New Note</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 0,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderColor: '#ccc',
  },
  view: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    bottom: 30,
    fontSize: 15,
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    fontWeight: '600',
    color: '#404040',
  },
  addIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default AddNoteButton;
