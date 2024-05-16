import React, {useState} from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native'

import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import logo from "../../../assets/images/logo.png"

import DateTimePicker from '@react-native-community/datetimepicker';

import { Usuarios } from '../../data/Usuarios'


export default function RegisterScreen({navigation}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [correo, setCorreo] = useState(null)
    const [nombre, setNombre] = useState(null)
    const [usuario, setUsuario] = useState(null)
    const [contraseña, setContraseña] = useState(null)


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "android");
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };


    const register = (nombre, usuario, contraseña, fechaNac, correo) => {

        if(nombre, usuario, contraseña, fechaNac, correo){
            Usuarios.push({
                id: Usuarios.length + 1,
                nombre: nombre,
                usuario: usuario,
                contraseña: contraseña,
                fechaNac: fechaNac,
                correo: correo,
                INE: ''
            })

            console.log(Usuarios)
            navigation.navigate("Login")
        } else{
            console.log("Campos incompletos")
        }

        
    }


  return (
    <SafeAreaView style={styles.contenedor}>
        <ScrollView style={styles.loginContainer}>
            <View style={{alignItems: "center"}}>
                <Image source={logo} style={styles.image}></Image>
            </View>
            <Text style={styles.title}>Register</Text>
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
            <View style={styles.loginInputField}>
                <Ionicons name='calendar-outline' size={20} color={"#666"}/>
                <TouchableOpacity onPress={() => showMode('date')}>
                    <Text style={{color:"#666", marginTop: 4}}>Date of Birth</Text>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        style={{marginTop:4}}
                        />
                    )}
                </TouchableOpacity>
            </View>

            
        
            <TouchableOpacity onPress={() => register(nombre, usuario, contraseña, date, correo)} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.registerView}>
                <Text>Already Registered?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.registerText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      width: "100%",
      height: "100%",
      justifyContent: "center",

    },
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
    }
   
  });