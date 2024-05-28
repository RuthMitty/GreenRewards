import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios"
import { Usuarios } from '../data/Usuarios'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [user, setUser] = useState(null)

    const login = async (correo, contraseña) => {
        setIsLoading(true)
        const busqueda = Usuarios.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña)
        if (busqueda){
            console.log(JSON.stringify(busqueda))
            setUserToken("Logged In!")
            await AsyncStorage.setItem("userToken", "Logged In!")
            await AsyncStorage.setItem("usuario", JSON.stringify(busqueda))
            console.log("Usuario guardado")
        } else{
            console.log("Usuario y/o contraseña incorrectos")
        }
        setIsLoading(false)
    }

    const logout = async () => {
        setIsLoading(true)
        setUserToken(null)
        await AsyncStorage.removeItem("userToken")
        await AsyncStorage.removeItem("usuario")
        setIsLoading(false)
    }

    // const getUser = async() => {
    //     try {
    //         let user = await AsyncStorage.getItem("usuario")
    //         user = JSON.parse(user)
    //         setUser(user)
    //     } catch(e) {
    //         console.log("Get user error ", e)
    //     }
    // }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem("userToken")
            setUserToken(userToken)
            let user = await AsyncStorage.getItem("usuario")
            user = JSON.parse(user)
            setUser(user)
            setIsLoading(false)
        } catch(e) {
            console.log("isLoggedIn error ", e)
        }
        
    }

    useEffect(() => {
        isLoggedIn()
    },[userToken])

  

    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, user}}>
            {children}
        </AuthContext.Provider>
    )
}