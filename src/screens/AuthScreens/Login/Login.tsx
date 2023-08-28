import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {SIGNUP, FORGOT_PASSWORD} from '../../../helpers/RoutesName';
import {NavigationProp} from '@react-navigation/native';
import {useAppDispatch} from '../../../redux/Hooks';
import {saveUser} from '../../../redux/User/UserSlice';
import {SignInUser} from '../../../services/UserService';
import {useApiContext} from '../../../contextApi/ApiContext';

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
  const {loading, setLoading, error, setError} = useApiContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOnSignup = () => {
    navigation.navigate(SIGNUP);
  };

  const handleSignIn = async () => {
    setLoading(true);
    const response = await SignInUser({email, password});
    console.log(response);
    setLoading(false);

    if (response.success) {
      dispatch(
        saveUser({
          isLoggedIn: true,
          user: {
            ...response.data
          },
        }),
      );
    } else {
      Alert.alert(
        'Error',
        response.message,
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    }
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
            onChange={text => setEmail(text)}
            isSecureText={false}
          />
          <InputField
            title="Password"
            placeholderText="*********"
            onChange={text => setPassword(text)}
            isSecureText={true}
          />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(FORGOT_PASSWORD);
            }}
            style={styles.forgotPasswordContianer}>
            <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
          </TouchableOpacity>
          <PrimaryButton
            isDisbaled={false}
            title="Login"
            onPress={handleSignIn}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SIGNUP);
            }}
            style={styles.signUpTextContianer}>
            <Text style={styles.forgotPasswordText}>
              Don't have a account? Sign Up
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </ScrollView>
  );
};

export default Login;
