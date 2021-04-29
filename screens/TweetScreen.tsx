import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableNativeFeedback, Modal } from 'react-native';
import moment from 'moment';

const { height, width } = Dimensions.get('screen');


export function TweetScreen() {
    const route = useRoute();

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <Image
                    source={{ uri: route.params.user.image}} style={{ height: 50, width: 50, borderRadius: 50, margin: 10,}}/>
                    <View style={styles.NamesContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15,}}>
                            {route.params.user.name}
                        </Text>
                        <Text style={{ color: 'grey'}}>
                            @{route.params.user.username}
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'space-between'}}>
                        <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
                            <Entypo name={"chevron-down"} size={16} color={'grey'} style={{ marginTop: 12, marginHorizontal: 190,}}/>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View>
                    <Text style={{ margin: 10, fontSize: 23,}}>
                        {route.params.content}
                    </Text>
                    
                        {!!route.params.image && 
                        <TouchableNativeFeedback>
                            <Image
                            source={{ uri: route.params.image}} style={{ width: '95%', height: 270, marginLeft: 10, marginVertical: 10, resizeMode: 'cover', borderRadius: 15, overflow: 'hidden',}}/>
                        </TouchableNativeFeedback>}

                    <Text style={{ color: 'grey', margin: 10,}}>
                        {moment(route.params.createdAt).format('h:mm . Do MMMM YY')}
                    </Text>
                </View>

                <View style={styles.VerticalDivider}/>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: height,
    },

    upperContainer: {
        flexDirection: 'row',
    },

    VerticalDivider: {
        height: 0.5,
        width: width,
        backgroundColor: 'grey',
    },

    NamesContainer: {
        flexDirection: 'column',
        marginTop: 12,
    }
});