import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import circleImage from '../user/user2.png';
import ImageBg from '../user/Group20.png';
import { SimpleLineIcons } from '@expo/vector-icons';




const MyRewards = () => {

    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.openDrawer();
      };

  return (
    <View style={styles.container}>
      <Text style={styles.level}>Nivel: Protector del medio ambiente</Text>
      <View style={styles.fixedImageContainer}>
        <Image source={circleImage} style={styles.circleImage} />
      </View>

      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.voucherInfo}>
        <Text style={styles.title}>Mis recompensas</Text>
        <View style={styles.voucherItem}>
          <Text style={styles.voucherText}>Descuento en el comal</Text>
          <Text style={styles.voucherText1}>Expira en 30 días</Text>
          <Text style={styles.voucherCode}>Código: 1243424</Text>
        </View>
        <View style={styles.voucherItem}>
          <Text style={styles.voucherText}>Descuento en el comal</Text>
          <Text style={styles.voucherText1}>Expira en 30 días</Text>
          <Text style={styles.voucherCode}>Código: 1243424</Text>
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
  voucherInfo: {
    marginTop: '60%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3391A6'
  },
  voucherItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  voucherText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    voucherText1: {
        fontSize: 18,
        fontWeight: '',
        color: '#747474'
    },
  voucherCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#3391A6'
    
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  fixedImageContainer: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center', 
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
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  level: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#378C55',
    fontSize: 15,
    width: '50%',
    top: -40
  }
});

export default MyRewards;