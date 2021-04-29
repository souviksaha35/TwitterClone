import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from  '../constants/Colors';


const { height, width } = Dimensions.get('screen');


export function SplashScreen() {
    return (
        <View style={styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: Colors.light.tint
    }
});