import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaLogin from './src/Telas/login';
import TelaAddUser from './src/Telas/addUser';
import TelaWelcome from './src/Telas/welcome';
import TelaMain from './src/Telas/main';
import TelaPrescriptions from './src/Telas/prescriptions';
import TelaConfig from './src/Telas/config';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TelaRotina from './src/Telas/rotina';
import TelaWaterCalculator from './src/Telas/waterCalculator';
import TelaIMCcalculator from './src/Telas/imcCalculator';
import { Animated } from 'react-native';

export const Tab = createBottomTabNavigator();

function App() {
  
  
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Welcome'
        screenOptions={{
          animation: 'fade',
          tabBarShowLabel: false,
        }}
    >
        <Tab.Screen
          options={{ headerShown: false, tabBarButton: () => null,
            tabBarVisible: false, tabBarStyle: { display: "none" }}} 
          name="Welcome"
          component={TelaWelcome}   
         />
        <Tab.Screen
          options={{ headerShown: false, tabBarButton: () => null,
            tabBarVisible: false, tabBarStyle: { display: "none" }, animation: 'fade', }} 
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
          options={{ headerShown: false, animation: 'fade', tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <Ionicons size={size} color={color} name="home" />
            }
            return <Ionicons size={size} color={color} name="home-outline" />
          }
        }} 
          
         />
        <Tab.Screen
          name="Rotina"
          component={TelaRotina}   
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <MaterialCommunityIcons size={size} color={color} name="food-apple" />
            }
            return <MaterialCommunityIcons size={size} color={color} name="food-apple-outline" />
          }
         }} 
           
         />
         
         <Tab.Screen
         name="Prescription"
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
          name="Calculator"
          component={TelaIMCcalculator}
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <AntDesign size={size} color={color} name="calculator" />
            }
            return <AntDesign size={size} color={color} name="calculator" />
          }
         }}  
          
         />
         <Tab.Screen
           
          name="WaterCalculator"
          component={TelaWaterCalculator}
          options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => {
            if(focused){
                return <MaterialCommunityIcons size={size} color={color} name="cup-water" />
            }
            return <MaterialCommunityIcons size={size} color={color} name="cup-water" />
          }
         }}
         />
         <Tab.Screen
          name="Config"
          component={TelaConfig}
          options={{ headerShown: false, tabBarButton: () => null,
            tabBarVisible: false, tabBarStyle: { display: "none" }}} 
          
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;