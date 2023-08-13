import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './Styles';
import {ReportModal} from '../../utils/DataModels';

const ReportCard: React.FC<any> = ({data}) => {
  const imageUrl =
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg';

  const flatListRef: any = useRef(null);

  const RenderItem: React.FC<any> = ({image}) => {
  
    return <Image source={{uri: image}} style={styles.image} />;
  };

  return (
    <View style={styles.postCard}>
      {/* <Image source={{uri: item.images[0]}} style={styles.image} /> */}

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
      <Text style={styles.userName}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
};

export default ReportCard;
