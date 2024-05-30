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
              showsVerticalScrollIndicator={false}
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
        width: '100%',
        padding: 25
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
        color: "#165E6E", 
        fontWeight: "800", 
        fontSize: 19, 
        alignSelf: "flex-start", 
        padding: 10, 
        marginTop: 10
      },
    });
    