import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import actions from '../../assets/images/actions.png';
import admin from '../../assets/images/admin.png';
import rewards from '../../assets/images/rewards.png';
import user from '../../assets/images/user.png';


export default function BottomBar(){
    return(
        <View style={styles.fill}>
            <TouchableOpacity>
                <Image style={styles.boton} source={actions}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.boton} source={rewards}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.boton} source={user}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.boton} source={admin}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    fill: {
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
        width: 50,
        height: 50,
    }

})