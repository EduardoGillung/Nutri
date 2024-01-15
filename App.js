import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/Telas/login';
import TelaAddUser from './src/Telas/addUser';
import TelaAddTarefa from './src/Telas/addTarefa';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          options={{ headerShown: false }} 
          name="Login"
          component={TelaLogin}
         />
        <Stack.Screen
          options={{ headerShown: false }} 
          name="addTarefa"
          component={TelaAddTarefa}
          
         />
         <Stack.Screen
          options={{ headerShown: false }} 
          name="addUser"
          component={TelaAddUser}
         />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default App;
