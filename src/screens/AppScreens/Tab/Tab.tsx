import * as React from 'react';
import {Text, View, Image, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from './Styles';

const HomeIcon = require('../../../assets/icons/homeIcon.png');
const searchIcon = require('../../../assets/icons/searchIcon.png');
const addIcon = require('../../../assets/icons/addIcon.png');
const NotificationIcon = require('../../../assets/icons/notificationIcon.png');
const settingIcon = require('../../../assets/icons/settingIcon.png');

// import screens for bottom tabs
import Home from '../Home/Home';
import Add from '../Add/Add';
import Search from '../Search/Search';
import Notification from '../Notification/Notification';
import Settings from '../Settings/Settings';

// route name
import {
  HOME,
  SEARCH,
  NOTIFICATION,
  SETTINGS,
  ADD,
} from '../../../helpers/RoutesName';
import {getFontSize} from '../../../utils/GetFontSize';
import {MEDIUM} from '../../../helpers/Colors';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName={HOME}>
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={SEARCH}
        component={Search}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={searchIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerTitleAlign: 'center', // Align header title in the center
          headerTitleStyle: {
            fontSize: getFontSize(16), // Customize font size or other styles
            fontFamily: MEDIUM,
          },
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name={ADD}
        component={Add}
        options={{
          title: 'Add Report',
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={addIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerTitleAlign: 'left', // Align header title in the center
          headerTitleStyle: {
            fontSize: getFontSize(16), // Customize font size or other styles
            fontFamily: MEDIUM,
          },
        }}
      />
      <Tab.Screen
        name={NOTIFICATION}
        component={Notification}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={NotificationIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerTitleAlign: 'center', // Align header title in the center
          headerTitleStyle: {
            fontSize: getFontSize(16), // Customize font size or other styles
            fontFamily: MEDIUM,
          },
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          headerTitle: 'My Profile',
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={settingIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerTitleAlign: 'center', // Align header title in the center
          headerTitleStyle: {
            fontSize: getFontSize(16), // Customize font size or other styles
            fontFamily: MEDIUM,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
