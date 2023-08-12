import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import {useAppSelector} from '../../redux/Hooks';
import { LOGIN, MY_TABS } from '../../helpers/RoutesName';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Splash = ({navigation}) => {
  const isLoggedIn = useAppSelector(
    (state: any) => state.user.value.isLoggedIn,
  );
  const onNext = () => {
    if (isLoggedIn) navigation.navigate(MY_TABS);
    else navigation.navigate(LOGIN);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoStyle}
        />
        <Text style={styles.labelText}>Travel globally, eat locally.</Text>
      </View>
      <PrimaryButton title="Try dip" onPress={onNext} />
    </View>
  );
};

export default Splash;
