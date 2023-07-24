import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Switch,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {ACCOUNT} from '../../../helpers/RoutesName';
import {COLOR_PRIMARY} from '../../../helpers/Colors';
import {useAppDispatch} from '../../../redux/Hooks';
import {logoutUser} from '../../../redux/User/UserSlice';

const Settings: React.FC = ({navigation}) => {
  const dispatch = useAppDispatch();
  const options = [
    {
      id: 1,
      title: 'Sound',
      isOFF: true,
      icon: require('../../../assets/icons/soundIcon.png'),
    },
    {
      id: 2,
      title: 'Vibration',
      isOFF: true,
      icon: require('../../../assets/icons/vibrationIcon.png'),
    },
    {
      id: 3,
      title: 'Notification',
      isOFF: false,
      icon: require('../../../assets/icons/notificationIcon.png'),
    },
    {
      id: 4,
      title: 'Daily Changes',
      isOFF: true,
      icon: require('../../../assets/icons/changesIcon.png'),
    },
    {
      id: 5,
      title: 'Number Facts',
      isOFF: false,
      icon: require('../../../assets/icons/factIcon.png'),
    },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleAccount = () => {
    navigation.navigate(ACCOUNT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Settings</Text>

      <TouchableOpacity onPress={handleAccount} style={styles.accountContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../../assets/icons/accountAvatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.title}>Account</Text>
          <Text style={styles.description}>Make changes to your account</Text>
        </View>
        <Image
          source={require('../../../assets/icons/rightArrow.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>

      {options.map((item: any, index: number) => (
        <OptionTile key={item.id} item={item} />
      ))}

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Image
          source={require('../../../assets/icons/logout.png')}
          style={styles.logout}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const OptionTile = ({item}) => {
  const [isEnabled, setIsEnabled] = useState(item.isOFF);

  const toggleSwitch = () => {
    setIsEnabled((previousState: any) => !previousState);
  };
  return (
    <View style={styles.optionTile}>
      <View style={styles.leftView}>
        <View style={styles.avatarContainer}>
          <Image source={item.icon} style={styles.avatar} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Switch
        trackColor={{false: '#767577', true: COLOR_PRIMARY}}
        thumbColor={isEnabled ? 'white' : 'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
