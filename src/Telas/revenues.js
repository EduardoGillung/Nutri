import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { ModalPassword } from "../Componentes/modal";

const TelaRevenues = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

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
                    source={require('../assets/receitas.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Receitas e Dicas</Text>
                
            <View style={styles.content}>
                 <TouchableOpacity onPress={showModal}>       
                <Image
                    source={require('../assets/add.png')}
                    style={styles.addButton}
                />
                </TouchableOpacity> 
                <Text style={styles.text}>Adicionar tarefa </Text>

                <Modal visible={modalVisible} animationType='fade'>
                    <ModalPassword  handleClose={ () => setModalVisible(false) } />
                </Modal>
            </View> 
            <View style={styles.InputContent}>
                <TextInput style={styles.input}>

                </TextInput>                   
        </View>  

        </View> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#f0f0f0'       
    },
    content: {  
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '3%',        
    },
    InputContent: {
        width: '100%', 
        alignItems: 'center',
        paddingTop: '3%',
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: '55%',
        borderRadius: 20,
    },
    headerText: {
       color: 'gray',
       fontSize: 32,
       fontWeight: 'bold',
       marginLeft: '10%',
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
export default TelaRevenues;