import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';


const TelaMain = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Seja bem vindo Usuario!</Text>
            
                 <View style={styles.container2}>
                 <Image
                    source={require('../assets/comida.png')}
                    style={styles.comida}
                />
                 <Image
                    source={require('../assets/prescricao.png')}
                    style={styles.comida}
                />
                </View>
                <View style={styles.container2}>
                 <Image
                    source={require('../assets/receitas.png')}
                    style={styles.comida}
                />
                 <Image
                    source={require('../assets/substituicao.png')}
                    style={styles.comida}
                />
                </View>
                
                <View style={styles.container3}>            
                <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Mais informações</Text>
                </Pressable>
                <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Configurações</Text>
                </Pressable>         
                </View> 
            </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4169e1',
            
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',      
    },
    container3:{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',      
    },
    headerText: {
        
    },
    logo: {
        height: '7%',
        width: '14%',
        marginLeft: '5%',
        marginTop: '20%',
        marginBottom: '20%',
        
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    textLogo:{
        color: '',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    comida: {
        height: '70%',
        width: '36%',
        margin: '10%',
        
    },
    button: {     
        backgroundColor: 'gray',
        width: '70%',
        height: '10%',
        borderRadius: 25,  
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%' 
    },    
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },     
})

export default TelaMain;