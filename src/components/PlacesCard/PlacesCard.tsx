import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

const PlacesCard: React.FC<any> = ({data}) => {
  const imageUrl =
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg';
  return (
    <View style={styles.postCard}>
      <View style={styles.flexStart}>
        <Image source={{uri: data.image}} style={styles.profileImage} />
        <Text style={styles.userName} numberOfLines={1}>
          {data.name}
        </Text>
      </View>
      <Image
        source={require('../../assets/icons/heart.png')}
        style={styles.icon}
      />
    </View>
  );
};

export default PlacesCard;
