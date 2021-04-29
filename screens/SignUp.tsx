import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Colors from '../constants/Colors';

import { Auth } from 'aws-amplify';

const { height, width } = Dimensions.get('screen');

export function SignUpScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    phone_number: phone,
                }
            });

            navigation.navigate('confirmSignup', {
                username: user.username,
            })

            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }

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

                    <Entypo name="dots-three-vertical" size={24} color={Colors.light.tint} style={{ marginHorizontal: 10,}} />
                </View>
            </View>

            <View style={styles.middleContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 25,}}>
                    Log in to Twitter.
                </Text>

                <Input
                onChangeText={text => setUsername(text)}
                placeholder='username'
                value={username}
                inputStyle={{ color: Colors.light.tint, fontWeight: 'bold'}}
                autoFocus={true}
                keyboardType={'name-phone-pad'}
                secureTextEntry={false}
                />

                <Input
                onChangeText={text => setEmail(text)}
                placeholder='email address'
                value={email}
                inputStyle={{ color: Colors.light.tint, fontWeight: 'bold'}}
                autoFocus={true}
                keyboardType={'email-address'}
                secureTextEntry={false}
                />

                <Input
                placeholder='Password'
                onChangeText={text => setPassword(text)}
                value={password}
                inputStyle={{ color: Colors.light.tint, fontWeight: 'bold'}}
                autoFocus={true}
                secureTextEntry={true}
                />

                <Input
                placeholder='Phone'
                onChangeText={text => setPhone(text)}
                value={phone}
                inputStyle={{ color: Colors.light.tint, fontWeight: 'bold'}}
                />

                <View style={{ alignItems: 'center' }}>
                    <TouchableNativeFeedback>
                        <Text style={{ color: 'grey', marginVertical: -10,}}>
                            Forgot Password?
                        </Text>
                    </TouchableNativeFeedback>
                </View>

                <View style={{
                alignItems: 'flex-end',
                marginTop: 25,
            }}>
                    <Button
                    title="Sign up"
                    onPress={signUp}
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
});