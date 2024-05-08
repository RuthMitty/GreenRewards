import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import accionVerde from '../../assets/images/accionVerde.jpg';

export default function CardAction(){
    return(
        <View style ={styles.contenedor}>
            <Image style={styles.imagen} source={accionVerde}/>
            <View style={styles.textoCont}>
                <Text>Titulo accion</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        height: 95,
        backgroundColor: 'white',
        flex:1,
        flexDirection: 'row',
    },
    imagen: {
        width: 93,
        height: '100%'
    },
    textoCont: {
        height: '100%',
        paddingHorizontal: 12,
        flexDirection: 'column',
        columnGap: 10
    }
});