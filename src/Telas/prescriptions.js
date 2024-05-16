import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { ref, get, set, push, onValue, remove, getDatabase, update, child } from 'firebase/database'
import { db } from "../Serviços/firebase";
import { ModalAddPrescriptions } from "../Componentes/modalAddPrescriptions";

const TelaPrescriptions = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [prescription, setPrescription] = useState('')

    const showModal = () => {
        setModalVisible(true);
    }
    const renderItem = ({ item }) => (
        <SafeAreaView style={styles.InputContent}>
            <Text style={styles.title}>{item.task}</Text>
            <View style={styles.descriptionItem}>
                <TouchableOpacity onPress={deleteTask}>       
                    <Image
                        source={require('../assets/deleteButton.png')}
                        style={styles.deleteButton}
                    />
                    </TouchableOpacity> 
                    </View>    
                <Text style={styles.description}>{item.description}</Text>    
        </SafeAreaView>
    )

    let deleteTask = ({ task }) => {
        get(child(db, 'Receitas/' + task)).then(snapshot => {
          if(snapshot.exists()) {
            remove(ref(db, 'Receitas/' + task))
            .then(() => {
                console.log("Tarefa apagada com sucesso do banco de dados" + task)
            })
          }     
        })
        
              
    }

    useEffect(() => {
        const tarefaRef = ref(db, 'Prescrições/')
        
        onValue(tarefaRef, (snapshot) => {
            if(snapshot.exists()) {
            const data = snapshot.val();
            const getData = Object.values(data)

            setPrescription(getData)
            console.log(prescription)
            }
            else{
                alert('Não foi encontrado nenhum item')
            }
        })
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Main')}>       
                <Image
                    source={require('../assets/return.png')}
                    style={styles.returnButton}
                />
                </TouchableOpacity>

                <Image
                    source={require('../assets/prescricao.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Suplementos e Prescrições </Text>
                
            <View style={styles.content}>
                 <TouchableOpacity onPress={showModal}>       
                <Image
                    source={require('../assets/add.png')}
                    style={styles.addButton}
                />
                </TouchableOpacity> 
                <Text style={styles.text}>Adicionar prescrição </Text>

                <Modal visible={modalVisible} animationType='fade'>
                    <ModalAddPrescriptions  handleClose={ () => setModalVisible(false) } />
                </Modal>
            </View> 
            <View style={styles.flatContent}>
                <FlatList 
                    data={prescription}
                    renderItem={renderItem}
                    keyExtractor={item => item.taskId}
                    
                />                  
            </View>  

        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: '2%',     
    },
    content: {  
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '5%',
        paddingHorizontal: '5%',
                
    },
    renderItem: {
        borderRadius: 20,
        margin: 10,
        paddingTop: 10,

    },
    descriptionItem: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    InputContent: {
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        margin: 10,
        padding: 15,
    },
    flatContent: {
        flex: 0.95,
        width: '90%',
        margin: 10, 
        padding: 5,
    },
    description: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '400',
        
    },
    title: {
        color: '#585858',
        fontSize: 20,
        fontWeight: 'bold', 
    },
    
    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: '55%',
        borderRadius: 20,
        lineHeight: 2,
        
    },
    headerText: {
       color: 'gray',
       fontSize: 30,
       fontWeight: 'bold',
       marginLeft: '10%',
       marginTop: '2%',
    },
    logo: {
        height: 60,
        width: 60,    
    },
    returnButton: {
        height: 40,
        width: 40,
        marginRight: '85%',   
    },
    addButton: {
        height: 60,
        width: 60,
        marginLeft: 20,
    },
    deleteButton: {
        height: 25,
        width: 25,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    
})
export default TelaPrescriptions;