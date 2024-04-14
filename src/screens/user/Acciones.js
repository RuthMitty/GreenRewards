import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from '../../components/BottomBar';

export default function Acciones(){
    return(
        <View style={styles.container}>
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
    },
  });
  