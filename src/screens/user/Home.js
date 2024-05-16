import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from '../../components/BottomBar';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola estás en el inicio</Text>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
});
