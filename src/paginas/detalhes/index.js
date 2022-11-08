import {View,Text, Image, StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native';



export default function Detalhes(){
    const {params:{nome, nota1, nota2, nota3, imagem}} = useRoute()
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