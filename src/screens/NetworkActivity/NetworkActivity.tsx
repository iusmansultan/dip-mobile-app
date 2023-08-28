import {
  View,
  ActivityIndicator,
  Animated,
  Modal,
  Image,
  Text,
  Easing,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import {useApiContext} from '../../contextApi/ApiContext';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
// const errorIcon = require('../../assets/icons/errorIcon.png');

const Loader = () => {
  const {loading} = useApiContext();

 if (loading) {
    return (
      <View style={styles.centeredView}>
        <Modal transparent={true} visible={true}>
          <View style={styles.Indicator}>
            <View style={styles.rectangle}>
              <ActivityIndicator
                style={{alignSelf: 'center'}}
                animating={true}
                size={'small'}
                color="white"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  return <></>;
};

export default Loader;
