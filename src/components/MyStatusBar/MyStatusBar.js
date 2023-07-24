import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {COLOR_PRIMARY} from '../../helpers/Colors';

const MyStatusBar = () => {
  return (
    <>
      <StatusBar backgroundColor={COLOR_PRIMARY} barStyle="light-content" />
    </>
  );
};

export default MyStatusBar;
