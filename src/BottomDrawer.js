import React, {useEffect, useRef} from 'react';
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
import {GlobalStyles} from './GlobalStyles';

function BottomDrawer({tags, isFooterOpen, setFooterOpen}) {
  const bottomValue = useRef(new Animated.Value(20)).current;

  const SlideUp = () => {
    Animated.timing(bottomValue, {
      toValue: 0,
      duration: 0.4 * 1000,
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
                  <Text style={styles.tagtext}> # {item.tagname} </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  remaining: {
    flex: 1,
    /* backgroundColor: 'grey', */
  },
  container: {
    position: 'absolute',
    width: '100%',
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#ffffff',
  },
  flatlist: {
    width: '90%',
  },
  tag: {
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
});

export default BottomDrawer;
