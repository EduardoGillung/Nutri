import React, { useEffect, useState } from "react";
import { View, TextInput, SafeAreaView, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';


const TelaWelcome = ({ navigation }) => {                          
    return (
        <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
            />
            <Text style={styles.textLogo}>Nutri</Text>
                 <View style={styles.content}>
                <Text style={styles.text}>Monitore e cuide da sua alimentação de qualquer lugar!</Text>
                <Text style={styles.description}>Faça o login para começar!</Text>               
                <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </Pressable>        
            </View>    
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4169e1',
        alignItems: 'center',
        justifyContent: 'center',    
    },
    content: {
        
        backgroundColor: '#fff',
        marginTop: '50%',
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',    
    },
    logo: {
        height: '20%',
        width: '40%',
        marginTop: '50%',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#585858'   
    },
    description: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20,
        color: '#585858',
    },
    textLogo:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    button: {     
        backgroundColor: '#4169e1',
        width: '40%',
        height: '25%',
        borderRadius: 25,  
        justifyContent: 'center',
        alignItems: 'center', 
    },    
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },     
})

export default TelaWelcome