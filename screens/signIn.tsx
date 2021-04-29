import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableHighlight, TouchableNativeFeedback, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Input } from 'react-native-elements';
import { Auth } from 'aws-amplify';


const { height, width } = Dimensions.get('screen');


export function SignInScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);

            console.log(user);

            navigation.navigate('Home', { screen: 'Root'});
        } catch (error) {
            console.log('error signing in', error);
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
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ fontWeight: 'bold', color: Colors.light.tint}}>
                            Sign up
                        </Text>
                    </TouchableOpacity>

                    <Entypo name="dots-three-vertical" size={24} color={Colors.light.tint} style={{ marginHorizontal: 10,}} />
                </View>
            </View>

            <View style={styles.middleContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 25,}}>
                    Log in to Twitter.
                </Text>

                <Input
                onChangeText={text => setUsername(text)}
                placeholder='email address or username'
                value={username}
                inputStyle={{ color: Colors.light.tint, fontWeight: 'bold'}}
                autoFocus={true}
                keyboardType={'email-address'}
                secureTextEntry={false}
                blurOnSubmit={false}
                />

                <Input
                placeholder='Password'
                onChangeText={text => setPassword(text)}
                value={password}
                inputStyle={{ color: Colors.light.tint, fontWeight: 'bold'}}
                autoFocus={true}
                secureTextEntry={true}
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
                    title="Log in"
                    onPress={signIn}
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