import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios"
import { Usuarios } from '../data/Usuarios'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = (correo, contraseña) => {
        setIsLoading(true)
        busqueda = Usuarios.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña)
        if (busqueda){
            setUserToken("Logged In!")
            AsyncStorage.setItem("userToken", "Logged In!")
        } else{
            console.log("Usuario y/o contraseña incorrectos")
        }
        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
        AsyncStorage.removeItem("userToken")
        setIsLoading(false)
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem("userToken")
            setUserToken(userToken)
            setIsLoading(false)
        } catch(e) {
            console.log("isLoggedIn error ", e)
        }
        
    }

    useEffect(() => {
        isLoggedIn()
    },[])
  

    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}