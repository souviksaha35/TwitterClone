import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { User } from '../../types';
import ProfilePicture from '../ProfilePicture';


export type LeftContainerProps = {
    user: User,
}


const LeftContainer = ({ user }: LeftContainerProps) => {
    return (
        <View>
            <TouchableNativeFeedback>
                <ProfilePicture image={user.image} size={50}/>
            </TouchableNativeFeedback>
        </View>
    );
};

export default LeftContainer;