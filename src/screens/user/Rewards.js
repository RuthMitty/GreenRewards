import {useState, useEffect, useContext} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, TextInput} from 'react-native';
import { Recompensas } from "../../data/Recompensas";
import ImageBg from '../user/Group20.png';
import SearchBar from "../../components/SearchBar";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../../components/Modal";
import ExchangeRewardModal from "../../components/ExchangeRewardModal";

export default function Rewards(){
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(Recompensas);
  const {user, setUser} = useContext(AuthContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [type, setType] = useState("")

  useEffect(() => {
    const filtered = Recompensas.filter(reward => {
      return reward.titulo.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [search]);

  const exchangeReward = (item) =>  {
      console.log(item)

      if (user.puntos >= item.puntosNecesarios){
        const newReward = { ...item, vigencia: 30, codigo: "1243424" };
        console.log(newReward)

        // Actualizar el estado del usuario con la nueva tarea agregada
        const updatedUser = {
          ...user,
          puntos: (user.puntos - item.puntosNecesarios),
          recompensasUsuario: [...user.recompensasUsuario, newReward],
        };

        // Actualizar el usuario en el contexto
        setUser(updatedUser);
        setType("exchanged")
        setModalOpen(true)
      } else {
        setType("notExchanged")
        setModalOpen(true)
      }
      
  }

    return (
        <View style={styles.container}>
          <View style={styles.rewardsContainer}>
          <Text style={styles.points}>Puntos: {user.puntos}</Text>
          <SearchBar
            value={search}
            OnChangeText={setSearch}
            placeholder="Buscar..."
          />

            <FlatList
              data={filteredProducts}
              renderItem={({ item }) => (
                <View style={styles.reward}>
                    <Text style={{color: "#3391A6", fontWeight: "bold" }}>{item.titulo}</Text>
                    <Text style={{paddingVertical: 8}}>{item.descripcion}</Text>
                    <TouchableOpacity style={styles.rewardButton} onPress={() => exchangeReward(item)}>
                        <Text style={{color: "#fff", fontWeight: "bold"}}>Canjear: {item.puntosNecesarios} pts</Text>
                    </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.taskList}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <Modal isOpen={modalOpen}>
            <ExchangeRewardModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              type={type}
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
    