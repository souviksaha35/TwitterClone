import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ColorSchemeName } from 'react-native';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { ProfileScreen } from '../screens/ProfileScreen';
import {
  Provider as PaperProvider
} from 'react-native-paper';
import { SignInScreen } from '../screens/signIn';
import { SignUpScreen} from '../screens/SignUp';
import { DrawerContent } from '../screens/DrawerContent';
import { useState } from 'react';
import { LandingScreen } from '../screens/LandingScreen';
import  confirmSignup  from '../screens/confirmSignup';
import { Auth } from 'aws-amplify';

const Drawer = createDrawerNavigator();


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [user, setUser] = useState(null);

  const userInfo = async () => {
    const user = await Auth.currentAuthenticatedUser();

    setUser(user);

    console.log(user);

  }

  useEffect(() => {
    userInfo();
  }, []);

  if (!user) {
    return (
      <PaperProvider>
        <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AuthStackScreen />
        </NavigationContainer>
      </PaperProvider>
    );
  } else {
    return (
      <PaperProvider>
        <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Home" component={RootNavigator}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }

  
  
}

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName='Landing'>
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false}} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false}} />
      <AuthStack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}} />
      <AuthStack.Screen name="confirmSignup" component={confirmSignup} options={{ headerShown: false}} />
      <Drawer.Screen name="Home" component={RootNavigator}/>
    </AuthStack.Navigator>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
