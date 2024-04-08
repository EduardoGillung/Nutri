import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity, Modal } from 'react-native';
import { ModalFood, ModalPassword } from "../Componentes/modal";
import { ref, get, set, push, onValue, remove, getDatabase, update, child } from 'firebase/database'
import { db } from "../Serviços/firebase";

const TelaRotina = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [prescription, setPrescription] = useState('');

    const showModal = () => {
        setModalVisible(true);
    }
    const renderItem = ({ item }) => (
        <View style={styles.prescriptions}>
            <Text style={styles.data}>{item.task}</Text>
            <Text style={styles.data}>{item.description}</Text>
        </View>
    )

    useEffect(() => {
        const tarefaRef = ref(db, 'Rotina Alimentar/')

        onValue(tarefaRef, (snapshot) =>{
        if(snapshot.exists()) {
            const data = snapshot.val();
            const getData = Object.values(data)

            setPrescription(getData)
            console.log(getData)
            }
        })
    },[])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Main')}>       
                <Image
                    source={require('../assets/return.png')}
                    style={styles.returnButton}
                />
                </TouchableOpacity>

                <Image
                    source={require('../assets/comida.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Rotina Alimentar </Text>
                
            <View style={styles.content}>
                 <TouchableOpacity onPress={showModal}>       
                <Image
                    source={require('../assets/add.png')}
                    style={styles.addButton}
                />
                </TouchableOpacity> 
                <Text style={styles.text}>Adicionar tarefa </Text>

                <Modal visible={modalVisible} animationType='fade'>
                    <ModalFood handleClose={ () => setModalVisible(false) } />
                </Modal>
            </View> 
            <View style={styles.InputContent}>
                <FlatList style={styles.taskList}
                    data={prescription}
                    renderItem={renderItem}
                    keyExtractor={item => item.taskId}
                    
                />                  
        </View>  

        </View> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 50,       
    },
    content: {  
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '5%',        
    },
    InputContent: {
        width: '90%', 
        paddingTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingBottom: 10,
    },
    data: {
        color: 'gray',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
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
        marginRight: '90%',
        marginLeft: 10,    
    },
    addButton: {
        height: 60,
        width: 60,
        marginLeft: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    }, 
})
export default TelaRotina;