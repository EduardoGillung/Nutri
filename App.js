import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/Telas/login';
import TelaAddUser from './src/Telas/addUser';
import TelaAddTarefa from './src/Telas/addTarefa';
import TelaHome from './src/Telas/home';
import TelaWelcome from './src/Telas/welcome';
import TelaMain from './src/Telas/main';



const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
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
         <Stack.Screen
          options={{ headerShown: false }} 
          name="Home"
          component={TelaHome}
         />
         <Stack.Screen
          options={{ headerShown: false }} 
          name="Welcome"
          component={TelaWelcome}
         />
         <Stack.Screen
          options={{ headerShown: false }} 
          name="Main"
          component={TelaMain}
         />
         
         

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default App;