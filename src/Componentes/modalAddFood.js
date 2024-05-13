import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput, Image, Modal } from 'react-native';
import { db } from "../Serviços/firebase";
import { ref, set, remove } from 'firebase/database'


export function ModalAddFood({ navigation, handleClose }) {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    var userId = Date.now().toString();
    const tarefaRef = ref(db, 'Rotina Alimentar/' + task)
    const [ModalError, setModalError] = useState(false);
   

    function addTask () {    
        if(task === '' || description === '') {
            console.log("Erro ao adicionar refeição verifique os campos")
            setModalError(true);
            return
        }   
        set(tarefaRef, {
            task: task,
            description: description,
            taskId: userId,
        
        }).then(() => {
            //data saved sucessfully!
            
            console.log("Tarefa salva com sucesso do banco de dados")
            setModalError(false)
        })
            .catch((error) => {
                //write failed
                setModalError(true)
                alert(error);
            });
    }  
    
    return (
        <View style={styles.container}>
           <View style={styles.content}>
                <Text style={styles.headerTitle}>Adicionando nova refeição</Text>
                <View style={styles.containerHeader}>
                <TextInput style={styles.title}
                    placeholder="Nome da refeição"
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
                {ModalError && <Text style={styles.errorText}>Erro ao adicionar refeição verifique os campos acima</Text>}
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
            paddingTop: 24,
            paddingBottom: 24,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
        },
        containerHeader: {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        input:{
            backgroundColor: '#f0f0f0',
            width: '90%',
            margin: 14,
            padding: 14,
            borderRadius: 12,
            fontSize: 16,
            fontWeight: '400',
            color: '#7C7C7C',
            
        },
        title: {
            backgroundColor: '#f0f0f0',
            width: '70%',
            borderRadius: 12,
            marginBottom: '5%',
            padding: 12,
            fontSize: 16,
            fontWeight: '400',
            color: '#7C7C7C',      
        },
        headerTitle: {
            color: '#7C7C7C',
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom: 12,
            margin: 10,
        },   
        text:{
            color: '#FFF',
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        errorText: {
                color: 'red',
                fontSize: 18,
                fontWeight: '600',
                paddingBottom: 12,
            },

        buttonArea:{
            flexDirection: 'row',
            width: '90%',
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
            fontSize: 20,
            color: 'gray',
        },
        buttonSave:{
            backgroundColor: '#7AA466',
            borderRadius: 8,
            justifyContent: 'center',
            height: 50,
    
        },
        buttonSaveText:{
           color: '#FFF',
           fontWeight: 'bold',
           fontSize: 20,
        }
    })