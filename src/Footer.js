import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalStyles} from './GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import TagList from './TagList';
import {useNavigation} from '@react-navigation/native';
import {
  LEFTPADDING,
  LIGHT_BG_COLOR,
  RIGHTPADDING,
  FOOTER_HEIGHT,
} from './constants';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNotes} from '../src/redux/actions';
import {isEmpty} from 'lodash';

function Footer() {
  const navigation = useNavigation();

  const notes = useSelector(state => state.noteR.notes);

  const [isTagListOpen, setTagListOpen] = useState(false);

  const OpenBottomDrawer = () => {
    setTagListOpen(true);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => OpenBottomDrawer()}>
            <Icon name="menu-outline" size={30} color="#636363" />
          </TouchableOpacity>
        </View>

        {!isEmpty(notes) && (
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() =>
              navigation.navigate('Note', {
                noteToEdit: null,
              })
            }>
            <View style={styles.addBtn}>
              <Icon name="add-outline" size={30} color="#ffffff" />
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity activeOpacity={0.3}>
          <View>
            <Icon name="search-outline" size={30} color="#636363" />
          </View>
        </TouchableOpacity>
      </View>
      <TagList
        isTagListOpen={isTagListOpen}
        setTagListOpen={setTagListOpen}
        from="home"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingLeft: LEFTPADDING,
    paddingRight: RIGHTPADDING,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: FOOTER_HEIGHT,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: LIGHT_BG_COLOR,
    /*     backgroundColor: 'pink', */
  },
  addBtn: {
    marginTop: Platform.OS === 'ios' ? -60 : 0,
    backgroundColor: '#000000',
    borderRadius: 100,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 0,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
  },
});

export default Footer;
