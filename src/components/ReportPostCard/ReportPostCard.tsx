import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './Styles';
import {ReportModal} from '../../utils/DataModels';
import {REPORTS_DETAILS} from '../../helpers/RoutesName';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../redux/Hooks';
import {FollowAndFollowing} from '../../services/UserService';
import {useNotification} from '../../contextApi/ApiContext';
import {saveUser} from '../../redux/User/UserSlice';

const ReportPostCard: React.FC<any> = ({data}) => {
  const dispatch = useAppDispatch();
  const flatListRef: any = useRef(null);
  const navigation = useNavigation();
  const user = useAppSelector((state: any) => state.user.value.user);
  let result = user.following.includes(data.user[0]._id);
  const {showSuccess} = useNotification();

  const RenderItem: React.FC<any> = ({image}) => {
    return <Image source={{uri: image}} style={styles.image} />;
  };

  const onClickHandle = () => {
    navigation.navigate(REPORTS_DETAILS, {details: data});
  };

  const onFollowPress = async (event: any) => {
    const body = {
      followingId: data.user[0]._id,
    };
    const response = await FollowAndFollowing(body, user._id);
    console.log(response);
    if (response.success) {
      showSuccess('Followed successfully');
      let userFollowing = [...user.follower, data.user[0]._id];

      dispatch(
        saveUser({
          isLoggedIn: true,
          user: {
            ...user,
            following: userFollowing,
          },
        }),
      );
    }
    event.stopPropagation();
  };

  return (
    <TouchableOpacity onPress={onClickHandle} style={styles.postCard}>
      <View style={styles.userTopContainer}>
        <Image
          source={
            data.user[0].imageUrl !== ''
              ? {uri: data.user[0].imageUrl}
              : require('../../assets/images/profile-avatar.jpeg')
          }
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>{data.user[0].name}</Text>
          <Text style={styles.createdAt}>
            {new Date(data.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </Text>
        </View>
        {!result && data.user[0]._id !== user._id && (
          <TouchableOpacity onPress={onFollowPress} style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.imageContainer}>
        <FlatList
          data={data.images}
          renderItem={({item}) => <RenderItem image={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}

          // onViewableItemsChanged={onViewableItemsChanged}
        />
      </View>
      <Text style={styles.userName} numberOfLines={1}>
        {data.title}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {data.description}
      </Text>
    </TouchableOpacity>
  );
};

export default ReportPostCard;
