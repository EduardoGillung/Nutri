import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Pressable, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Header from "../Componentes/Header";
import firebase, { db } from '../Serviços/firebase';
import { ref, set, onValue, remove, child } from 'firebase/database'


const TelaAddTarefa = ({ navigation, addTask }) => {
    
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    var userId = Date.now().toString()
    const tarefaRef = ref(db, 'Lista de tarefas/' + task)

    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    function addTask () {        
        set(tarefaRef, {
            task: task,
            description: description,
            taskId: userId,
        
        }).then(() => {
            //data saved sucessfully!
            alert('Tarefa adicionada');
            navigation.navigate('Home')
            setTask('');
            console.log("Tarefa salva com sucesso do banco de dados")

        })
            .catch((error) => {
                //write failed
                alert(error);
            });
    }     
    const deleteTask = () => {
        remove(ref(db, 'Lista de tarefas/'))
            .then(() => {
                console.log("Tarefa apagada com sucesso do banco de dados")
            })    
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}> Rotina alimentar</Text>
                <Image
                source={require('../assets/addButton.png')}
                style={styles.logo}
                />

        <View style={styles.containerBody}>
           
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

        <Button style={styles.button} title="Deletar" onPress={deleteTask}/>


        <Pressable 
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.register}>Ir tela home </Text>
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
    },
    textHeader:{
        color: '#fff',
        marginTop: '30%',
    },
    logo: {
        height: '15%',
        width: '30%',
        marginRight: '60%',
    },
    containerBody: {
        flex: 1,
        marginTop: '40%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'gray',
        marginBottom: '10%',
        padding: 10,
      },
      button: {     
        backgroundColor: '#d3d3d3',
        width: '70%',
        height: '30%',
        borderRadius: 20,        
        marginBottom: '2%',
        marginTop: '2%', 
        justifyContent: 'center',
        alignItems: 'center',
    },
     
      
})

export default TelaAddTarefa;