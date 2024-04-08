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
                 <TouchableOpacity
                    onPress={() => navigation.navigate('Rotina')}
                    >
                 <Image
                    source={require('../assets/comida.png')}
                    style={styles.comida}
                />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Prescription')}
                    >
                 <Image
                    source={require('../assets/prescricao.png')}
                    style={styles.prescricao}
                />
                </TouchableOpacity>

                </View>
                <View style={styles.container2}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Revenues')}
                    >
                 <Image
                    source={require('../assets/receitas.png')}
                    style={styles.receitas}
                />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Historic')}
                    >
                 <Image
                    source={require('../assets/substituicao.png')}
                    style={styles.substituicao}
                />
                </TouchableOpacity>
                </View>
                
                <View style={styles.containerButtons}>             
                <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.buttonText}>Mais informações</Text>
                </Pressable>
                <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Config')}>
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
        justifyContent: 'center',
        alignItems: 'center',
        
            
    },
    container2: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        width: '100%',
        flexDirection: 'row',      
    },
    containerButtons: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        width: '100%',
        justifyContent: 'center',
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
        height: '7%',
        width: '14%',
        marginRight: '75%',
        marginTop: '20%',
        
        
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textLogo:{
        fontSize: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    comida: {
        height: '70%',
        width: 135,
        margin: '10%', 
    },
    prescricao: {
        height: '70%',
        width: 135,
        margin: '10%', 
    },
    receitas: {
        height: '70%',
        width: 135,
        margin: '10%', 
    },
    substituicao: {
        height: '70%',
        width: 135,
        margin: '10%', 
    },
    button: {     
        backgroundColor: '#fff',
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
        color: 'gray',  
    },     
})
export default TelaMain;