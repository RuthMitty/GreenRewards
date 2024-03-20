import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';

export default function BottomBar(){
    return(
        <>
            <View style={styles.fill}>
                <TouchableOpacity style={styles.boton}>

                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
        width: '100%',
        paddingVertical: 19,
        paddingHorizontal: 23,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '57px',
        background: 'white',
        shadowOffset: {
            width: 0,
            height: -14
        },
        shadowColor: 'rgba(55, 140, 85, 0.07)',
        shadowRadius: 18,
    },
    boton: {
        
    }

})