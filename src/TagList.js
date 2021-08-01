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
  TextInput,
  Button,
  SafeAreaView,
  Modal,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from './GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TagList({
  isTagListOpen,
  setTagListOpen,
  from,
  selectedTags,
  setSelectedTags,
}) {
  // Animation slide up and down
  const bottomValue = useRef(
    new Animated.Value(Dimensions.get('screen').height),
  ).current;

  const SlideUp = () => {
    Animated.timing(bottomValue, {
      toValue: 0,
      duration: 0.4 * 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isTagListOpen) {
      SlideUp();
    } else {
      SlideDown();
    }
  }, [isTagListOpen]);

  const SlideDown = () => {
    Animated.timing(bottomValue, {
      toValue: Dimensions.get('screen').height,
      duration: 0.5 * 1000,
      useNativeDriver: true,
    }).start();
  };

  // My tags

  // search tag states

  const [searchInp, setSearchInp] = useState('');
  const [tags, setTags] = useState([]);
  const [searchedTags, setSearchedTags] = useState([]);

  useEffect(() => {
    getMyTags();
  }, []);

  const getMyTags = async () => {
    const alltagsdata = await AsyncStorage.getItem('papr_tags');
    const alltags = JSON.parse(alltagsdata);
    setTags([...alltags]);
    setSearchedTags([...alltags]);

    // selected tags for the note
    //setSelectedTags([...alltags]);
  };

  useEffect(() => {
    let resultags = tags.filter(tag => tag.tagname.includes(searchInp));
    setSearchedTags([...resultags]);
  }, [searchInp]);

  const updateTags = async () => {
    const newtags = [...tags, {tagname: searchInp}];
    await AsyncStorage.setItem('papr_tags', JSON.stringify(newtags));
    setSearchInp('');
    getMyTags();
  };

  const handleCheckbox = tagname => {
    if (selectedTags.includes(tagname)) {
      // remove
      setSelectedTags(selectedTags.filter(tag => tag !== tagname));
    } else {
      // push that to array
      setSelectedTags([...selectedTags, tagname]);
    }
  };

  useEffect(() => {
    console.log('tags', selectedTags);
  }, [selectedTags]);

  return (
    <>
      <Animated.View
        style={[styles.wrapper, {transform: [{translateY: bottomValue}]}]}>
        <TouchableWithoutFeedback onPress={() => setTagListOpen(false)}>
          <View style={styles.remaining}></View>
        </TouchableWithoutFeedback>
        <View style={[styles.container]}>
          {searchedTags.length > 0 ? (
            <FlatList
              style={styles.flatlist}
              keyExtractor={(item, index) => index}
              data={searchedTags}
              renderItem={({item}) => {
                if (from === 'home') {
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
                } else {
                  return (
                    <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
                      <CheckBox
                        style={[{flex: 1, padding: 10}]}
                        onClick={() => handleCheckbox(item.tagname)}
                        isChecked={selectedTags.includes(item.tagname)}
                        leftText={item.tagname}
                      />
                    </TouchableOpacity>
                  );
                }
              }}
            />
          ) : searchInp ? (
            <TouchableOpacity
              style={{width: '89%'}}
              onPress={() => updateTags()}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '100%',
                  padding: 5,
                  marginBottom: 5,
                }}>
                <Icon
                  style={{marginRight: 2}}
                  size={20}
                  name="add-outline"
                  color="#636363"
                />
                <Text> Create tag - {searchInp} </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <></>
          )}

          <View style={{width: '90%', alignItems: 'center'}}>
            <View style={styles.newtagbtncontainer}>
              <Icon
                style={[styles.icon]}
                name="search-outline"
                color="#636363"
                size={20}></Icon>
              <TextInput
                autoCapitalize="none"
                value={searchInp}
                maxLength={30}
                style={styles.searchInp}
                onChangeText={value => setSearchInp(value)}
                placeholder="Search or Create Tags"
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    /*    backgroundColor: 'green', */
  },
  remaining: {
    flex: 1,
    /* backgroundColor: 'red', */
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  flatlist: {
    width: '89%',
    marginBottom: 5,
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
    width: '98%',
    borderRadius: 6,
    padding: 8,
    marginBottom: 6,
    marginTop: 5,
    borderColor: '#a1a1a1',
    borderWidth: 1,
    overflow: 'hidden',
  },
  icon: {
    marginRight: 10,
  },
  searchInp: {
    width: '100%',
    fontFamily: GlobalStyles.customFontFamily.fontFamily,
    color: '#404040',
    overflow: 'hidden',
  },
});

export default TagList;

/* Modal */
