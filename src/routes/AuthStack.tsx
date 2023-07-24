import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash/Splash';
import Login from '../screens/AuthScreens/Login/Login';
import Signup from '../screens/AuthScreens/Signup/Signup';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword/ForgotPassword';
import CreatePassword from '../screens/AuthScreens/CreatePassword/CreatePassword';
import { View } from 'react-native';
import {
  SPLASH,
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD,
  CREATE_PASSWORD,
} from '../helpers/RoutesName';
import { BLACK, COLOR_PRIMARY, WHITE } from '../helpers/Colors';
import { getFontSize } from '../utils/GetFontSize';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center', // Aligns the title to the center
      }}
      initialRouteName={SPLASH}>
      <Stack.Screen
        name={SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{
          headerLeft: () => <View></View>,
          title: 'Log In or Sign Up',
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitleStyle: {
            color: BLACK,
            // fontFamily: 'Poppins-Regular',
            // fontSize: getFontSize(14),
          },
          headerBackTitleVisible: false,
          headerTintColor: BLACK,
        }}
      />
      <Stack.Screen
        name={SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CREATE_PASSWORD}
        component={CreatePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
