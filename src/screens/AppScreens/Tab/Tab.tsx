import * as React from 'react';
import {Text, View, Image, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from './Styles';

const HomeIcon = require('../../../assets/icons/homeIcon.png');
const leaderboardIcon = require('../../../assets/icons/leaderboardIcon.png');
const ExpansionIcon = require('../../../assets/icons/ExpansionIcon.png');
const settingIcon = require('../../../assets/icons/settingIcon.png');

// import screens for bottom tabs
import Home from '../Home/Home';
import Leaderboard from '../Leaderboard/Leaderboard';
import Expansion from '../Expansion/Expansion';
import Settings from '../Settings/Settings';

// route name
import {
  HOME,
  LEADERBOARD,
  EXPANSION,
  SETTINGS,
} from '../../../helpers/RoutesName';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="dashboard">
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused ? styles.tabBarLabelActive : styles.tabBarLabelInActive
              }>
              Home
            </Text>
          ),
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
        name={LEADERBOARD}
        component={Leaderboard}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused ? styles.tabBarLabelActive : styles.tabBarLabelInActive
              }>
              Leaderboard
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={leaderboardIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={EXPANSION}
        component={Expansion}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused ? styles.tabBarLabelActive : styles.tabBarLabelInActive
              }>
              Expansion
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={ExpansionIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused ? styles.tabBarLabelActive : styles.tabBarLabelInActive
              }>
              Settings
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={settingIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
