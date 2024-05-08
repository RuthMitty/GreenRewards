import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/user/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AnimacionInicio from './src/screens/AnimacionInicio';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home" styles={styles.contenedor}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});



