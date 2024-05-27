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

import {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, TextInput} from 'react-native';
import { Recompensas } from "../../data/Recompensas";
import ImageBg from '../user/Group20.png';
import SearchBar from "../../components/SearchBar";

export default function Rewards(){
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(Recompensas);

  useEffect(() => {
    const filtered = Recompensas.filter(reward => {
      return reward.titulo.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [search]);

    return (
        <View style={styles.container}>
          <View style={styles.rewardsContainer}>
          <Text style={styles.points}>Puntos: 100</Text>
          <SearchBar
            value={search}
            OnChangeText={setSearch}
            placeholder="Recompensas"
          />

            <FlatList
              data={filteredProducts}
              renderItem={({ item }) => (
                <View style={styles.reward}>
                    <Text style={{color: "#3391A6", fontWeight: "bold" }}>{item.titulo}</Text>
                    <Text style={{paddingVertical: 8}}>{item.descripcion}</Text>
                    <TouchableOpacity style={styles.rewardButton}>
                        <Text style={{color: "#fff", fontWeight: "bold"}}>Canjear: {item.puntosNecesarios} pts</Text>
                    </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.taskList}
            />
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
      rewardsContainer: {
        flex:1,
        alignItems:"center",
        justifyContent: "center",
        width: '75%',
      },
      reward : {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10, 
        shadowRadius: 50, 

      }, 
      rewardButton: {
        backgroundColor: "#3391A6",
        padding: 8,
        alignItems: "center", 
        borderRadius: 5,
      },
      points: {
        color: "#fff", 
        fontWeight: "800", 
        fontSize: 19, 
        alignSelf: "flex-start", 
        padding: 10, 
        marginTop: 10
      },
    });
    