import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

const PlacesCard = () => {
  const imageUrl =
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg';
  return (
    <View style={styles.postCard}>
      <View style={styles.flexStart}>
        <Image source={{uri: imageUrl}} style={styles.profileImage} />
        <Text style={styles.userName}>Place</Text>
      </View>
      <Image
        source={require('../../assets/icons/heart.png')}
        style={styles.icon}
      />
    </View>
  );
};

export default PlacesCard;
