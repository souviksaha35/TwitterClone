import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../constants/Colors';
import {getFocusedRouteNameFromRoute, useIsFocused} from '@react-navigation/native'
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import Tweet from '../components/Tweet';
import { TweetScreen } from '../screens/TweetScreen';
import SearchScreen from '../screens/SearchScreen';
import { color } from 'react-native-reanimated';
import { FAB, Portal } from 'react-native-paper';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  const isFocused = useIsFocused();

  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }
  return (
   <React.Fragment>
    <BottomTab.Navigator
      initialRouteName="Feed"
      activeColor={Colors[colorScheme].tint}
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: 'white'}}
      >
      <BottomTab.Screen
        name="Feed"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-variant-outline" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="md-notifications" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="mail" size={24} color={color} />,
        }}
      />


    </BottomTab.Navigator>

    <Portal>
      <FAB
      visible={isFocused}
      icon={icon}
      style={{
        position: "absolute",
        backgroundColor: Colors[colorScheme].tint,
        bottom: 100,
        right: 16,
      }}/>
    </Portal>
    </React.Fragment>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerRightContainerStyle: {
            marginRight: 15,
          },

          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitle: () => (
            <Entypo name="twitter" size={30} color={Colors.light.tint} />
          ),

          headerRight: () => (
            <MaterialCommunityIcons name="star-four-points-outline" size={30} color={Colors.light.tint} />
          ),

        }}
      />
      <TabOneStack.Screen
      name={icon}
      component={TweetScreen}
      options={{
        headerTitle: 'Tweet'
      }}/>
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={SearchScreen}
        options={{ headerShown: false, }}
      />
    </TabTwoStack.Navigator>
  );
}
