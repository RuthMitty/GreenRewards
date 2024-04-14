import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Acciones from './Acciones';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Acciones /> */}
      <Text>Hola estás en el inicio</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
