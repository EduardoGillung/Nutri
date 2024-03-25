import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../Serviços/firebase';


const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)

    const handleLogin = async () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoginFailed(false)
                console.log('Usuario logado com sucesso:', userCredential.user.email);
                navigation.navigate('addTarefa');
            })
            .catch((error) => {
                setLoginFailed(true)
                console.log('Erro ao fazer o login:', error.message)
            })
    }

return (
    <View style={styles.container}>
        <Text style={styles.header}>Seja muito bem vindo!</Text>
        <Image
                source={require('../assets/maça-login.png')}
                style={styles.logo}
            />
        
        <View style={styles.container2}>
            <Text style={styles.header}>Login</Text>
            {loginFailed && <Text style={styles.loginFailed}>Usuário ou senha inválidos</Text>}
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={styles.input}
            />
            <Pressable onPress={() => navigation.navigate('addUser')}>
                <Text style={styles.register}>Registrar novo Usuário</Text>
            </Pressable>

            <Pressable style={styles.button} 
                onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable> 
            
        </View>
    </View>
);
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4169e1',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    container2:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20%',
        borderRadius: 16,
        width: '100%',
        
    },
    logo: {
        width: '40%',
        height: '20%',
        marginLeft: 150, 
    },
    header:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 100,
        color: '#fff',        
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    login: {
        backgroundColor: 'gray',
        color: 'gray',
    },
    loginFailed: {
        color: 'red',
        fontSize: 18,
        margin: 10,
    },
    register: {
        
        fontSize: 16,
        color: '#696969',
    },
    button: {     
        backgroundColor: '#4169e1',
        width: 120,
        height: 60,
        borderRadius: 25,  
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: '10%',
        margin: 15,
        
    },    
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },  
})
export default TelaLogin; 