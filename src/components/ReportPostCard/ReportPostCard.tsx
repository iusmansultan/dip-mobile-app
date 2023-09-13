import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './Styles';
import {ReportModal} from '../../utils/DataModels';
import {REPORTS_DETAILS} from '../../helpers/RoutesName';
import {useNavigation} from '@react-navigation/native';

const ReportPostCard: React.FC<any> = ({data}) => {
  const flatListRef: any = useRef(null);
  const navigation = useNavigation();

  const RenderItem: React.FC<any> = ({image}) => {
    return <Image source={{uri: image}} style={styles.image} />;
  };

  const onClickHandle = () => {
    navigation.navigate(REPORTS_DETAILS, {details: data});
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
