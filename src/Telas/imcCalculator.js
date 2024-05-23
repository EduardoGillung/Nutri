import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity, Keyboard, StatusBar } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

const TelaIMCcalculator = ({ navigation }) => {
        const isFocused = useIsFocused();
        const [peso, setPeso] = useState('');
        const [altura, setAltura] = useState('');
        const [imc, setImc] = useState(null);
        const [Error, setError] = useState(false);

        useEffect(() => {
            // Limpa os estados ao montar o componente
            setPeso('');
            setAltura('');
            setImc(null);
          
        }, [isFocused]);

        const calcularIMC = () => {
            if(pesoKg === '' || alturaM === '') {
                console.log("Erro ao calcular verifique os campos acima")
                setError(true);
                return
            } 
          const pesoKg = parseFloat(peso);
          const alturaM = parseFloat(altura.replace(',', '.'));
      
          if (pesoKg && alturaM) {
            const imcValue = pesoKg / (alturaM * alturaM);
            setImc(imcValue.toFixed(2));
            setError(false);
          } else {
            setImc(null);
            setError(true);
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
          const getIMCColor = (imcValue) => {
            if (imcValue < 18.5) return '#00A3FF'; // Magreza
            if (imcValue >= 18.5 && imcValue <= 24.9) return '#00AD1C'; // Normal
            if (imcValue >= 25.0 && imcValue <= 29.9) return '#D7C100'; // Sobrepeso
            if (imcValue >= 30.0 && imcValue <= 39.9) return '#EF7300'; // Obesidade
            if (imcValue >= 40.0) return '#FC0000'; // Obesidade Grave
            return 'gray'; // Caso de erro ou valor não definido
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
                    {imc !== null && (
                        <Text style={[styles.imc, { color: getIMCColor(parseFloat(imc)) }]}>
                            {imc}
                        </Text>
                    )}  
                </Pressable>
            </View>
            <View style={styles.ErrorContainer}>
            {Error && <Text style={styles.errorText}>Erro ao calcular é necessario que insira seu peso e altura </Text>}
            </View>
            <View style={styles.TableContent}>
                <Text style={styles.textTable}>IMC</Text>
                <Text style={styles.textTable}>Classificação</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Menor que 18,5</Text>
                <Text style={styles.magreza}>Magreza</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Entre 18,5 e 24,9</Text>
                <Text style={styles.normal}>Normal</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Entre 25,0 e 29,9</Text>
                <Text style={styles.sobrepeso}>Sobrepeso</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Entre 30,0 e 39,9</Text>
                <Text style={styles.obesidade}>Obesidade</Text>
            </View>
            <View style={styles.Table}>
                <Text style={styles.text}>Maior que 40,0</Text>
                <Text style={styles.obesidadeGrave}>Obesidade Grave</Text>
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
        paddingTop: '2%',   
    },
    content: {  
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',    
    },
    ErrorContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 10,
    },
    IMCcontent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
    }, 
    ButtonContent: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    TableContent: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#8C8C8C',        
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
        margin: 12,
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
        marginRight: '85%',    
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    imc: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8C8C8C',
        
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
    magreza: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00A3FF',
        textAlign: 'center',
    },
    normal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00AD1C',
        textAlign: 'center',
    },
    sobrepeso:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D7C100',
        textAlign: 'center',
    },
    obesidade:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EF7300',
        textAlign: 'center',
    },
    obesidadeGrave: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FC0000',
        textAlign: 'center',
    },
})
export default TelaIMCcalculator;