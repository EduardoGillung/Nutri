import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';


const TelaConfig = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../assets/return.png')}
                    style={styles.logo}
                />
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                </View>
                <View style={styles.containerBody}>

                    <Pressable onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.text}>Inicio</Text>
                     </Pressable>
                     <Pressable onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.text}>Sobre nós</Text>
                     </Pressable> 
                     <Pressable onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.text}>Atribuições e direitos</Text>
                     </Pressable> 
                     <Pressable onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.text}>Configurações</Text>
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
        flex: 0.3,
        backgroundColor: '#4169e1',
        width: '100%',
        alignItems: 'center',
        
        flexDirection: 'row',    
    },
    containerBody: {
        flex: 1,
        backgroundColor: '#4169e1',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    headerText: {
       color: '#fff',
       fontSize: 32,
       fontWeight: 'bold',
       marginTop: '3%',
       marginBottom: '5%',
    },
    logo: {
        height: '31%',
        width: '14%',
        marginRight: '5%',
        marginTop: '20%',
          
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 26,
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