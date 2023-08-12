import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

const ReportCard = () => {
  const imageUrl =
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg';
  return (
    <View style={styles.postCard}>
      <Image source={{uri: imageUrl}} style={styles.image} />

      <Text style={styles.userName}>User Name</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
        vulputate se... more
      </Text>
    </View>
  );
};

export default ReportCard;
