import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native';
import firebase from '../Serviços/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth, db } from '../Serviços/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ref, set, remove } from 'firebase/database'


function TelaAddUser({navigation}) {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const [createFailed, setCreateFailed] = useState(false)

  const registrar = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const userRef = ref(db, 'users/'+ userCredential.user.uid)
            set(userRef, { nome: nome })
              .then(() => {
                console.log('Usuário criado com sucesso:', userCredential.user.email);
                setCreateFailed(false)
                navigation.navigate('Login')
              })
              .catch((error) => {
                console.error("Erro ao adicionar usuário:", error);
              })
      })
      .catch((error) => {
        console.error('Erro ao criar usuario:', error.message)
        setCreateFailed(true)
      })
      
  };


  return (
    <SafeAreaView style={styles.container}>   
        <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>       
                <Image
                    source={require('../assets/return.png')}
                    style={styles.returnButton}
                />
        </TouchableOpacity>
       
         
           <Text style={styles.title}>Cadastrando-se</Text>
           <Text style={styles.description}>Começe já a cuidar de você e sua rotina!</Text>
        
      <View style={styles.content}>
      {createFailed && <Text style={styles.createFailed}>Falha ao criar cadastro, verifique os campos</Text>}
      <Text style={styles.text}>Qual seu nome?</Text>
      <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          style={styles.input}
        />
      <Text style={styles.text}>Digite seu e-mail</Text>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      <Text style={styles.text}>Crie uma senha</Text>
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
          style={styles.input}
        />
      <Text style={styles.largeText}>Confirme sua senha</Text>
        <TextInput
          placeholder="Confirme sua senha"
          value={senhaConf}
          onChangeText={(text) => setSenhaConf(text)}
          secureTextEntry={true}
          style={styles.input}
        />
      
        <Pressable style={styles.button} onPress={registrar}>
            <Text style={styles.buttonText}>Concluir cadastro</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4169e1',
    
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14, 
          
  },
  title: {
    color: '#fff',
    fontSize: 40,
    marginRight: '5%',
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    paddingBottom: 20,
  },
  text:{
    color: '#8C8C8C',
    fontSize: 20,
    fontWeight: '700',
    marginRight: '40%',
  },
  largeText: {
    color: '#8C8C8C',
    fontSize: 20,
    fontWeight: '700',
    marginRight: '30%',
  },
  logo:{
    height: '45%',
    width: '15%',
    padding: '10%',
  },  
  input: {
        width: '80%',   
        borderColor: '#8C8C8C',
        borderWidth: 1,
        marginBottom: '8%',
        padding: 15,
        borderRadius: 12,
        fontSize: 18,
        fontWeight: '300',
    },
  createFailed: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  button: {     
    backgroundColor: '#7AA466',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: 20,  
    paddingTop: '5%',
    paddingBottom: '5%',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  }, 
  returnButton: {
    height: 40,
    width: 40,
    marginRight: '85%',  
    marginBottom: '5%', 
},
});

export default TelaAddUser;