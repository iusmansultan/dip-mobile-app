import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {LOGIN} from '../../../helpers/RoutesName';
import {CreateUser} from '../../../services/UserService';

import {NavigationProp} from '@react-navigation/native';
import {useApiContext} from '../../../contextApi/ApiContext';

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
  const {loading, setLoading, error, setError} = useApiContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnLogin = () => {
    navigation.navigate(LOGIN);
  };
  const handleOnSignUp = async () => {
    setLoading(true);
    const data = {
      name,
      email,
      password,
    };
    const response = await CreateUser(data);
    console.log(response);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <InputField
        title="Username"
        placeholderText="username"
        onChange={text => setName(text)}
        isSecureText={false}
      />
      <InputField
        title="Email address"
        placeholderText="example@example.com"
        onChange={text => setEmail(text)}
        isSecureText={false}
      />
      <InputField
        title="Create a password"
        placeholderText="must be 8 characters"
        onChange={text => setPassword(text)}
        isSecureText={true}
      />

      <View style={styles.forgotPasswordContianer}></View>

      <PrimaryButton title="Sign up" onPress={handleOnSignUp} />

      <View style={styles.bottomTextContainer}>
        <Text style={styles.containText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleOnLogin}>
          <Text style={styles.containTextBold}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
