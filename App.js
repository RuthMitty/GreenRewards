import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/user/Home';
// import AnimacionInicio from './src/screens/AnimacionInicio';


export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="AnimacionInicio" component={AnimacionInicio} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.contenedor}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});



