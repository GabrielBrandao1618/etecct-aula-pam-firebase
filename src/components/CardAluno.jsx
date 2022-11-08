import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native'

import {useNavigation} from '@react-navigation/native'

export function CardAluno({nota1, nota2, nota3, nome, imagem, id}){
    const {navigate} = useNavigation()

    async function onPress(){
        navigate('detalhes', {
            nota1,
            nota2,
            nota3,
            nome,
            imagem,
            id
        })
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                source={{
                    uri: imagem,
                    height: 200,
                    width: 200
                }}
            />
            <View style={styles.body}>
                <Text style={styles.name}>{nome}</Text>
                <Text>Nota 1: {nota1}</Text>
                <Text>Nota 2: {nota2}</Text>
                <Text>Nota 3: {nota3}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 8
    },
    body: {
        padding: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})