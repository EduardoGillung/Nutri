import React, { useEffect, useState } from "react";
import { View, TextInput, SafeAreaView, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';


const TelaWelcome = ({ navigation }) => {                          
    return (
        <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
            />
            <Text style={styles.textLogo}>Nutri</Text>
                 <View style={styles.content}>
                <Text style={styles.text}>Monitore e cuide da sua alimentação de qualquer lugar!</Text>
                <Text style={styles.description}>Faça o login para começar</Text>               
                <Pressable style={styles.button} 
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </Pressable>        
            </View>    
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4169e1',
        alignItems: 'center',
        justifyContent: 'center',    
    },
    content: {
        backgroundColor: '#fff',
        marginTop: '50%',
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingBottom: 20,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8%',    
    },
    logo: {
        height: '20%',
        width: '40%',
        marginTop: '50%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#585858', 
        marginHorizontal: 2,
    },
    description: {
        fontSize: 18,
        fontWeight: '400',
        color: '#585858',
        padding: 12,
           
    },
    textLogo:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    button: {     
        backgroundColor: '#7AA466',
        width: '50%',
        borderRadius: 20,
        paddingTop: 18,
        paddingBottom: 18,
        marginBottom: 12,  
        justifyContent: 'center',
        alignItems: 'center', 
    },    
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },     
})

export default TelaWelcome