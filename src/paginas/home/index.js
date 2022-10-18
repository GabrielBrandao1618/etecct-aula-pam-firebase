import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../../firebase/firebaseConnection'

export default function Home() {
    // const navigation = useNavigation();
  const [alunos,setAlunos] = useState([]);

//   function irDetalhes(name,n1,n2,n3,img){
//     navigation.navigate("Detalhes",{nome:name,nota1:n1,nota2:n2,nota3:n3,imagem:img})
//  }

  useEffect(()=>{
    const unsubscribe = firebase.database().ref('Alunos').on('value',(snapshot) =>{
      if(!!snapshot.val()){
        setAlunos(
          Object.entries(snapshot.val()).map(([key, value]) => {
            return {
              id: key,
              ...value
            }
          })
        );
      }
  
    })
    return () => {
      unsubscribe()
    }
     
  },[])

  return (

    <View style = {styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold',}}> LISTA DE ALUNOS  </Text>


      
      {alunos.map(aluno => {
        return (
          <View key={aluno.id} style={{flexDirection: 'row'}}>
            <Text>{aluno.Nome} </Text>
            <Text>{aluno.Nota1} </Text>
            <Text>{aluno.Nota2} </Text>
            <Text>{aluno.Nota3}</Text>
            <Image 
              source={{uri: aluno.Imagem}}
              style={{
                width: 50,
                height: 50
              }}
            />
          </View>
        )
      })}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagems:{
    width:"70%",
    height:90,
    borderRadius:8
  },
  containerAlunos: {
    height:160,
    width:180,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginLeft:5,
    borderWidth:2,
    borderRadius:8
  },
});
