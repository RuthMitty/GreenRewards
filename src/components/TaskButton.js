import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet, Text, Animated } from "react-native";

export default function TaskButton({ item, onPress, expanded }) {
  return (
    <View>
      <TouchableOpacity style={styles.taskButton} onPress={onPress}>
        <Text style={styles.taskText}>{item.titulo}</Text>
        <View style={styles.iconContainer}>
          <AntDesign name={expanded ? "up" : "down"} size={24} color="#868686" />
        </View>
      </TouchableOpacity>
      {expanded && (
        <Animated.View style={styles.detailContainer}>
          <Text style={styles.descripcion}>{item.descripcion}</Text>
          <Text style={styles.rewards}>{item.recompensa}pts de recompensa</Text>
          <TouchableOpacity>
            <Text style={styles.eliminar}>Eliminar tarea</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Completar</Text>
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
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
  eliminar: {
    color: 'black',
    marginBottom: 10,
    fontSize: 16
  },
  button: {
    width: '60%',
    backgroundColor: '#3B8C75',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
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
  }
});
