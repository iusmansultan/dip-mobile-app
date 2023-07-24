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

  const options = [
    {
      id: 1,
      label: 'Save Numbers',
      action: () => {},
      icon: require('../../../assets/icons/saveIcon.png'),
    },
    {
      id: 2,
      label: 'Password Settings',
      action: () => {
        navigation.navigate(RESET_PASSWORD);
      },
      icon: require('../../../assets/icons/passwordIcon.png'),
    },
    {
      id: 3,
      label: 'Support / Feedbacks',
      action: () => {},
      icon: require('../../../assets/icons/supportIcon.png'),
    },
    {
      id: 4,
      label: 'Delete My Account',
      action: () => {},
      icon: require('../../../assets/icons/deleteIcon.png'),
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/authBg.png')}
      style={styles.container}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={handleOnBackPress}>
            <Image
              source={require('../../../assets/icons/Back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.labelText}>Account</Text>
        </View>

        <View style={styles.profileImageContianer}>
          <Image
            source={{uri: 'https://thispersondoesnotexist.com/'}}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.userNameText}>@johndeo</Text>

        <View style={styles.pointContainer}>
          <Text style={styles.pointText}>375 Points</Text>
          <Text>|</Text>
          <Text style={styles.pointTextBold}>1559</Text>
        </View>

        {options.map((item: any) => (
          <ActionsTile key={item.id} item={item} />
        ))}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Account;

const ActionsTile = ({item}) => {
  return (
    <TouchableOpacity onPress={item.action} style={styles.actionTileContainer}>
      <View style={styles.flexStart}>
        <Image source={item.icon} style={styles.icon} />
        <Text
          style={
            item.id === 4 ? styles.deleteActionTileText : styles.actionTileText
          }>
          {item.label}
        </Text>
      </View>
      {item.id !== 4 && (
        <Image
          source={require('../../../assets/icons/rightArrow.png')}
          style={styles.arrowIcon}
        />
      )}
    </TouchableOpacity>
  );
};
