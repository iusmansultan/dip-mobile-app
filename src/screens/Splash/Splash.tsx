import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import {useAppSelector} from '../../redux/Hooks';
import {LOGIN, MY_TABS} from '../../helpers/RoutesName';
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

      <View style={{width: '100%'}}>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.containText}>
            By selecting Agree and continue, I agree to dip's Terms of Service,
            Payments Terms of Service and acknowledge the Privacy Policy.
          </Text>
        </View>
        <PrimaryButton title="Try dip" onPress={onNext} />
      </View>
    </View>
  );
};

export default Splash;
