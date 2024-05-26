import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import circleImage from '../user/user2.png';
import ImageBg from '../user/Group20.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Profile = () => {

    const {user} = useContext(AuthContext)

    console.log(user)

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image source={circleImage} style={styles.circleImage} />
      </View>
      <Text style={styles.points}>Puntos: 300</Text>
      <View style={styles.dataContainer}>
        <View style={styles.data}>
            <Text style={styles.dataTitle}>Nombre</Text>
            <Text style={styles.dataText}>{user.nombre}</Text>
        </View>
        <View style={styles.data}>
            <Text style={styles.dataTitle}>Usuario</Text>
            <Text style={styles.dataText}>{user.usuario}</Text>
        </View>
        <View style={styles.data}>
            <Text style={styles.dataTitle}>Fecha de Nacimiento</Text>
            <Text style={styles.dataText}>{user.fechaNac}</Text>
        </View>
        <View style={styles.data}>
            <Text style={styles.dataTitle}>Correo</Text>
            <Text style={styles.dataText}>{user.correo}</Text>
        </View>
        
        
      </View>

      <ImageBackground source={ImageBg} style={styles.backgroundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: '35%',
    left: 0,
    right: 0,
    width: '100%',
    height: '65%',
    zIndex: -1,
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  points: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: "center",
    padding: 20,
    marginTop: 200
  },
  dataTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: "flex-start",
    paddingVertical: 2
  },
  dataText: {
    fontSize: 17,
    fontWeight: "500",
    color: 'black',
    alignSelf: "flex-start",
    paddingVertical: 4,
  },
  ImageContainer: {
    position: 'absolute',
    top: 110,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  dataContainer:{
    backgroundColor: "#fff",
    width: 300,
    padding: 10,
    borderRadius: 10
  },
  data:{
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginBottom: 10
  }
});

export default Profile;