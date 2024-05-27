import React, {useState, useEffect} from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Tareas from '../data/Tareas';

export default function SearchBar(){
    const [word, setWord] = useState('');
    const [resultados, setResultados] = useState('');

    function getResultados(){
        setResultados(Tareas.descripcion.filter((e)=>e.includes(word)))
    }

    useEffect(() => {
        word ? getResultados : setResultados(null)
        console.log(Tareas.map((e)=>includes(word)))
      }, [word])
      
      return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput 
                    style={styles.input}
                    placeholder='Buscar...'
                    value={word}
                    onChangeText={(text) => setWord(text)} 
                />
            </View>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      width: '100%'
    },
    inputWrapper:{
        backgroundColor: "white",
        padding: 10,
        fontSize: 30,
        width: '100%',
        marginTop: 15,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        height: 40,
    },
    input:{
      textAlign:"left"
    } 
  });