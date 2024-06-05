import React, { useState } from "react";
import { View,Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageBg from "../user/Group20.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Submit() {
  const navigation = useNavigation();
  const route = useRoute();


  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        const imageName = `image_${new Date().getTime()}.jpg`;
        await AsyncStorage.setItem("image", imageName);
        setImage(imageName);
        console.log("Imagen almacenada en:", imageName);
      }
    } catch (error) {
      console.error("Error al seleccionar la imagen:", error);
      Alert.alert(
        "Error",
        "No se pudo cargar la imagen. Por favor, inténtalo de nuevo."
      );
    }
  };

  const deleteImage = async () => {
    if (image) {
      setImage(null);
      await AsyncStorage.removeItem("image");
      console.log("Imagen eliminada");
    }
  };

  const handleSubmit = () => {
    console.log("Descripción:", description);
    console.log("Imagen:", image);

    setImage(null);
    setDescription("");

    setModalVisible(true);
    navigation.navigate("Perfil")

  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageBg}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Acción:</Text>
        {route.params?.titulo && (
          <Text style={styles.title}> {route.params.titulo}</Text>
        )}
      </View>

      <View style={styles.uploadButtonContainer}>
        {!image && (
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Text style={styles.uploadButtonText}>Subir evidencia</Text>
          </TouchableOpacity>
        )}
      </View>

      {image && (
        <View style={styles.imageContainer}>
          <Text style={styles.imageNameText}>{image}</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteImage}>
            <Text style={styles.deleteButtonText}>Eliminar imagen</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <TextInput
          style={styles.input}
          placeholder="Describe cómo lo lograste"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            ¡Información subida correctamente!
          </Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageNameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  backgroundImage: {
    position: "absolute",
    bottom: "35%",
    left: 0,
    right: 0,
    width: "100%",
    height: "70%",
    zIndex: -1,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 30,
  
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#378C55",
  },
  uploadButtonContainer: {
    marginVertical: 20,
  },
  uploadButton: {
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: "#333",
  },
  imageContainer: {
    marginVertical: 20,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  deleteButtonText: {
    color: "#fff",
  },
  descriptionContainer: {
    marginVertical: 20,
  },
  input: {
    width: "100%",
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 80,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  fixedImageContainer: {
    position: "absolute",
    top: 130,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});