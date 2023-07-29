import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {SIGNUP, FORGOT_PASSWORD} from '../../../helpers/RoutesName';
import {NavigationProp} from '@react-navigation/native';
import {useAppDispatch} from '../../../redux/Hooks';
import {saveUser} from '../../../redux/User/UserSlice';

type RootStackParamList = {
  splash: undefined;
  login: undefined;
  signup: undefined;
  forgotpassword: undefined;
};

// Assuming you have a component that receives the navigation prop
type MyComponentProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const Login: React.FC<MyComponentProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const handleOnSignup = () => {
    navigation.navigate(SIGNUP);
  };

  const handleSignIn = () => {
    dispatch(
      saveUser({
        isLoggedIn: true,
        user: {},
      }),
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('./../../../assets/images/logo.png')}
          style={styles.logo}
        />

        <>
          <View style={styles.socialButton}>
            <Image
              source={require('../../../assets/icons/googleIcon.png')}
              style={styles.icon}
            />
            <Text style={styles.socialText}>Log in with Google</Text>
          </View>
          <View style={styles.socialButtonApple}>
            <Image
              source={require('../../../assets/icons/appleIcon.png')}
              style={styles.iconApple}
            />
            <Text style={styles.socialTextApple}>Log in with Apple</Text>
          </View>
        </>

        <View style={styles.dividerContainer}>
          <View style={styles.divider}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider}></View>
        </View>

        <>
          <InputField
            title="Email address"
            placeholderText="example@example.com"
            onChange={() => {}}
            isSecureText={false}
          />
          <InputField
            title="Password"
            placeholderText="*********"
            onChange={() => {}}
            isSecureText={true}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(FORGOT_PASSWORD);
            }}
            style={styles.forgotPasswordContianer}>
            <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
          </TouchableOpacity>
        </>

        <>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.containText}>
              By selecting Agree and continue, I agree to dip's Terms of
              Service, Payments Terms of Service and acknowledge the Privacy
              Policy.
            </Text>
          </View>

          <PrimaryButton
            isDisbaled={false}
            title="Agree & Continue "
            onPress={handleSignIn}
          />
        </>
      </View>
    </ScrollView>
  );
};

export default Login;
