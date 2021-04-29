import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Feed from '../components/Feed';

export type ProfilePictureProps = {

}

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Feed/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
})