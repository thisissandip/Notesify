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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
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
      </Stack.Navigator>

      {/*         <Home /> */}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

export default App;
