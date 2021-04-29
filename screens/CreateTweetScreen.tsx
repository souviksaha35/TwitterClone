import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import {Button, Input} from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import Colors from '../constants/Colors';
function CreateTweetScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button
        onPress={() => {navigation.goBack()}}
        icon={
          <Entypo name="cross" size={35} color={Colors.light.tint} />
        }
        buttonStyle={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 25, }}
        containerStyle={{ marginLeft: 10,}}
        />

        <Button
        buttonStyle={{
          backgroundColor: Colors.light.tint,
          borderRadius: 20,
          height: 30,
          width: 60,
        }}
        disabled={true}
        containerStyle={{
          marginRight: 10,
        }}
        title="Tweet"/>
      </View>

      <View style={styles.tweetContainer}>
        <View style={styles.textContainer}>
          <Avatar.Image 
          size={40} 
          style={{
            marginLeft: 25,
          }}
          source={require("../assets/images/avatar.png")}
          />
          <Input
          containerStyle={{
            width: '80%',
          }}
          inputContainerStyle={{borderBottomWidth:0}}
          placeholder="What's Happening?"
          placeholderTextColor="grey"
          multiline/>
        </View>

        <View style={styles.mediaContainer}>

        </View>
      </View>
    </View>
  )
}

export default CreateTweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer: {
    height: '10%',

    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tweetContainer: {
    marginTop: 10,
    height: '90%',
  },

  textContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  mediaContainer: {

  }
})