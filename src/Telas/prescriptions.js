import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text, TouchableOpacity, Modal } from 'react-native';
import { ModalPassword } from "../Componentes/modal";

const TelaPrescriptions = ({ navigation }) => {

    const [size, setSize] = useState(10)
    const [passwordValue, setPasswordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

       
         

  
                              
    return (
        <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Image
                source={require('../assets/receitas.png')}
                style={styles.logo}
            />
            <Text style={styles.headerText}>Prescrições</Text>
            </View>
             
            <View style={styles.containerBody}>             
            <TextInput style={styles.button} 
                onPress={() => navigation.navigate('Welcome')}>
                
            </TextInput>
            <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.touchable}
                onPress={ () => navigation.navigate('Welcome')}
             >
                 <Image
                    source={require('../assets/addButton.png')}
                    style={styles.addButton}
            />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}
                onPress={ () => navigation.navigate('Welcome')}
             >
                 <Image
                    source={require('../assets/deleteButton.png')}
                    style={styles.addButton}
            />
            </TouchableOpacity>

            </View>
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
containerBody: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    
},
containerButtons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
 
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
addButton: {
    height: '100%',
    width: '100%',
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
    marginTop: '12%',
    justifyContent: 'center',
    alignItems: 'center',
},    
buttonText: {    
    fontSize: 24,
    fontWeight: 'bold',  
},
touchable: {
    
    width: '10%',
    height: '40%',
    
  
},  
})
export default TelaPrescriptions;