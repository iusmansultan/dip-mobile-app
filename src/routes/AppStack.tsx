import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash/Splash';
import MyTabs from '../screens/AppScreens/Tab/Tab';
import HowToPlay from '../screens/AppScreens/HowToPlay/HowToPlay';
import Play from '../screens/AppScreens/Play/Play';
import Account from '../screens/AppScreens/Account/Account';
import ResetPassword from '../screens/AppScreens/ResetPassword/ResetPassword';

import {
  SPLASH,
  MY_TABS,
  HOW_TO_PLAY,
  PLAY,
  ACCOUNT,
  RESET_PASSWORD,
} from '../helpers/RoutesName';
import {COLOR_PRIMARY, WHITE} from '../helpers/Colors';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={MY_TABS}>
    
      <Stack.Screen
        name={MY_TABS}
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={HOW_TO_PLAY}
        component={HowToPlay}
        options={{
          title: 'How to play',
          headerStyle: {
            backgroundColor: COLOR_PRIMARY,
          },
          headerTitleStyle: {
            color: WHITE,
          },
          headerBackTitleVisible: false,
          headerTintColor: WHITE,
        }}
      />
      <Stack.Screen
        name={PLAY}
        component={Play}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ACCOUNT}
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RESET_PASSWORD}
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
