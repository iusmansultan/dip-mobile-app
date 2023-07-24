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
    <View style={styles.container}>
      <View>
        <View style={styles.topImageContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.icon}
          />
        </View>
        <Text style={styles.labelDescrition}>
          Enter the email address you used when you joined and we'll send you
          instructions to reset your password.
        </Text>

        <InputField
          title="Email address"
          placeholderText="example@example.com"
          onChange={() => {}}
          isSecureText={false}
        />
      </View>

      <PrimaryButton title="Send reset link" onPress={handleOnSubmit} />
    </View>
  );
};

export default ForgotPassword;
