import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';


const TelaConfig = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.containerBody}>

                    <Pressable onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.text}>Inicio</Text>
                     </Pressable>
                    
                     <Pressable onPress={() => navigation.navigate('Welcome')}>
                        <Text style={styles.text}>Sair</Text>
                     </Pressable>                 
                </View>
            </View> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    containerHeader: {
        backgroundColor: '#4169e1',
        width: '100%',
        alignItems: 'center',
    
    },
    containerBody: {
        flex: 1,
        backgroundColor: '#4169e1',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '15%',
        
    },
    headerText: {
       color: '#fff',
       fontSize: 32,
       fontWeight: 'bold',
      
    },
    logo: {
        height: 60,
        width: 60,
        marginRight: '75%',
        marginTop: '5%',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '15%',
    },
    textLogo:{
        fontSize: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    button: {     
        backgroundColor: '#d3d3d3',
        width: '70%',
        height: '30%',
        borderRadius: 20,        
        marginBottom: '2%',
        marginTop: '2%', 
        justifyContent: 'center',
        alignItems: 'center',
    },    
    buttonText: {    
        fontSize: 24,
        fontWeight: 'bold',  
    },     
})
export default TelaConfig;