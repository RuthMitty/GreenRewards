import { useState } from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity, ImageBackground, Text , TextInput, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import circleImage from '../user/user2.png';
import ImageBg from '../user/Group20.png';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from "react-native-vector-icons/Ionicons"
import Modal from '../../components/Modal';
import EditProfileModal from "../../components/EditProfileModal"



const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const navigation = useNavigation();
  const openDrawer = () => {
      navigation.openDrawer();
    };

  const {user, setUser} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.level}>Nivel: Protector del medio ambiente</Text>
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.ImageContainer}>
        <Image source={circleImage} style={styles.circleImage} />
      </View>

      <Text style={styles.points}>Puntos: {user.puntos}</Text>
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
      <TouchableOpacity style={styles.editButton} onPress={() => setModalOpen(true)}>
        <Text style={{color: "#fff", fontWeight: "700", fontSize: 17, marginRight: 15}}>Editar Perfil</Text>
        <Ionicons name='pencil-outline' size={20} color="#fff"/> 
      </TouchableOpacity>
      <Modal isOpen={modalOpen}>
        <EditProfileModal
          user={user}
          setUser={setUser}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Modal>
      

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
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
<<<<<<< HEAD
  level: {
    top: -35,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#378C55',
    fontSize: 15,
    width: '50%'
  }
=======
  editButton: {
    flexDirection: "row",
    backgroundColor: "green",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  
>>>>>>> main
});

export default Profile;