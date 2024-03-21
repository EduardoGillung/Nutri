import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList } from 'react-native';
import Header from "../Componentes/Header";
import { ref, get, set, push, onValue, remove, getDatabase, update, child } from 'firebase/database'
import { db } from "../Serviços/firebase"



const TelaWelcome = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
            />         
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',    
    },
    logo: {
        height: 40,
        width: 40,
    }          
})

export default TelaWelcome;