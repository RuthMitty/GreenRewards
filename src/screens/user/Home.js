import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from '../../components/BottomBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
    width: '100%',
    padding: 25
  },
});
