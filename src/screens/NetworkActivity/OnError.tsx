import {
  View,
  ActivityIndicator,
  Animated,
  Modal,
  Image,
  Text,
  Easing,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import {useApiContext} from '../../contextApi/ApiContext';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
// const errorIcon = require('../../assets/icons/errorIcon.png');

const OnError = () => {
      const {error, errorMessage, setError} = useApiContext();

  return (
    <View style={styles.centeredView}>
      <Modal transparent={true} visible={true}>
        <View style={styles.centeredContainer}>
          <View style={styles.ErrorContainer}>
            <Text style={styles.titleText}>Error</Text>
            <Text style={styles.descriptionText}>{errorMessage}</Text>
            <PrimaryButton title="Done" onPress={() => setError(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OnError;
