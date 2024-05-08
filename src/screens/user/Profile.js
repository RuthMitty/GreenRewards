import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Profile(){
    return(
        <View style={styles.container}>
            <Text>Profile</Text>
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
  