import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { TweetType } from '../../types';
import LeftContainer from '../LeftContainer';
import MainContainer from '../MainContainer';


export type TweetProps = {
    tweet: TweetType,
}

const Tweet = ({ tweet }: TweetProps) => {
    const navigation = useNavigation();


    return (
        <TouchableNativeFeedback onPress={() => navigation.navigate('TweetScreen', {
            id: tweet.id,
            createdAt: tweet.createdAt,
            user: tweet.user,
            image: tweet.image,
            content: tweet.content,
        })}>
            <View style={styles.container}>
                <LeftContainer user={tweet.user}/>
                <MainContainer tweet={tweet}/>
            </View>
        </TouchableNativeFeedback>
    );
};

export default Tweet;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        borderColor: 'lightgrey',
        borderBottomWidth: 0.5,
    }
})