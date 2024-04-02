import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';


const TelaRevenues = ({ navigation }) => {
                              
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../assets/receitas.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Receitas e Dicas</Text>
                </View>
                 
                <View style={styles.containerButtons}>             
                <TextInput style={styles.button} 
                    onPress={() => navigation.navigate('Welcome')}>
                    
                </TextInput>
                

                

                <TextInput style={styles.button} 
                    onPress={() => navigation.navigate('Welcome')}>
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
        backgroundColor: 'green',
            
    },
    containerHeader: {
        flex: 0.3,
        backgroundColor: '#4169e1',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
          
    },
    containerButtons: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        
    },
    headerText: {
       color: '#fff',
       fontSize: 32,
       fontWeight: 'bold',
       marginLeft: '5%',
      
    },
    logo: {
        height: '40%',
        width: '18%',
        marginLeft: '5%', 
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textLogo:{
        fontSize: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
   
    button: {     
        backgroundColor: '#d3d3d3',
        width: '80%',
        height: '35%',
        borderRadius: 20,        
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },    
    buttonText: {    
        fontSize: 24,
        fontWeight: 'bold',  
    },
    touchable: {
        backgroundColor: 'grey',
        width: '40%',
      
    },  
})
export default TelaRevenues;