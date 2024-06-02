import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileModal = ({user, setUser, setModalOpen}) => {
    const [correo, setCorreo] = useState(user.correo)
  const [nombre, setNombre] = useState(user.nombre)
  const [usuario, setUsuario] = useState(user.usuario)
  const [contraseña, setContraseña] = useState(user.contraseña)

  const updateUser = () => {
    if(nombre, usuario, contraseña, correo){
      const updatedUser = {
        ...user,
        nombre,
        usuario,
        contraseña,
        correo,
      };
      setUser(updatedUser);
      AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setModalOpen(false);
      
  } else{
      console.log("Campos incompletos")
  }
  }

  return (
    <View style={{backgroundColor: "#fff", width: "80%", padding:15, borderRadius: 10}}>
        <TouchableOpacity
            onPress={() => {setModalOpen(false)}}
            style={styles.closeButton}
        >
        <Ionicons name="close" size={24} color="black"/>
        </TouchableOpacity>
        <Text style={styles.title}>Editar Perfil</Text>
        <View style={styles.loginInputField}>
            <MaterialIcons name='alternate-email' size={20} color="#666"/>
            <TextInput 
                placeholder='Email' 
                style={styles.loginInput} 
                keyboardType='email-address'
                value={correo}
                onChangeText={text => setCorreo(text)}
            />
        </View>
        <View style={styles.loginInputField}>
            <Ionicons name='person-outline' size={20} color={"#666"}/>
            <TextInput 
                placeholder='Full Name' 
                style={styles.loginInput}
                value={nombre}
                onChangeText={text => setNombre(text)}
            />
        </View>
        <View style={styles.loginInputField}>
            <Ionicons name='person-outline' size={20} color={"#666"}/>
            <TextInput 
                placeholder='User' 
                style={styles.loginInput}
                value={usuario}
                onChangeText={text => setUsuario(text)}
            />
        </View>
        <View style={styles.loginInputField}>
            <Ionicons name='lock-closed-outline' size={20} color="#666"/>
            <TextInput 
                placeholder='Password' 
                style={styles.loginInput}
                secureTextEntry={true}
                value={contraseña}
                onChangeText={text => setContraseña(text)}
            />
        </View>
    
        <TouchableOpacity onPress={() => updateUser(nombre, usuario, contraseña, correo)} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Actualizar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 28,
        fontWeight: '500',
        color: "#333",
        marginBottom: 30
    },
    loginContainer:{
        paddingHorizontal: 25
    },
    image:{
        height: 250,
        width: 130,
        marginVertical: 30
    },
    loginInputField:{
        flexDirection: "row",
        borderBottomColor:"#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        gap: 5
    },
    loginInput:{
        flex:1,
        paddingVertical:0
    },
    loginButton:{
        backgroundColor: 'rgba(55, 140, 85, 0.62)',
        padding: 20, 
        borderRadius: 10,
        marginBottom: 30,
    },
    loginButtonText:{
        textAlign: "center",
        fontWeight: "700",
        fontSize: 18,
        color: "#fff"
    },
    registerView:{
        flexDirection: "row",
        justifyContent:"center",
        gap: 5,
        marginBottom: 30
    },
    registerText:{
        fontWeight: "700",
        color: "rgba(55, 140, 85, 0.62)"
    },
    closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    }
})

export default EditProfileModal