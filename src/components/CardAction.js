import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import accionImagen from '../../assets/images/accionImagen.png';

export default function CardAction(){
    return(
        <TouchableOpacity style ={styles.contenedor}>
            <Image style={styles.imagen} source={accionImagen}/>
            <View style={styles.textoCont}>
                <Text style={styles.title}>Titulo accion</Text>
                <Text style={styles.descripcion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        maxHeight: 93,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 20,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    imagen: {
        width: 93,
        height: 93,
        resizeMode: 'cover'
    },
    textoCont: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    title:{
        fontSize: 16,
        fontWeight: 'semibold'
    },
    descripcion: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        width: 186,
        maxHeight: 93
    }
});