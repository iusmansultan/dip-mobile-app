import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

const GuideCard: React.FC<any> = ({data}) => {

  return (
    <View style={styles.postCard}>
      <View style={styles.flexStart}>
        {/* <Image source={{uri: imageUrl}} style={styles.profileImage} /> */}
        <Text style={styles.userName}>{data.title}</Text>
      </View>
      <Image
        source={require('../../assets/icons/bell.png')}
        style={styles.icon}
      />
    </View>
  );
};

export default GuideCard;
