import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';


const TelaMain = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content" // Estilo do texto da barra de status (light-content ou dark-content)
                backgroundColor="#4169E1" // Cor de fundo da barra de status (Android)
                translucent={false} // Define se a barra de status é translúcida ou não (Android)
             />
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
                    style={styles.receitas}
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
        paddingTop: '15%',
        
        
    },
    containerBody: {
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',  
        justifyContent: 'space-between',
        padding: '5%',
        paddingTop: '10%',    
    },
    containerButtons: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        paddingTop: '10%',
        
           
    },
    headerText: {
       color: '#fff',
       fontSize: 32,
       fontWeight: 'bold',
       marginTop: '5%',
       marginBottom: '5%', 
    },
    logo: {
        height: 60,
        width: 60,
        marginRight: '75%',
        marginTop: '5%',
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
        height: 150,
        width: 150,
    },
    prescricao: {
        height: 150,
        width: 150,
    },
    receitas: {
        height: 150,
        width: 150,
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
        width: '90%',
        paddingBottom: 24,
        paddingTop: 24,
        marginBottom: '30%',
        borderRadius: 12,        
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },    
    buttonText: {    
        fontSize: 24,
        fontWeight: 'bold',
        color: '#585858',
        marginHorizontal: 20,  
    },     
})
export default TelaMain;