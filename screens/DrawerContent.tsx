import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    Avatar, 
    Caption, 
    Drawer, 
    Paragraph, 
    Title,
    TouchableRipple
} from 'react-native-paper';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Switch } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('screen');

export function DrawerContent(props) {
    return (
            <DrawerContentScrollView {...props}>
               <View style={styles.drawerContent}>
                   <View style={styles.userInfoSection}>
                        <Avatar.Image
                            source={{
                                uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                            }}
                            size={50}
                        />
                        <Title style={styles.title}>
                            Souvik saha
                        </Title>
                        <Caption style={styles.caption}>
                            @souvik
                        </Caption>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                  202
                                </Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    159
                                </Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
            
                            </View>
                        </View>
                   </View>
                   <Drawer.Section style={styles.drawerSection}>
                       <DrawerItem
                         icon={({color, size}) => (
                             <MaterialCommunityIcons
                             name="account-outline"
                             size={size}
                             color={color}/>
                         )}
                         label="Profile"
                         onPress={() => {}}
                       />

                        <DrawerItem
                         icon={({color, size}) => (
                            <MaterialCommunityIcons name="tune" color={color} size={size} />
                         )}
                         label="Preferences"
                         onPress={() => {}}
                       />

                        <DrawerItem
                         icon={({color, size}) => (
                            <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
                         )}
                         label="Bookmarks"
                         onPress={() => {}}
                       />
                   </Drawer.Section>
                   <Drawer.Section title="Preferences">
                       <TouchableRipple onPress={() => {}}>
                           <View style={styles.prefernces}>
                               <Text>Dark Theme </Text>
                               <View pointerEvents="none">
                                   <Switch value={false}/>
                               </View>
                           </View>
                       </TouchableRipple>
                       <TouchableRipple onPress={() => {}}>
                           <View style={styles.prefernces}>
                               <Text>RTL</Text>
                               <View pointerEvents="none">
                                   <Switch value={false}/>
                               </View>
                           </View>
                       </TouchableRipple>
                   </Drawer.Section>
               </View>
            </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20,
    },

    title: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection: {
        marginTop: 15,
    },

    prefernces: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12, 
        paddingHorizontal: 16,
    }
})