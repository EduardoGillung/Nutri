import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Pressable, Image, Keyboard } from 'react-native';
import { getAuth, signInWithEmailAndPassword, getReactNativePersistence } from "firebase/auth";
import { auth } from '../Serviços/firebase';


const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)


    const handleLogin = async () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoginFailed(false)
                console.log('Usuario logado com sucesso:', userCredential.user.email);
                navigation.navigate('Main');
                Keyboard.dismiss();
            })
            .catch((error) => {
                setLoginFailed(true)
                console.log('Erro ao fazer o login:', error.message)
                // Close the keyboard
                Keyboard.dismiss();
            })
    }
    

return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Seja muito bem vindo!</Text>
        <Image
                source={require('../assets/maça-login.png')}
                style={styles.logo}
            />
        
        <View style={styles.content}>
            <Text style={styles.conta}>Entrar </Text>
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
                <Text style={styles.register}>Não Possui uma conta? Clique Aqui</Text>
            </Pressable>

            <Pressable style={styles.button} 
                onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </Pressable> 
        </View>
    </SafeAreaView>
);
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4169e1',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    content:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
        paddingBottom: '20%',   
    },
    logo: {
        width: '40%',
        height: '20%',
        marginLeft: '50%', 
    },
    header:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 100,
        color: '#fff',        
    },
    input: {
        width: '80%',   
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: '8%',
        padding: 12,
        borderRadius: 12,
        fontSize: 18,
        fontWeight: '300',
    },
    login: {
        backgroundColor: 'gray',
        color: 'gray',
    },
    loginFailed: {
        color: 'red',
        fontSize: 20,
        margin: 10,
        fontWeight: '700',
    },
    register: {
        fontSize: 16,
        color: '#717171',
        fontWeight: '500',
    },
    button: {     
        backgroundColor: '#4169e1',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center', 
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 20,  
        margin: 20,
        
    },    
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
    conta: {
        margin: 50,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#696969',
    }  
})
export default TelaLogin; 