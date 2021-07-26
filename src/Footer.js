import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalStyles} from './GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomDrawer from './BottomDrawer';
import {useNavigation} from '@react-navigation/native';
import {LEFTPADDING, RIGHTPADDING} from './constants';

function Footer({notes}) {
  const navigation = useNavigation();

  const [isFooterOpen, setFooterOpen] = useState(false);
  const dummyTags = [
    {tagname: 'todos'},
    {tagname: 'notes'},
    {tagname: 'meetings'},
  ];

  const OpenBottomDrawer = () => {
    setFooterOpen(true);
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

        {!notes && (
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate('Note')}>
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
      <BottomDrawer
        isFooterOpen={isFooterOpen}
        setFooterOpen={setFooterOpen}
        tags={dummyTags}
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
    height: 70,
    bottom: 0,
    right: 0,
    left: 0,
    /* backgroundColor: 'blue', */
  },
  addBtn: {
    marginTop: Platform.OS === 'ios' ? -80 : 0,
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
    borderColor: '#000',
  },
});

export default Footer;
