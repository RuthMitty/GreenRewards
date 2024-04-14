import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

export const AnimacionInicio = ({ navigation }) => {
    const logoScale = useSharedValue(1);
    const circleScale = useSharedValue(0);

    useEffect(() => {
        logoScale.value = withTiming(0.5, { duration: 1000, easing: Easing.out(Easing.exp) }, () => {
            circleScale.value = withTiming(20, { duration: 800, easing: Easing.out(Easing.exp) }, () => {
                // Navegar a la pantalla principal
                navigation.replace('Home.js');
            });
        });
    }, []);

    const logoAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: logoScale.value }],
        };
    });

    const circleAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: circleScale.value }],
            borderRadius: 1000, // Asegura que la vista se convierta en un círculo completo
            backgroundColor: 'green',
            position: 'absolute',
            width: 100,
            height: 100,
            top: '50%',
            left: '50%',
            marginLeft: -50,
            marginTop: -50,
        };
    });

    return (
        <View style={styles.container}>
            <Animated.Image source={require('../../assets/images/logo.png')} style={[styles.logo, logoAnimatedStyle]} />
            <Animated.View style={circleAnimatedStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

