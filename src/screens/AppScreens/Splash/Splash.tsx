import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import {GetCurrentUser} from '../../../services/UserService';
import {useAppDispatch} from '../../../redux/Hooks';
import {saveUser} from '../../../redux/User/UserSlice';
import {MY_TABS} from '../../../helpers/RoutesName';

const Splash = ({navigation}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  const fetchCurrentUser = async () => {
    const response = await GetCurrentUser();
    if (response.data.success) {
      dispatch(
        saveUser({
          isLoggedIn: true,
          user: {
            ...response.data.res,
          },
        }),
      );
      navigation.navigate(MY_TABS);
    } else {
      dispatch(
        saveUser({
          isLoggedIn: false,
          user: {},
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.labelText}>Travel globally, eat locally.</Text>
    </View>
  );
};

export default Splash;
