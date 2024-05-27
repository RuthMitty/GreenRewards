// DetallesTarea.js
import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { height: screenHeight } = Dimensions.get('window');

const DetallesTarea = ({ task, visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{task.titulo}</Text>
          <TouchableOpacity onPress={onClose}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{task.descripcion}</Text>
        <Text style={styles.reward}>{task.recompensa} pts de recompensas</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Completar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.deleteText}>Eliminar tarea</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  reward: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default DetallesTarea;
