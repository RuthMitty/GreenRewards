import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tareas } from '../../data/Tareas';
import ImageBg from '../user/BG1.png';

const Rewards = () => {
  const totalPuntos = Tareas.reduce((sum, tarea) => sum + tarea.recompensa, 0);
  const [search, setSearch] = useState('');

  const filteredTareas = Tareas.filter((tarea) =>
    tarea.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={ImageBg} style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <Text style={styles.pointsText}>{totalPuntos} puntos</Text>
          <Icon name="user" size={24} color="#ffff" style={styles.icon} />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Recompensas"
            value={search}
            onChangeText={setSearch}
          />
          <Icon name="search" size={20} color="#000" />
        </View>
        <ScrollView>
          {filteredTareas.map((tarea) => (
            <View key={tarea.id} style={styles.rewardContainer}>
              <Text style={styles.rewardTitle}>{tarea.titulo}</Text>
              <Text style={styles.rewardDescription}>{tarea.descripcion}</Text>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Canjear {tarea.recompensa} pts</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: '15%', 
  },
  pointsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 16,
    borderRadius: 10,
  },
  searchInput: {
    fontSize: 14,
    flex: 1,
  },
  rewardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rewardDescription: {
    fontSize: 14,
    marginBottom: 12,
  },
  buttonContainer: {
    backgroundColor: '#3391A6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});

export default Rewards;
