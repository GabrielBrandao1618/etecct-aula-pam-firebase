import { useCallback, useState } from "react";
import { Button, Text,TextInput,View } from "react-native";
import {firebase} from '../../firebase/firebaseConnection'

export default function Cadastrar(){
    const [nome, setNome] = useState('')
    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('')

    const cadastro = useCallback(async () => {
        if([nome, nota1, nota2, nota3].some(val => val.trim()==='')){
            return
        }
        await firebase.database().ref('Alunos').push({
            Nome: nome,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
        })
        setNome('')
        setNota1(0)
        setNota2(0)
        setNota3(0)

    }, [nome, nota1, nota2, nota3])

    return(

        <View>

            <Text>CADASTRAR </Text>
            <TextInput
                onChangeText={setNome}
                value={nome}
            />
            <TextInput 
                onChangeText={setNota1}
                value={nota1}
            />
            <TextInput 
                onChangeText={setNota2}
                value={nota2}
            />
            <TextInput 
                onChangeText={setNota3}
                value={nota3}
            />
            <Button 
                title="Cadastrar Aluno"
                onPress={cadastro}
            />
        </View>



    );

}