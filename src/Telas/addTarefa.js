import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Platform } from 'react-native';
import Header from "../Componentes/Header";
import firebase from '../Serviços/firebase';
import { getDatabase, ref, set, get, update, remove } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid';


const TelaAddTarefa = () => {
    const [tarefa, setTarefas] = useState({nome: '', descricao: ''})

    const adicionaTarefa = (tarefa) => {     
        const database = getDatabase(firebase);
        let id = 5;
        const tarefaRef = ref(database, 'tarefas/' + id);
        set(tarefaRef, { tarefa: tarefa, completado: false })
            .then(() => {
                setTarefas((Tarefas) => [
                    ...Tarefas,
                    { id: id, tarefa: tarefa, completado: false },
                ])
                console.log("Tarefa adicionada com sucesso");
            })
            .catch((error) => {
                console.error("Erro ao adicionar tarefa", error);
            })   
    };

    return (
        <View style={styles.container}>
            <Header />
            <TextInput
                style={styles.input}
                placeholder="Nova tarefa"
                value={tarefa.nome}
                onChangeText={(value) => setTarefas({...tarefa, nome: value})}
            />
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                multiline={true}
                value={tarefa.descricao}
                onChangeText={(value) => setTarefas({...tarefa, descricao: value})}
            />
            

            <Button title="Salvar" onPress={adicionaTarefa}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',    
    }
})

export default TelaAddTarefa;