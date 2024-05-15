import React, {useContext} from "react";
import { View, ActivityIndicator } from "react-native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

export default function AppNav(){
    const {isLoading, userToken} = useContext(AuthContext)

    if (isLoading){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator size={"large"}></ActivityIndicator>
            </View>
        )
        
    }
    return(
        <NavigationContainer>
            {userToken !== null 
            ? <TabNavigator></TabNavigator>
            : <AuthStack></AuthStack>
            }
            
        </NavigationContainer>
    )
}