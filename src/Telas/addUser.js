import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import firebase from '../Serviços/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


function TelaAddUser({navigation}) {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [createFailed, setCreateFailed] = useState(false)

  const registrar = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, nome, email, senha)
      .then((userCredential) => { 
        console.log('Usuario criado com sucesso', userCredential.user.email);
        setCreateFailed(false)
        navigation.navigate('Login')
      })
      .catch((error) => {
        console.error('Erro ao criar usuario:', error.message)
        setCreateFailed(true)
      })
  };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Cadastrando-se</Text>
      <View style={styles.container2}>
      {createFailed && <Text style={styles.createFailed}>Falha ao criar Usuário, verifique os campos</Text>}
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
        style={styles.input}
      />

      <Pressable style={styles.button} 
          onPress={registrar}>
          <Text style={styles.buttonText}>Criar conta</Text>
      </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4169e1',
  },
  container2: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    paddingTop: '10%',
    backgroundColor: '#fff',
    borderRadius: 10,    
  },
  header: {
    flex: 1,
    paddingTop: 20,
    marginTop: '10%',
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    height: '10%',
    width: '80%',
    padding: 10,
    backgroundColor: '#dcdcdc',
    marginBottom: 20,
    borderRadius: 20,
  },
  createFailed: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  button: {     
    backgroundColor: '#4169e1',
    width: '40%',
    height: 60,
    borderRadius: 25,  
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }, 
});

export default TelaAddUser;