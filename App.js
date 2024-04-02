import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/Telas/login';
import TelaAddUser from './src/Telas/addUser';
import TelaAddTarefa from './src/Telas/addTarefa';
import TelaHome from './src/Telas/home';
import TelaWelcome from './src/Telas/welcome';
import TelaMain from './src/Telas/main';
import TelaPrescriptions from './src/Telas/prescriptions';
import TelaRevenues from './src/Telas/revenues';
import TelaHistoric from './src/Telas/historic';
import TelaConfig from './src/Telas/config';



const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Main'>
        <Tab.Screen
          options={{ headerShown: false }} 
          name="Welcome"
          component={TelaWelcome}
          
         />
        <Tab.Screen
          options={{ headerShown: false }} 
          name="Login"
          component={TelaLogin}
          
         />
         <Tab.Screen
          options={{ headerShown: false }} 
          name="addUser"
          component={TelaAddUser}
         />
         <Tab.Screen
          options={{ headerShown: false }} 
          name="Main"
          component={TelaMain}
         />
        <Tab.Screen
          options={{ headerShown: false }} 
          name="addTarefa"
          component={TelaAddTarefa}    
         />
         <Tab.Screen
          options={{ headerShown: false }} 
          name="Home"
          component={TelaHome}
         />
         <Tab.Screen
          options={{ headerShown: false }} 
          name="Prescriptions"
          component={TelaPrescriptions}
         />
         <Tab.Screen
          options={{ headerShown: false }} 
          name="Revenues"
          component={TelaRevenues}
         />
         <Tab.Screen
          options={{ headerShown: false }} 
          name="Historic"
          component={TelaHistoric}
         />
         <Tab.Screen
          options={{ headerShown: false }} 
          name="Config"
          component={TelaConfig}
         />
         
         
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;