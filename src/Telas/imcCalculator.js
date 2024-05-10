import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity, Keyboard } from 'react-native';

const TelaIMCcalculator = ({ navigation }) => {

        const [peso, setPeso] = useState('');
        const [altura, setAltura] = useState('');
        const [imc, setImc] = useState(null);

        useEffect(() => {
            // Limpa os estados ao montar o componente
            setPeso('');
            setAltura('');
            setImc(null);
          
        }, []);

        const calcularIMC = () => {
          const pesoKg = parseFloat(peso);
          const alturaM = parseFloat(altura.replace(',', '.'));
      
          if (pesoKg && alturaM) {
            const imcValue = pesoKg / (alturaM * alturaM);
            setImc(imcValue.toFixed(2));
          } else {
            setImc(null);
          }
          // Close the keyboard
            Keyboard.dismiss();
        }
        const formatoAltura = (text) => {
            // Adiciona uma vírgula após o primeiro caractere digitado
            if (text.length === 1 && text !== '0') {
              return text + ',';
            }
            return text;
          };
    
    
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
                <Text style={styles.title}>Calculadora IMC </Text>
                <Text style={styles.description}>IMC é o  Índice de Massa Corpórea, parâmetro para calcular o peso ideal de cada pessoa. </Text>
                <View style={styles.content}>
                    <Text style={styles.text}>Peso (ex: 70 kg)</Text>    
                    <Text style={styles.text}>Altura (ex: 180 cm)</Text>
            </View> 


        <View style={styles.content}>
            <TextInput style={styles.input}
            onChangeText={text => setPeso(text)}
            value={peso}
            keyboardType="numeric"
            />
            <TextInput style={styles.input}
            onChangeText={text => setAltura(formatoAltura(text))}
            value={altura}
            keyboardType="numeric"
            />   
                         
        </View>
        <View style={styles.ButtonContent}>
            <TouchableOpacity style={styles.touchable} onPress={calcularIMC} >
                <Text style={styles.touchableText}>Calcular IMC</Text>
            </TouchableOpacity>

        </View>
            <View style={styles.IMCcontent}>
                <Text style={styles.text}>Seu IMC:</Text>
                <Pressable style={styles.imcInput}>
                    {imc !== null && <Text style={styles.imc}>{imc} {}</Text>}   
                </Pressable>
            </View>
            <View style={styles.TableContent}>
                <Text style={styles.textTable}>IMC</Text>
                <Text style={styles.textTable}>Classificação</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Menor que 18,5</Text>
                <Text style={styles.description}>Magreza</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Entre 18,5 e 24,9</Text>
                <Text style={styles.description}>Normal</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Entre 25,0 e 29,9</Text>
                <Text style={styles.description}>Sobrepeso</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Entre 30,0 e 39,9</Text>
                <Text style={styles.description}>Obesidade</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Maior que 40,0</Text>
                <Text style={styles.description}>Obesidade Grave</Text>
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
        marginTop: '3%',    
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
        height: 50,
        width: '35%',
        borderRadius: 20,
        fontSize: 22,
        fontWeight: '500',
        color: 'gray',
        padding: 10,

    },
    imcInput: {
        backgroundColor: '#E6E6E6',
        height: 50,
        width: '35%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    IMCcontent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: '5%',
        alignItems: 'center',
    }, 
    ButtonContent: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',  
    },
    TableContent: {
        width: '100%',
        height: 50,
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
        textAlign: 'center',
    },
    imc: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        
    },
    textTable: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
    touchableText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },  
})
export default TelaIMCcalculator;