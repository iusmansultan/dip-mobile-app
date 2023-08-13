import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

const AccountCard: React.FC<any> = ({data}) => {
  const imageUrl =
    'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg';
  return (
    <View style={styles.postCard}>
      <View style={styles.flexStart}>
        <Image
          source={{uri: data.imageUrl !== '' ? data.imageUrl : imageUrl}}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{data.name}</Text>
      </View>
      <Image
        source={require('../../assets/icons/addAccount.png')}
        style={styles.icon}
      />
    </View>
  );
};

export default AccountCard;
