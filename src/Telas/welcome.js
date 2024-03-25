import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList } from 'react-native';


const TelaWelcome = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
            />
            <Text style={styles.textLogo}>Nutrie</Text>
                 <View style={styles.container2}>
                <Text style={styles.text}>Monitore e cuide da sua alimentação de qualquer lugar!</Text>              
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.button}>Iniciar!</Text>
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
        marginBottom: 40,
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
        color: '#fff',
        alignSelf: 'center', 
        
    },         
})

export default TelaWelcome