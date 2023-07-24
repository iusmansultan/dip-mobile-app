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

const CreatePassword: React.FC<MyComponentProps> = ({navigation}) => {
  const handleOnBackPress = () => {
    navigation.goBack();
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
          Please enter a new, strong password to be used for your account.
        </Text>

        <InputField
          title="New Password"
          placeholderText="must be 8 characters"
          onChange={() => {}}
          isSecureText={true}
        />

        <InputField
          title="Confirm new password"
          placeholderText="must be 8 characters"
          onChange={() => {}}
          isSecureText={true}
        />
      </View>

      <PrimaryButton title="Reset Password" onPress={() => {}} />
    </View>
  );
};

export default CreatePassword;
