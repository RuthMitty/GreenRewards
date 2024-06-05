import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"

const ExchangeRewardModal = ({setModalOpen, type}) => {
    return (
        <View style={[styles.modalContainer, type === "exchanged" ? styles.saved :  styles.alreadySaved]}>
        <TouchableOpacity
            onPress={() => {setModalOpen(false)}}
            style={styles.closeButton}
        >
            <Ionicons name="close" size={24} color={type === "exchanged" ? "#D9534F" : "#3B8C75"}/>
        </TouchableOpacity>
        {type === "exchanged" ? (
            <Text style={[styles.title, {color: "#3B8C75"}]}>Recompensa canjeada correctamente!</Text>
        ) : (
            <Text style={[styles.title, {color: "#D9534F"}]}>Parece que no tienes puntos suficientes...</Text>
        )

        }

        
    </View>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: "80%",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      saved: {
        backgroundColor: "#DFF2E1",
        borderColor: "#3B8C75",
        borderWidth: 2,
      },
      alreadySaved: {
        backgroundColor: "#F8D7DA",
        borderColor: "#D9534F", 
        borderWidth: 2,
      },
    title:{
        fontSize: 28,
        fontWeight: '500',
        color: "#333",
        marginBottom: 30,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    }
})

export default ExchangeRewardModal