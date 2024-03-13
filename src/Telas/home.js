import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Platform, Pressable, Text } from 'react-native';
import Header from "../Componentes/Header";
import { ref, get, set, push, onValue, remove, getDatabase, update, child } from 'firebase/database'
import { db } from "../Serviços/firebase"






const TelaHome = ({ navigation}) => {   
    
useEffect(() => {
    const tarefaRef = ref(db, 'Lista de tarefas/')

    onValue(tarefaRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    })
})
                                
    return (
        <View style={styles.container}>
        <Header/>
        <Pressable onPress={() => navigation.navigate('addTarefa')}>
                <Text style={styles.register}>Voltar Add tarefas </Text>
            </Pressable>            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',    
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        padding: 10,
    },          
})

export default TelaHome;