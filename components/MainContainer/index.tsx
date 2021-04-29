import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TweetType } from '../../types';
import moment from 'moment';
import { Entypo } from '@expo/vector-icons';

export type MainContainerProps = {
    tweet: TweetType,
}

const MainContainer = ({ tweet }: MainContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.tweetHeaderContainer}>
                <View style={styles.tweetHeaderNames}>
                    <Text style={{ fontWeight: 'bold', marginRight: 5,}}>
                        {tweet.user.name}
                    </Text>
                    <Text style={{ color: 'grey', marginRight: 5,}}>
                        @{tweet.user.username}
                    </Text>
                    <Text style={{ color: 'grey', marginRight: 5,}}>
                        {moment(tweet.createdAt).fromNow()}
                    </Text>
                </View>
                <Entypo name={"chevron-down"} size={16} color={'grey'}/>
            </View>
            <View>
                <Text style={{ marginTop: 10, marginRight: 30, }}>
                    {tweet.content}
                </Text>
                {!!tweet.image && <Image source={{ uri: tweet.image }} style={{width: '90%', height: 200, resizeMode: 'cover', borderRadius: 15, marginVertical: 10, overflow: 'hidden' }}/>}
            </View>
        </View>
    )
}

export default MainContainer;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },

    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tweetHeaderNames: {
        flexDirection: 'row',
    }
});