import { useCallback, useState } from "react";
import { Button, Text,TextInput,View, StyleSheet } from "react-native";
import {firebase} from '../../firebase/firebaseConnection'

export default function Cadastrar(){
    const [nome, setNome] = useState('')
    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('')
    const [image, setImage] = useState('')

    const cadastro = useCallback(async () => {
        if([nome, nota1, nota2, nota3].some(val => val.trim()==='')){
            return
        }
        await firebase.database().ref('Alunos').push({
            Nome: nome,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
            Imagem: image
        })
        setNome('')
        setNota1(0)
        setNota2(0)
        setNota3(0)
        setImage('')

    }, [nome, nota1, nota2, nota3, image])

    return(
        <View
            style={styles.container}
        >
            <Text
                style={{
                    fontWeight: 'bold'
                }}
            >
                CADASTRAR
            </Text>
            <Text
                style={styles.label}
            >
                Nome:
            </Text>
            <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder="Nome"
                style={styles.input}
            />
            <Text
                style={styles.label}
            >
                Nota1
            </Text>
            <TextInput 
                onChangeText={setNota1}
                value={nota1}
                style={styles.input}
                placeholder="Nota 1"
            />
            <Text
                style={styles.label}
            >
                Nota2
            </Text>
            <TextInput 
                onChangeText={setNota2}
                value={nota2}
                placeholder="Nota 2"
                style={styles.input}
            />
            <Text
                style={styles.label}
            >
                Nota3
            </Text>
            <TextInput 
                onChangeText={setNota3}
                value={nota3}
                placeholder="Nota 3"
                style={styles.input}
            />
            <Text
                style={styles.label}
            >
                Imagem
            </Text>
            <TextInput
                onChangeText={setImage}
                value={image}
                placeholder="Link da imagem"
                style={styles.input}
            />

            <Button 
                title="Cadastrar Aluno"
                onPress={cadastro}
            />
        </View>

    );

}

const styles = StyleSheet.create({
    label: {
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 4
    },
    container: {
    }
})