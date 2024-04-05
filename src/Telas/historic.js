import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Modal, Text, FlatList, TouchableOpacity } from 'react-native';
import { ModalPassword } from "../Componentes/modal";

const TelaHistoric = ({ navigation }) => {
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
                    source={require('../assets/substituicao.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Histórico e Substituições </Text>
                
            <View style={styles.content}>
                 
              

               
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '20%',
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
        height: '90%',
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
export default TelaHistoric;