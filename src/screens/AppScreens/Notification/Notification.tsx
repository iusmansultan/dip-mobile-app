import {View, Text, Image, FlatList, RefreshControl} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Styles';
import AxiosCall from '../../../utils/AxiosCall';
import {BASE_URL, API_ENDPOINTS} from '../../../helpers/Config';
import {useAppSelector} from '../../../redux/Hooks';
import {useNotification} from '../../../contextApi/ApiContext';

const Notification: React.FC = () => {
  const user = useAppSelector((state: any) => state.user.value.user);
  const [notifications, setNotifications] = useState<any>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {showLoading, showError, showSuccess} = useNotification();

  useEffect(() => {
    onFetchNotifications();
  }, []);

  const onFetchNotifications = async () => {
    showLoading(true);
    const url =
      BASE_URL +
      API_ENDPOINTS.NOTIFICATIONS.GET_USER_NOTIFICATIONS +
      `/${user._id}`;

    const response = await AxiosCall({url: url, method: 'get', data: ''});
    setNotifications(response.data);
    showLoading(false);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.notificationTile}>
        <Image
          source={
            item.user[0].imageUrl !== ''
              ? {uri: item.user[0].imageUrl}
              : require('../../../assets/images/profile-avatar.jpeg')
          }
          style={styles.imageContainer}
        />

        <View>
          <Text style={styles.nameTextStyle}>{item.user[0].name}</Text>
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
        keyExtractor={item => item._id}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onFetchNotifications}
          />
        }
      />
    </View>
  );
};

export default Notification;
