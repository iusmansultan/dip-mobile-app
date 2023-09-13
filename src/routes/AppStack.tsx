import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash/Splash';
import MyTabs from '../screens/AppScreens/Tab/Tab';
import ResetPassword from '../screens/AppScreens/ResetPassword/ResetPassword';
import AddNewGuide from '../screens/AppScreens/AddNewGuide/AddNewGuide';
import EditProfile from '../screens/AppScreens/EditProfile/EditProfile';

import {
  SPLASH,
  MY_TABS,

  RESET_PASSWORD,
  ADD_NEW_GUIDE,
  EDIT_PROFILE,
} from '../helpers/RoutesName';
import {BLACK, COLOR_PRIMARY, WHITE} from '../helpers/Colors';

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
        name={ADD_NEW_GUIDE}
        component={AddNewGuide}
        options={{
          title: 'Add New Guide',
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
        name={EDIT_PROFILE}
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: WHITE,
          },
          headerTitleStyle: {
            color: BLACK,
          },
          headerBackTitleVisible: false,
          headerTintColor: BLACK,
        }}
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
