import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity } from 'react-native';

const TelaWaterCalculator = ({ navigation }) => {
    const [pesoUsuario, setPesoUsuario] = useState("")
    const quantiaAgua = pesoUsuario * 0.03;
        

        const calcularAgua = () => {
            if (pesoUsuario === '') {
              alert('Por favor, insira seu peso.');
              return;
            }
            
    }
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
                    source={require('../assets/agua.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Calculadora de Água </Text>
                <Text style={styles.text}>Use a calculadora abaixo para saber a quantia de água que você precisa tomar diariamente. </Text>
            <View style={styles.content}>
                <Text style={styles.text}>Peso</Text>    
            </View> 
        <View style={styles.content}>
            <TextInput style={styles.input}
                placeholder="Insira seu peso (kg)"
                keyboardType="numeric"
                value={pesoUsuario}
                onChangeText={text => setPesoUsuario(text)}
            />
            
                       
        </View>
        <View style={styles.ButtonContent}>
            <TouchableOpacity style={styles.touchable} onPress={calcularAgua}>
                <Text style={styles.touchableText}>Calcular Água</Text>
            </TouchableOpacity>
        </View>
            <View style={styles.IMCcontent}>
                <Text style={styles.text}>Quantia diária:</Text>
                <TextInput style={styles.input}>
                <Text style={styles.waterText}> {quantiaAgua}  L</Text>   
                </TextInput>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>A quantidade diária de água varia conforme a atividade física e temperatura ambiente.
                 Durante exercícios intensos, pode variar entre 500 ml a 1 litro por hora.
                 Consulte um profissional de saúde para orientações personalizadas, considerando fatores individuais além de idade e peso.</Text> 
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
        paddingTop: '12%',       
    },
    content: {  
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    InputContent: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    input: {
        backgroundColor: '#E6E6E6',
        height: 40,
        width: '35%',
        borderRadius: 20,
        padding: 10,
    },
    IMCcontent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: '5%',
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    waterText: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 18,
       
    },

    ButtonContent: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',  
    },
    TableContent: {
        width: '100%',
        
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#4169E1',        
    },
    Table: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#fff',        
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
    textTable: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    touchableText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },  
})
export default TelaWaterCalculator;