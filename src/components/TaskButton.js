import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, StyleSheet, Text, Animated } from "react-native";

export default function TaskButton({ item, onPress, expanded, onDelete }) {
  const titulop = item.titulo;
  return (
    <View>
      <TouchableOpacity style={styles.taskButton} onPress={onPress}>
        <Text style={styles.taskText}>{titulop.slice(0,25)}...</Text>
        <View style={styles.iconContainer}>
          <AntDesign name={expanded ? "up" : "down"} size={24} color="#868686" />
        </View>
      </TouchableOpacity>
      {expanded && (
        <Animated.View style={styles.detailContainer}>
          <Text style={styles.descripcion}>{item.descripcion}</Text>
          <Text style={styles.rewards}>{item.recompensa}pts de recompensa</Text>
          <Text style={styles.estatus}> Estatus: {item.status}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Completar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.eliminar}>Eliminar tarea</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  taskButton: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 60,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 55,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 3,
  },
  iconContainer: {
    marginRight: 8,
  },
  taskText: {
    fontSize: 20,
    color: "green",
    flex: 1,
  },
  detailContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
    paddingVertical: 30,
    borderRadius: 10
  },
  descripcion: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
  eliminar: {
    color: 'black',
    marginBottom: 10,
    fontSize: 16,
    paddingTop: 10
  },
  button: {
    width: '60%',
    backgroundColor: '#3B8C75',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  rewards:{
    color: '#3391A6',
    marginBottom: 10,
    fontSize: 16
  },
  estatus: {
    textAlign: 'center',
    color: 'gray',
    paddingVertical: 10
  }
});
