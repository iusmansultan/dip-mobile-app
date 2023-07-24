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
import {LOGIN, CREATE_PASSWORD} from '../../../helpers/RoutesName';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  splash: undefined;
  login: undefined;
  signup: undefined;
  createpasword: {email: string};
};

// Assuming you have a component that receives the navigation prop
type MyComponentProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const ForgotPassword: React.FC<MyComponentProps> = ({navigation}) => {
  const handleOnBackPress = () => {
    navigation.goBack();
  };

  const handleOnSubmit = () => {
    navigation.navigate(CREATE_PASSWORD, {email: ''});
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/authBg.png')}
      style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity onPress={handleOnBackPress}>
          <Image
            source={require('../../../assets/icons/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.topImageContainer}>
          <Image
            source={require('../../../assets/icons/lockIcon.png')}
            style={styles.icon}
          />
        </View>
        <Text style={styles.labelText}>Forgot Password</Text>
        <Text style={styles.labelDescrition}>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </Text>

        <InputField
          title="Email address"
          placeholderText="example@example.com"
          onChange={() => {}}
          isSecureText={false}
        />

        <View style={styles.forgotPasswordContianer}></View>

        <PrimaryButton title="Submit" onPress={handleOnSubmit} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ForgotPassword;
