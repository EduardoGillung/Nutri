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
            
                 <View style={styles.containerBody}>
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
                <View style={styles.containerBody}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Calculator')}
                    >
                 <Image
                    source={require('../assets/calculadora.png')}
                    style={styles.receitas}
                />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('WaterCalculator')}
                    >
                 <Image
                    source={require('../assets/agua.png')}
                    style={styles.substituicao}
                />
                </TouchableOpacity>
                </View>
                
                <View style={styles.containerButtons}>             
                
                <TouchableOpacity style={styles.button} 
                    onPress={() => navigation.navigate('Config')}>
                    <Image
                    source={require('../assets/config.png')}
                    style={styles.configButton}
                    />
                    <Text style={styles.buttonText}>Configurações</Text>
                </TouchableOpacity>
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
    containerBody: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',      
    },
    containerButtons: {
        flex: 1,
        backgroundColor: '#fff',
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
    configButton: {
        height: 30,
        width: 30,
  
    },
    button: {     
        backgroundColor: '#E6E6E6',
        width: '80%',
        height: '30%',
        borderRadius: 20,        
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },    
    buttonText: {    
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
        marginHorizontal: 20,  
    },     
})
export default TelaMain;