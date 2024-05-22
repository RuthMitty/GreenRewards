import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './user/LoginScreen'
import RegisterScreen from './user/RegisterScreen'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default AuthStack