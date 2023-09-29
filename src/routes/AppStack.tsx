import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from '../screens/AppScreens/Tab/Tab';
import ResetPassword from '../screens/AppScreens/ResetPassword/ResetPassword';
import AddNewGuide from '../screens/AppScreens/AddNewGuide/AddNewGuide';
import EditProfile from '../screens/AppScreens/EditProfile/EditProfile';
import ReportDetails from '../screens/AppScreens/ReportDetails/ReportDetails';
import Splash from '../screens/AppScreens/Splash/Splash';
import {
  SPLASH,
  MY_TABS,
  RESET_PASSWORD,
  ADD_NEW_GUIDE,
  EDIT_PROFILE,
  REPORTS_DETAILS,
  APP_SPLASH,
} from '../helpers/RoutesName';
import {BLACK, COLOR_PRIMARY, WHITE} from '../helpers/Colors';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={APP_SPLASH}>
      <Stack.Screen
        name={APP_SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
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
        name={REPORTS_DETAILS}
        component={ReportDetails}
        options={{
          title: 'Report Details',
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
