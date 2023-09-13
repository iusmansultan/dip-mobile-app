import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Switch,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';

import {useAppSelector, useAppDispatch} from '../../../redux/Hooks';
import {useNotification} from '../../../contextApi/ApiContext';

const ReportDetails: React.FC = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user.value.user);
  const {showLoading, showError} = useNotification();
  const {details} = route.params;

  const [comment, setComment] = useState<string>('');

  const RenderItem: React.FC<any> = ({image}) => {
    return <Image source={{uri: image}} style={styles.image} />;
  };
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.userTopContainer}>
          <Image
            source={
              details.user[0].imageUrl !== ''
                ? {uri: details.user[0].imageUrl}
                : require('../../../assets/images/profile-avatar.jpeg')
            }
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>{details.user[0].name}</Text>
            <Text style={styles.createdAt}>
              {new Date(details.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <FlatList
            data={details.images}
            renderItem={({item}) => <RenderItem image={item} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            extraData={comment} // Add the relevant prop that should trigger a re-render

            // onViewableItemsChanged={onViewableItemsChanged}
          />
        </View>
        <Text style={styles.userName} numberOfLines={1}>
          {details.title}
        </Text>
        <Text style={styles.description}>{details.description}</Text>

        <View style={styles.divider}></View>
      </ScrollView>
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInputContainer}
          onChangeText={text => setComment(text)}
          value={comment}
        />
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/sendMessageIcon.png')}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ReportDetails;
