import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen from './source/DetailScreen';
import Home2Screen from './source/Home2Screen';
import NewRecord from './source/NewRecordScreen';
import DeleteRecord from './source/DeleteRecordScreen';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2">
      <Stack.Screen  name="Home2" component={Home2Screen}  />
       <Stack.Screen  name="Detail" component={DetailScreen}  />
       <Stack.Screen  name="NewRecord" component={NewRecord}  />
       <Stack.Screen  name="DeleteRecord" component={DeleteRecord}  />
      </Stack.Navigator>

   </NavigationContainer>
  );
    
};


export default App;
