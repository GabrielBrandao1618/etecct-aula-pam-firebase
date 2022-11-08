import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../../firebase/firebaseConnection'
import { CardAluno } from '../../components/CardAluno';

export default function Home() {
  const [alunos,setAlunos] = useState([]);

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
          <CardAluno 
            imagem={aluno.Imagem}
            nome={aluno.Nome}
            nota1={aluno.Nota1}
            nota2={aluno.Nota2}
            nota3={aluno.Nota3}
            id={aluno.id}
          />
        )
      })}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
