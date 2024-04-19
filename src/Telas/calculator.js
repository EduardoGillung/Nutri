import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity } from 'react-native';

const TelaCalculator = ({ navigation }) => {

    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Main')}>       
                <Image
                    source={require('../assets/return.png')}
                    style={styles.returnButton}
                />
                </TouchableOpacity>

                <Image
                    source={require('../assets/calculadora.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Calculadora IMC </Text>
                <Text style={styles.text}>IMC é o  Índice de Massa Corpórea, parâmetro para calcular o peso ideal de cada pessoa. </Text>
            <View style={styles.content}>
                <Text style={styles.text}>Peso</Text>    
                <Text style={styles.text}>Altura</Text>
            </View> 
        <View style={styles.content}>
            <TextInput style={styles.input}>   
            </TextInput>
            <TextInput style={styles.input}>   
            </TextInput>              
        </View>
        <View style={styles.content}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchableText}>Calcular IMC</Text>
            </TouchableOpacity>    
        </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: '15%',       
    },
    content: {  
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '5%',
                
    },
    InputContent: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    input: {
        backgroundColor: '#E6E6E6',
        height: '200%',
        width: '35%',
        borderRadius: 20,    
    },
    touchable: {
        width: '85%',
        height: '30%',
        backgroundColor: '#7AA466',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,

    },
    headerText: {
       color: 'gray',
       fontSize: 30,
       fontWeight: 'bold',
    },
    logo: {
        height: 60,
        width: 60,    
    },
    returnButton: {
        height: 40,
        width: 40,
        marginRight: '90%',
        marginLeft: 10,    
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    touchableText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },  
})
export default TelaCalculator;