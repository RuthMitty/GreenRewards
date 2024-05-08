import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import accionImagen from '../../assets/images/accionImagen.png';

export default function CardAction(){
    return(
        <View style ={styles.contenedor}>
            <Image style={styles.imagen} source={accionImagen}/>
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
        height: 15,
        backgroundColor: 'white',
        flex:1,
        flexDirection: 'row',
    },
    imagen: {
        width: 93,
        height: 93,
        resizeMode: 'contain'
    },
    textoCont: {
        paddingHorizontal: 12,
        flexDirection: 'column',
        flexGrow: 0
    }
});