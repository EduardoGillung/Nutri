import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Image, Pressable, Text, TouchableOpacity, Modal } from 'react-native';
import { ref, get, set, push, onValue, remove, getDatabase, update, child } from 'firebase/database'
import { db, auth } from "../Serviços/firebase";
import { ModalAddRotina } from "../Componentes/modalAddRotina";
import { useIsFocused } from "@react-navigation/native";

const TelaRotina = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [modalVisible, setModalVisible] = useState(false);
    const [prescription, setPrescription] = useState('');

    const showModal = () => {
        setModalVisible(true);
    }
    const renderItem = ({ item }) => (
        <View style={styles.InputContent} animationType='fade'>
            <Text style={styles.title}>{item.task}</Text>
            <View style={styles.descriptionItem}>
                <TouchableOpacity onPress={() => deleteTask(item.task)}>
                    <Image
                        source={require('../assets/deleteButton.png')}
                        style={styles.deleteButton}
                    />
                     
                    </TouchableOpacity> 
                    </View>    
                <Text style={styles.description}>{item.description}</Text>
        </View>
    )

    let deleteTask = ( task ) => {
        remove(ref(db, '/users/'+auth.currentUser.uid+'/rotinas/' + task))
            .then(() => {
                console.log("Tarefa apagada com sucesso do banco de dados: " + task)
                alert("Tarefa apagada com sucesso")
            })
            .catch((error => console.error('Erro ao apagar: '+error)))
    }
    
    useEffect(() => {
        setPrescription([])
        const userPrescriptionsRef = ref(db, '/users/'+auth.currentUser.uid+'/rotinas')
        
        onValue(userPrescriptionsRef, (snapshot) => {
            if(snapshot.exists()) {
            const data = snapshot.val();
            const getData = Object.values(data)

            setPrescription(getData)
            }
            else{
                console.log('Não foi encontrado nenhum item')
            }
        })
    },[isFocused])

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
                        <Text style={styles.text}>Adicionar refeição </Text>

                    <Modal visible={modalVisible} animationType='fade'>
                        <ModalAddRotina handleClose={ () => setModalVisible(false) } />
                    </Modal>
                </View> 
                <View style={styles.flatContent}>
                    <FlatList style={styles.flatlist}
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
    prescriptions: {
        paddingTop: 10
    } 
})
export default TelaRotina;
