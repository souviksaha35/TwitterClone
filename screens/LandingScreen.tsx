import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedbackBase, TouchableWithoutFeedback } from 'react-native';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

const { height, width } = Dimensions.get('screen');

export function LandingScreen() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Entypo name="twitter" size={26} color={Colors.light.tint} />
            </View>
            <View style={styles.middleContainer}>
                <Button
                onPress={() => navigation.navigate('SignUp')}
                title="Create account"
                buttonStyle={{
                    height: 40,
                    width: width / 1.3, 
                    backgroundColor: Colors.light.tint, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderRadius: 20,
                }}
                titleStyle={{
                    fontSize: 20,
                }}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center',}}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{ color: 'grey', marginRight: 5,}}>
                        Have an account already?
                    </Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: Colors.light.tint}}>
                            Log in
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'white',
    },
    headerContainer: {
        height: 100,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContainer: {
        height: 550,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    }
})