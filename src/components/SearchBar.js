import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = ({value, OnChangeText, placeholder}) => {
  return (
    <TextInput
        style={styles.searchBar}
        placeholder={placeholder}
        value={value}
        onChangeText={OnChangeText}
    />
  )
}

const styles = StyleSheet.create({
    searchBar:{
        backgroundColor: "#fff",
        width: "100%", 
        padding: 12, 
        borderRadius: 5,
        marginBottom: 10
    }
})

export default SearchBar