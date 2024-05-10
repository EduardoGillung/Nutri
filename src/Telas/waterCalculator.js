import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity, Keyboard } from 'react-native';

const TelaWaterCalculator = ({ navigation }) => {
    const [peso, setPeso] = useState('');
    const [quantiaAgua, setQuantiaAgua] = useState(null);

        useEffect(() => {
            // Limpa os estados ao montar o componente
            setPeso('');
            setQuantiaAgua(null);
          
        }, []);
        
        const calcularAgua = () => {
          const pesoKg = parseFloat(peso);
      
          if (pesoKg) {
            const quantiaAgua = pesoKg * 0.035
            setQuantiaAgua(quantiaAgua.toFixed(1));
          } else {
            setQuantiaAgua(null);
          }
          // Close the keyboard
            Keyboard.dismiss();
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
                <Text style={styles.title}>Calculadora de Água </Text>
                <Text style={styles.description}>Use a calculadora abaixo para saber a quantia de água que você precisa tomar diariamente. </Text>
            <View style={styles.content}>
                <Text style={styles.text}>Peso (ex: 70 kg)</Text>    
            </View> 
            <View style={styles.content}>
                <TextInput style={styles.input}
                onChangeText={text => setPeso(text)}
                value={peso}
                keyboardType="numeric"
                />              
            </View>
        <View style={styles.ButtonContent}>
            <TouchableOpacity style={styles.touchable} onPress={calcularAgua}>
                <Text style={styles.touchableText}>Calcular Água</Text>
            </TouchableOpacity>
        </View>
            <View style={styles.IMCcontent}>
                <Text style={styles.text}>Quantia diária:</Text>
                <Pressable style={styles.input}>
                    <Text style={styles.waterText}> 
                    {quantiaAgua !== null && <Text style={styles.WaterText}>{quantiaAgua} L </Text>} 
                    </Text>   
                </Pressable>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>A quantidade diária de água varia conforme a atividade física e temperatura ambiente.
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
        paddingTop: '2%', 
    },
    InputContent: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    input: {
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        height: '100%',
        width: '35%',
        borderRadius: 20,
        fontSize: 22,
        fontWeight: '500',
        color: 'gray',
        padding: 10,
    },
    IMCcontent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8%',
    },
    infoText: {
        color: 'gray',
        fontSize: 20,
        fontWeight: '500',
        
    },
    waterText: {
        fontWeight: 'bold',
        color: '#0085FF',
        fontSize: 30,
       
    },

    ButtonContent: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',  
    },
    
    touchable: {
        width: '90%',
        paddingBottom: 14,
        paddingTop: 14,
        margin: 18,
        backgroundColor: '#7AA466',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    title: {
        color: 'gray',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
     },
     description: {
         color: 'gray',
         fontSize: 20,
         fontWeight: '500',
         textAlign: 'center',
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
export default TelaWaterCalculator;