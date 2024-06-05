import React, {useContext} from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import circleImage from '../user/user2.png';
import ImageBg from '../user/Group20.png';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import EmptyScreen from '../../components/EmptyScreen';



const MyRewards = () => {

    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.openDrawer();
      };

    const {user} = useContext(AuthContext)

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
        {user.recompensasUsuario.length > 0 ?
        (
          <FlatList
            data={user.recompensasUsuario}
            renderItem={({ item }) => (
              <View style={styles.voucherItem}>
                <Text style={styles.voucherText}>{item.titulo}</Text>
                <Text style={styles.voucherText1}>Expira en {item.vigencia} días</Text>
                <Text style={styles.voucherCode}>Código: {item.codigo}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.taskList}
            showsVerticalScrollIndicator={false}
        />
        ):(
          <Text style={styles.noTasksText}>No se encontraron recompensas</Text>
        )
        
        }
        
        
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
    marginTop: '85%',
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
    top: -80
  },
  noTasksText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 300
  },
});

export default MyRewards;