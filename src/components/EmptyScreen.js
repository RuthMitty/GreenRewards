import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EmptyScreen = ({object, textColor}) => {
    return (
    <View style={styles.modalContainer}>
        <Text style={[styles.title, {color: textColor}]}>Parece que aún no tienes {object}...</Text>   
        <Text style={[styles.text, {color: textColor}]}>Agrega algunas y las verás aquí!</Text>   
    </View>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: "100%",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: "#fff",
        marginTop: 10,
        marginBottom: 100
      },
    title:{
        fontSize: 28,
        fontWeight: '500',
        marginBottom: 30,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    text:{
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 30,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    
})


export default EmptyScreen