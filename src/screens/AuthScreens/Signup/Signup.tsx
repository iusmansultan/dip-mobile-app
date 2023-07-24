import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
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
  // Add more screens and their parameter types here
};

// Assuming you have a component that receives the navigation prop
type MyComponentProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const Signup: React.FC<MyComponentProps> = ({navigation}) => {
  const handleOnLogin = () => {
    navigation.navigate(LOGIN);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/authBg.png')}
      style={styles.container}>
      <SafeAreaView>
        <Text style={styles.labelText}>Sign up</Text>

        <InputField
          title="Username"
          placeholderText="username"
          onChange={() => {}}
          isSecureText={false}
        />
        <InputField
          title="Email address"
          placeholderText="example@example.com"
          onChange={() => {}}
          isSecureText={false}
        />
        <InputField
          title="Create a password"
          placeholderText="must be 8 characters"
          onChange={() => {}}
          isSecureText={true}
        />

        <View style={styles.forgotPasswordContianer}></View>

        <PrimaryButton title="Sign up" onPress={() => {}} />

        <View style={styles.dividerContainer}>
          <View style={styles.divider}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialButton}>
          <Image
            source={require('../../../assets/icons/googleIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Log in with Google</Text>
        </View>
        <View style={styles.socialButton}>
          <Image
            source={require('../../../assets/icons/appleIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Log in with Apple</Text>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.containText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleOnLogin}>
            <Text style={styles.containTextBold}>Log in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Signup;
