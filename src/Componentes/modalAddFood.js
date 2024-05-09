import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput, Image, Modal } from 'react-native';
import { db } from "../Serviços/firebase";
import { ref, set, remove } from 'firebase/database'
import { ModalAlertFood } from "./modalAlertFood";

export function ModalAddFood({ handleClose }) {
    
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    var userId = Date.now().toString()
    const tarefaRef = ref(db, 'Rotina Alimentar/' + task)


    function addTask () {        
        set(tarefaRef, {
            task: task,
            description: description,
            taskId: userId,
        
        }).then(() => {
            //data saved sucessfully!
            
            console.log("Tarefa salva com sucesso do banco de dados")

        })
            .catch((error) => {
                //write failed
                alert(error);
            });
    }  
    

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.containerHeader}>
                    <TextInput style={styles.taskName}
                        placeholder="Adicione o titulo"
                        value={task}
                        onChangeText={(task) => setTask(task)}   
                    >
                    </TextInput>
                        
            </View>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    value={description}
                    onChangeText={(description) => setDescription(description)}
                />
    
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={addTask}>
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>        
                </View>
            </View>
        </View>
      );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "rgba(24, 24, 24, 0.6)",
            alignItems: 'center',
            justifyContent: 'center',
        },
        content:{
            backgroundColor: '#FFF',
            width: '90%',
            height: 400,
            paddingTop: 24,
            paddingBottom: 24,
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: 8,
        },
        containerHeader: {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: '10%',

        },
        
        title:{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            marginBottom: 24,
        },
        input:{
            backgroundColor: '#f0f0f0',
            width: '90%',
            height: '60%',
            padding: 14,
            borderRadius: 8,
        },
        text:{
            color: '#FFF',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        buttonArea:{
            flexDirection: 'row',
            width: '90%',
            marginTop: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        button:{
            flex: 1,
            alignItems: 'center',
            marginTop: 14,
            marginBottom: 14,
    
        },
        buttonText:{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'gray',
        },
        buttonSave:{
            backgroundColor: '#4169e1',
            borderRadius: 8,
            justifyContent: 'center',
            height: 50,
    
        },
        buttonSaveText:{
           color: '#FFF',
           fontWeight: 'bold',
           fontSize: 18,
        }
    })