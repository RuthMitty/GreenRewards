import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function BottomBar(){
    return(
        <>
            <View style={styles.fill}>
                <TouchableOpacity style={styles.boton}>
                    <Text>lala</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text>lala</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}>
                    <Text>lala</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 19,
        paddingHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        background: 'white',
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    boton: {

    }

})