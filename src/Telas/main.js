import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { db, auth } from "../Serviços/firebase";
import { ref, get, remove } from 'firebase/database'
import { useIsFocused } from "@react-navigation/native";

const TelaMain = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const isFocused = useIsFocused()
    
    useEffect(() => {
        const userRef = ref(db, "/users/" + auth.currentUser.uid)
        get(userRef)
            .then((user) => {
                setNome(user.val().nome)})
            .catch((error) => console.log(error))
    }, [isFocused])
  

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
                <Text style={styles.headerText}>Seja bem vindo {nome} !</Text>
            
                 <View style={styles.containerBody}>
                 <TouchableOpacity
                    onPress={() => navigation.navigate('Rotina')}
                    >
                 <Image
                    source={require('../assets/comida.png')}
                    style={styles.comida}
                />
                <Text style={styles.textIcons}>Alimentos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Prescription')}
                    >
                 <Image
                    source={require('../assets/prescricao.png')}
                    style={styles.prescricao}
                />
               <Text style={styles.textIcons}>Prescrições</Text>
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
                <Text style={styles.textIcons}>IMC</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('WaterCalculator')}
                    >
                 <Image
                    source={require('../assets/agua.png')}
                    style={styles.receitas}
                />
                <Text style={styles.textIcons}>Água</Text>
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
        paddingTop: '20%',
       
        
    },
    containerBody: {
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',  
        justifyContent: 'space-between',
        padding: '8%',   
    },
    containerButtons: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        paddingTop: '5%',     
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
    textIcons:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#585858',
        paddingTop: '5%',
        
    },
    comida: {
        height: 120,
        width: 120,
    },
    prescricao: {
        height: 120,
        width: 120,
    },
    receitas: {
        height: 120,
        width: 120,
    },
    configButton: {
        height: 30,
        width: 30,
    },
    button: {     
        backgroundColor: '#E6E6E6',
        width: '90%',
        paddingBottom: 20,
        paddingTop: 20,
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