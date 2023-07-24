import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Styles';
import {
  HOW_TO_PLAY,
  EXPANSION,
  SETTINGS,
  PLAY,
} from '../../../helpers/RoutesName';

const Home: React.FC = ({navigation}) => {
  const homeButtons = [
    {
      id: 1,
      label: 'Play',
      action: () => {
        navigation.navigate(PLAY);
      },
    },
    {
      id: 2,
      label: 'How to play',
      action: () => {
        navigation.navigate(HOW_TO_PLAY);
      },
    },
    {
      id: 3,
      label: 'Preferences',
      action: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      id: 4,
      label: 'Upgrade',
      action: () => {
        navigation.navigate(EXPANSION);
      },
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/authBg.png')}
      style={styles.container}>
      <Text style={styles.labelText}>Numbers</Text>

      {homeButtons.map((item: any) => (
        <TouchableOpacity
          key={item.id}
          onPress={item.action}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
};

export default Home;
