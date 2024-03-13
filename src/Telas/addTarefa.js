import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native';
import Header from "../Componentes/Header";
import firebase, { db } from '../Serviços/firebase';
import { ref, set, onValue, remove, Database, child } from 'firebase/database'


const TelaAddTarefa = ({ navigation }) => {
    
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    var userId = Date.now().toString()
    const tarefaRef = ref(db, 'Lista de tarefas/' + task)

    function addTask () {     
        
        set(tarefaRef, {
            description: description,
            taskId: userId,
        
        }).then(() => {
            //data saved sucessfully!
            alert('Tarefa adicionada');
            navigation.navigate('Home')
           
            
        })
            .catch((error) => {
                //write failed
                alert(error);
            });
              
    };

    return (
        <View style={styles.container}>
        <Header />

        <TextInput
            style={styles.input}
            placeholder="Task name"
            value={task}
            onChangeText={(task) => setTask(task)}
        />
        <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(description) => setDescription(description)}
        />
        
        <Button style={styles.button} title="Salvar" onPress={addTask}/>

        

        <Pressable 
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.register}>Ir tela home </Text>
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
      button: {
       backgroundColor: '#708090',
      },
      
})

export default TelaAddTarefa;