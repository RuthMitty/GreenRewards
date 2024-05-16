import React, {useContext, useState} from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import logo from "../../../assets/images/logo.png"
import { AuthContext } from '../../context/AuthContext'

export default function LoginScreen({navigation}) {
    const [correo, setCorreo] = useState(null)
    const [contraseña, setContraseña] = useState(null)

    const {login} = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.contenedor}>
        <View style={styles.loginContainer}>
            <View style={{alignItems: "center"}}>
                <Image source={logo} style={styles.image}></Image>
            </View>
            <Text style={styles.title}>Login</Text>
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
                <Ionicons name='lock-closed-outline' size={20} color="#666"/>
                <TextInput 
                    placeholder='Password' 
                    style={styles.loginInput} 
                    secureTextEntry={true} 
                    value={contraseña}
                    onChangeText={text => setContraseña(text)}
                />
            </View>
            <TouchableOpacity onPress={() => {login(correo, contraseña)}} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.registerView}>
                <Text>New to the App?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        height: 300,
        width: 180,
        marginBottom: 30
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


