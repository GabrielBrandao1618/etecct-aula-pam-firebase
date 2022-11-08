import {View,Text, Image, StyleSheet, Button} from 'react-native'
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

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {nome}
            </Text>
            <Text>Nota 1: {nota1}</Text>
            <Text>Nota 2: {nota2}</Text>
            <Text>Nota 3: {nota3}</Text>
            <Image 
                style={{
                    width: 200,
                    height: 200
                }}
                source={{
                    uri: imagem
                }}
            />

            <Button
                title="Deletar aluno"
                onPress={handleDeleteSelf}
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