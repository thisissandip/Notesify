import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from './GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function BottomDrawer({isFooterOpen, setFooterOpen}) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getMyTags();
  }, []);

  const getMyTags = async () => {
    const alltagsdata = await AsyncStorage.getItem('papr_tags');
    const alltags = JSON.parse(alltagsdata);
    setTags([...alltags]);
  };

  // animation
  const bottomValue = useRef(
    new Animated.Value(Dimensions.get('screen').height),
  ).current;

  const SlideUp = () => {
    Animated.timing(bottomValue, {
      toValue: 0,
      duration: 0.5 * 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFooterOpen) {
      SlideUp();
    } else {
      SlideDown();
    }
  }, [isFooterOpen]);

  const SlideDown = () => {
    Animated.timing(bottomValue, {
      toValue: Dimensions.get('screen').height,
      duration: 0.5 * 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[styles.wrapper, {transform: [{translateY: bottomValue}]}]}>
      <TouchableWithoutFeedback onPress={() => setFooterOpen(false)}>
        <View style={styles.remaining}></View>
      </TouchableWithoutFeedback>
      <View style={[styles.container]}>
        <FlatList
          style={styles.flatlist}
          keyExtractor={(item, index) => index}
          data={tags}
          renderItem={({item}) => {
            return (
              <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.tag}>
                  <Icon
                    style={styles.icon}
                    name="book-outline"
                    color="#636363"
                    size={15}></Icon>
                  <Text style={styles.tagtext}> {item.tagname} </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {/*     <TouchableOpacity style={{width: '90%'}} activeOpacity={0.5}>
          <View style={styles.newtagbtncontainer}>
            <Icon
              style={[styles.icon, {color: 'white'}]}
              name="add-outline"
              color="#636363"
              size={18}></Icon>
            <Text style={[styles.newtag, {color: 'white'}]}>Add new label</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    /* backgroundColor: 'green', */
  },
  remaining: {
    flex: 1,
    /*     backgroundColor: 'grey', */
  },
  container: {
    position: 'absolute',
    width: '97%',
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 18,
    elevation: 0,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  flatlist: {
    width: '90%',
  },
  tag: {
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: 'white',
    borderColor: '#404040',
    borderWidth: 1,
  },
  tagtext: {
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    color: '#404040',
  },
  newtagbtncontainer: {
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#000',
    borderColor: '#404040',
    borderWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
});

export default BottomDrawer;
