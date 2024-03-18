import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Platform, Pressable, Text, FlatList } from 'react-native';
import Header from "../Componentes/Header";
import { ref, get, set, push, onValue, remove, getDatabase, update, child } from 'firebase/database'
import { db } from "../Serviços/firebase"


const TelaHome = ({ navigation }) => {

    const [tarefa1, setTarefa1] = useState('')
    const renderItem = ({ item }) => (
        <View>
            <Text>{item.description}</Text>
        </View>
    )
    useEffect(() => {
        const tarefaRef = ref(db, 'Lista de tarefas/')
    

    onValue(tarefaRef, (snapshot) => {
        const data = snapshot.val();
        const arrayData = Object.values(data)
        console.log(arrayData);

        setTarefa1(arrayData)
        console.log(tarefa1)
    })
},[])
                                
    return (
        <View style={styles.container}>
        <Header/>
        <Pressable onPress={() => navigation.navigate('addTarefa')}>
                <Text style={styles.register}>Voltar Add tarefas </Text>
                <FlatList
                    data={tarefa1}
                    renderItem={renderItem}
                    keyExtractor={item => item.taskId}
                />

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