import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput, Image } from 'react-native';


export function ModalAlertFood({ handleClose }) {
    
    

    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.title}>Refeição adicionada com sucesso!</Text>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
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
            height: '30%',
            padding: '10%',
            alignItems: 'center',
            borderRadius: 12,
        },
          
        title:{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#7C7C7C',
            textAlign: 'center',
           
        },
        input:{
            backgroundColor: '#f0f0f0',
            width: '90%',
            height: '60%',
            padding: 14,
            borderRadius: 8,
        },
        text:{
            color: '#7C7C7C',
            fontSize: 24,
            fontWeight: 'bold',
            
        },
        buttonArea:{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button:{
            height: '50%',
            width: '60%',
            margin: 25,
            backgroundColor: '#7AA466',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
    
        },
        buttonText:{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#fff',
           
        },
    })