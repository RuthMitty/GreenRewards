import React, {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AuthContext } from "../../context/AuthContext";

export default function Profile(){
    const {logout} = useContext(AuthContext)
    return(
        <View style={styles.container}>
            <Text>Profile</Text>
            <TouchableOpacity onPress={() => {logout()}}>
                <Text>Logout</Text>
            </TouchableOpacity>
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
  