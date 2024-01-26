import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Platform } from 'react-native';
import Header from "../Componentes/Header";
import firebase from '../Serviços/firebase';
import { ref, set, onValue, remove } from 'firebase/database'
import { db } from "../Serviços/firebase"

const TelaAddTarefa = () => {
    
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');

    function addTask () {     
        
        var id = Date.now().toString()

        set(ref(db, 'users/' + id), {
            username: username,
            email: email,   

        }).then(() => {
            //data saved sucessfully!
            alert('data updated');
        })
            .catch((error) => {
                //write failed
                alert(error);
            });
              
    };

    function readData() {
        const starCountRef = ref(db, 'users/' + username);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            setEmail(data.email);
        });
    }

    function deleteData() {
        remove(ref(db, 'users/' + username));
        alert('removed');
    }

    

    return (
        <View style={styles.container}>
        <Header />
        <TextInput
            style={styles.input}
            placeholder="User name"
            value={username}
            onChangeText={(username) => setName(username)}
        />
        <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={(email) => setEmail(email)}
        />
        
        <Button title="Salvar" onPress={addTask}/>

    </View>
);
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',    
    }
})

export default TelaAddTarefa;