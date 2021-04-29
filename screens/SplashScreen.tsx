import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from  '../constants/Colors';


export function SplashScreen() {
    return (
        <View style={styles.container}>
            <AntDesign name="twitter" size={60} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.tint,
        justifyContent: "center",
        alignItems: "center",
    }
});