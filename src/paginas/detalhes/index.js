import {View,Text, Image, StyleSheet, Button, TextInput} from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native';

import {firebase} from '../../firebase/firebaseConnection'

export default function Detalhes({navigation}){
    const {params:{nome, nota1, nota2, nota3, imagem, id}} = useRoute()

    function handleDeleteSelf(){
        const ref = firebase.database().ref(`Alunos/${id}`)
        ref.remove()
        navigation.goBack()
    }
    
    async function handleUpdate(){
        const ref = firebase.database().ref(`Alunos/${id}`)
        ref.set({
            Nome: _nome,
            Nota1: _nota1,
            Nota2: _nota2,
            Nota3: _nota3,
            Imagem: imagem
        })
    }

    const [_nome, setNome] = useState(nome)
    const [_nota1, setNota1] = useState(nota1)
    const [_nota2, setNota2] = useState(nota2)
    const [_nota3, setNota3] = useState(nota3)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {nome}
            </Text>
            <Image 
                style={{
                    width: 200,
                    height: 200
                }}
                source={{
                    uri: imagem
                }}
            />
            <Text>Nome</Text>
            <TextInput 
                value={_nome}
                onChangeText={setNome}
            />

            <Text>Nota 1</Text>
            <TextInput 
                value={_nota1}
                onChangeText={setNota1}
            />

            <Text>Nota 2</Text>
            <TextInput 
                value={_nota2}
                onChangeText={setNota2}
            />

            <Text>Nota 3</Text>
            <TextInput 
                value={_nota3}
                onChangeText={setNota3}
            />

            <Button
                title="Deletar aluno"
                onPress={handleDeleteSelf}
            />
            <Button
                title="Atualizar aluno"
                onPress={handleUpdate}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center'
    }
})