// Toaster.js
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, Image} from 'react-native';
import {useNotification} from '../../contextApi/ApiContext';
import {getFontSize} from '../../utils/GetFontSize';
import {MEDIUM, WHITE} from '../../helpers/Colors';

const Toaster = () => {
  const {success, error, toaster} = useNotification();
  const [animation] = useState(new Animated.Value(0));

  if (toaster) {
    return (
      <View
        style={
          success !== null
            ? styles.container
            : error !== null && styles.errorContainer
        }>
        {success !== null && (
          <Image
            source={require('../../assets/images/success.png')}
            style={styles.icon}
          />
        )}
        {error !== null && (
          <Image
            source={require('../../assets/images/warning.png')}
            style={styles.errorIcon}
          />
        )}
        {success !== null && <Text style={styles.messageText}>{success}</Text>}
        {error !== null && <Text style={styles.errorMessageText}>{error}</Text>}
      </View>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#557d00',
    padding: 10,
    zIndex: 3,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  errorContainer: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#b02f00',
    padding: 10,
    zIndex: 3,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  messageText: {
    color: 'white',
    fontSize: getFontSize(15),
    fontFamily: MEDIUM,
  },
  errorMessageText: {
    color: WHITE,
    fontSize: getFontSize(15),
    fontFamily: MEDIUM,
  },
  errorIcon: {
    width: 25,
    height: 25,
    tintColor: WHITE,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Toaster;
