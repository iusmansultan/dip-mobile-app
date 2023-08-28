import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {RESET_PASSWORD} from '../../../helpers/RoutesName';

const Account: React.FC = ({navigation}) => {
  const handleOnBackPress = () => {
    navigation.goBack();
  };



  return <View style={styles.container}></View>;
};

export default Account;

