/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LIGHT_BG_COLOR} from './src/constants';

enableScreens();
import Home from './screens/Home';
import Note from './screens/Note';

import {Provider} from 'react-redux';

import configureStore from './src/redux/store';

const store = configureStore();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={Platform.OS === 'android' && 'white'}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />

        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Note"
            component={Note}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
