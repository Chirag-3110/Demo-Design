import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import NewTask from './Components/NewTask';
import Profile from './Components/Profile';
const Stack=createNativeStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#8DD9FF',
        },
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasks" component={NewTask} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;