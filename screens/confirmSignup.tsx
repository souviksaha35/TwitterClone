import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Text, TouchableNativeFeedback, View, StyleSheet, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Colors from '../constants/Colors';
import { useNavigation, useRoute } from  '@react-navigation/native';
import { Auth } from 'aws-amplify';


const { height, width } = Dimensions.get('screen');

export default function confirmSignup() {

    const [username, setUsername] = useState('');

    const route = useRoute();

    useEffect(() => {
        setUsername(route.params.username);
    }, []);

    async function confirmSignUp() {
        try {
          const userconfirming = await Auth.confirmSignUp(username, authCode);

          console.log(userconfirming);


        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }


    const [authCode, setAuthCode] = useState('');

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row',}}>
                    <View>
                        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
                            <MaterialIcons name="arrow-back" size={24} color={Colors.light.tint} />
                        </TouchableNativeFeedback>
                    </View>

                    <Entypo name="twitter" size={26} color={Colors.light.tint} style={{ marginHorizontal: 120,}}/>

                </View>
            </View>

            <View style={styles.middleContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 25,}}>
                    confirm your account
                </Text>

                <Input
                onChangeText={text => setAuthCode(text)}
                placeholder='Enter Verification Code'
                value={authCode}
                inputStyle={{ color: Colors.light.tint, fontWeight: 'bold'}}
                autoFocus={true}
                keyboardType={'default'}
                secureTextEntry={false}
                />

                <View style={{
                alignItems: 'flex-end',
                marginTop: 25,
            }}>
                    <Button
                    title="Confirm"
                    onPress={confirmSignUp}
                    buttonStyle={{
                    backgroundColor: Colors.light.tint,
                    borderRadius: 20,
                    width: 80,
                    margin: 10,
                    }}
                    />
                </View>
            </View>

            {/* <View style={{ width: width, height: 0.5, backgroundColor: 'lightgrey',}}/>

            <View style={{
                alignItems: 'flex-end',
            }}>
                <Button
                title="Log in"
                buttonStyle={{
                    backgroundColor: Colors.light.tint,
                    borderRadius: 20,
                    width: 80,
                    margin: 10,
                }}
                />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'white'
    },

    headerContainer: {
        height: 60,
        width: width,
        justifyContent: 'center',
        margin: 20,
    },

    middleContainer: {
        marginHorizontal: 10,
        height: 620,
    }
})