import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FAB, Portal } from 'react-native-paper';
import Feed from '../components/Feed';
import Colors from '../constants/Colors';

export type ProfilePictureProps = {

}

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Feed/>
                <FAB
                icon='feather'
                style={{
                    position: "absolute",
                    backgroundColor: Colors.light.tint,
                    bottom: 20,
                    right: 16,
                }}
                onPress={() => {navigation.navigate('CreateTweet')}}
                />
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