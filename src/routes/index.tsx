import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Stack
import AuthStack from './AuthStack';
import AppStack from './AppStack';

// redux
import {useAppSelector} from '../redux/Hooks';

const Router = () => {
  const isLoggedIn = useAppSelector(
    (state: any) => state.user.value.isLoggedIn,
  );
  const role = useAppSelector((state: any) => state.user.value.user.role);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
