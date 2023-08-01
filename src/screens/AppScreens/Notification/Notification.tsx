import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Notification: React.FC = () => {
  const notifications = [
    {
      id: 1,
      image: '',
      name: 'Mark Zek',
      message: 'has started following you',
    },
    {
      id: 2,
      image: '',
      name: 'John Deo ',
      message: 'has added a new guide',
    },
    {
      id: 3,
      image: '',
      name: 'Mark Zek',
      message: 'has started following you',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.notificationTile}>
        <View style={styles.imageContainer}></View>
        <View>
          <Text style={styles.nameTextStyle}>{item.name}</Text>
          <Text style={styles.messageStyle}>{item.message}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Notification;
