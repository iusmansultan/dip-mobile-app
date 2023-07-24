import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {LOGIN} from '../../../helpers/RoutesName';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  splash: undefined;
  login: undefined;
  signup: undefined;
};

// Assuming you have a component that receives the navigation prop
type MyComponentProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const ResetPassword: React.FC<MyComponentProps> = ({navigation}) => {
  const handleOnBackPress = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/authBg.png')}
      style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={handleOnBackPress}>
          <Image
            source={require('../../../assets/icons/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.labelText}>Account</Text>
      </View>

      <InputField
        title="Enter Current Password"
        placeholderText="must be 8 characters"
        onChange={() => {}}
        isSecureText={true}
      />

      <InputField
        title="New Password"
        placeholderText="must be 8 characters"
        onChange={() => {}}
        isSecureText={true}
      />

      <InputField
        title="Confirm New Password"
        placeholderText="must be 8 characters"
        onChange={() => {}}
        isSecureText={true}
      />

      <View style={styles.forgotPasswordContianer}></View>

      <PrimaryButton title="Reset Password" onPress={() => {}} />
    </ImageBackground>
  );
};

export default ResetPassword;
