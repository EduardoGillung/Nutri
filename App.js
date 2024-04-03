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
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import TelaTeste from './src/Telas/teste';

const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Main'>
        <Tab.Screen
          options={{ headerShown: false, tabBarButton: () => null,
            tabBarVisible: false, tabBarStyle: { display: "none" }}} 
          name="Welcome"
          component={TelaWelcome}   
         />
        <Tab.Screen
          options={{ headerShown: false, tabBarButton: () => null,
            tabBarVisible: false, tabBarStyle: { display: "none" } }} 
          name="Login"
          component={TelaLogin}
         />
         <Tab.Screen
          options={{ headerShown: false, tabBarButton: () => null,
            tabBarVisible: false, tabBarStyle: { display: "none" } }} 
          name="addUser"
          component={TelaAddUser}
         />
         <Tab.Screen
          name="Main"
          component={TelaMain}
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <Ionicons size={size} color={color} name="home" />
            }
            return <Ionicons size={size} color={color} name="home-outline" />
          }
        }} 
          
         />
        <Tab.Screen
          name="addTarefa"
          component={TelaAddTarefa}   
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <MaterialCommunityIcons size={size} color={color} name="food-apple" />
            }
            return <MaterialCommunityIcons size={size} color={color} name="food-apple-outline" />
          }
         }} 
           
         />
         <Tab.Screen
          name="Home"
          component={TelaHome}
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <MaterialCommunityIcons size={size} color={color} name="book-open" />
            }
            return <MaterialCommunityIcons size={size} color={color} name="book-open-outline" />
          }
         }}  
         />
         <Tab.Screen
         name="Prescriptions"
         component={TelaPrescriptions}
         options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
          if(focused){
              return <FontAwesome5 size={size} color={color} name="file-medical" />
          }
          return <FontAwesome5 size={size} color={color} name="file-medical" />
        }
       }} 
          
         />
         <Tab.Screen
          name="Revenues"
          component={TelaRevenues}
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <MaterialCommunityIcons size={size} color={color} name="book-open" />
            }
            return <MaterialCommunityIcons size={size} color={color} name="book-open-outline" />
          }
         }}  
          
         />
         <Tab.Screen
           
          name="Historic"
          component={TelaHistoric}
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <MaterialCommunityIcons size={size} color={color} name="history" />
            }
            return <MaterialCommunityIcons size={size} color={color} name="history" />
          }
         }}
         />
         <Tab.Screen
          name="Config"
          component={TelaConfig}
          options={{ headerShown: false, tabBarButton: () => null,
            tabBarVisible: false, tabBarStyle: { display: "none" }}} 
          
         />   

        <Tab.Screen
            name="Teste"
            component={TelaTeste}
            options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
              if(focused){
                  return <Ionicons size={size} color={color} name="home" />
              }
              return <Ionicons size={size} color={color} name="home-outline" />
            }
          }} 
          
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;