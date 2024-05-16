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
        paddingVertical: 10,
        paddingHorizontal: 0,
        justifyContent: 'center',
        gap: 50,
        bottom: 0,
        backgroundColor: 'white',
        position: 'absolute',
        borderTopWidth: 1,        
        borderTopColor: '#dfe6e9',
        
    },
    boton: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    }

})