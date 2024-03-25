import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';


const TelaMain = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
            />
            
                 <View style={styles.container2}>
                             
                <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </Pressable>        
            </View>    
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4169e1',
        alignItems: 'center',
        justifyContent: 'center',    
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: '50%',
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',  
        
    },
    logo: {
        height: '20%',
        width: '40%',
        marginTop: '50%',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    textLogo:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    button: {     
        backgroundColor: '#4169e1',
        width: 120,
        height: 60,
        borderRadius: 25,  
        justifyContent: 'center',
        alignItems: 'center', 
    },    
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },     
})

export default TelaMain;