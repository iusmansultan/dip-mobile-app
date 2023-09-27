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
  Keyboard,
} from 'react-native';

import React, {useState, useEffect, useRef} from 'react';
import styles from './Styles';
import Share from 'react-native-share';
import {useAppSelector, useAppDispatch} from '../../../redux/Hooks';
import {useNotification} from '../../../contextApi/ApiContext';

import {CreateComment, GetAllComments} from '../../../services/CommentService';
import {LikeReportByUser} from '../../../services/ReportService';

const ReportDetails: React.FC = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user.value.user);
  const {showLoading, showError, showSuccess} = useNotification();
  const {details} = route.params;
  const commentInputRef: any = useRef(null);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<any[]>([]);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  const [isLike, setIsLike] = useState<boolean>(false);

  const RenderItem: React.FC<any> = ({image}) => {
    return <Image source={{uri: image}} style={styles.image} />;
  };

  useEffect(() => {
    if (details.likes !== undefined) {
      setIsLike(details.likes.includes(user._id));
    }
    onFetchComments();
    // Add a listener for keyboard open event
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );

    // Add a listener for keyboard close event
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    // Clean up the listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardDidShow = () => {
    // Keyboard is open
    console.log('Keyboard is open');
    setIsKeyboardOpen(true);
  };

  const keyboardDidHide = () => {
    // Keyboard is closed
    console.log('Keyboard is closed');
    setIsKeyboardOpen(false);
  };

  const onPostCommet = async () => {
    const body = {
      comment,
      reportId: details._id,
      userId: details.user[0]._id,
      commentedBy: user._id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    showLoading(true);
    const {success, message, data} = await CreateComment(body);
    showLoading(false);
    if (success) {
      setComment('');
      onFetchComments();
      showSuccess('Commented successfully!');
    } else {
      showError(message);
    }
  };

  const onHandleLikeClick = async () => {
    if (isLike) {
      const body = {
        likeBy: user._id,
      };
      showLoading(true);
      const {success, message, data} = await LikeReportByUser(
        body,
        details._id,
      );
      showLoading(false);
      if (success) {
        showSuccess('Liked successfully!');
      } else {
        showError(message);
      }
    }
  };

  const onFetchComments = async () => {
    showLoading(true);
    const {success, message, data} = await GetAllComments(details._id);
    showLoading(false);
    if (success) {
      setComments(data);
    } else {
      showError(message);
    }
  };

  const onHandleCommentClick = () => {
    commentInputRef.current.focus();
  };

  const onHandleShare = async () => {
    try {
      const options = {
        title: details.title,
        message: details.description,
        url: 'https://www.dip.com',
        social: Share.Social.EMAIL,
      };

      await Share.open(options);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
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

        <View style={styles.dFlexBetween}>
          <TouchableOpacity
            onPress={onHandleLikeClick}
            style={styles.dFlexStart}>
            <Image
              source={require('../../../assets/icons/reportdetails/like.png')}
              style={isLike ? styles.iconsActive :styles.icons}
            />
            <Text style={isLike ? styles.textActive : styles.text}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onHandleCommentClick}
            style={styles.dFlexStart}>
            <Image
              source={require('../../../assets/icons/reportdetails/comment.png')}
              style={styles.icons}
            />
            <Text style={styles.text}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onHandleShare} style={styles.dFlexStart}>
            <Image
              source={require('../../../assets/icons/reportdetails/share.png')}
              style={styles.icons}
            />
            <Text style={styles.text}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}></View>

        {comments.map((item: any, index: any) => (
          <View key={index} style={styles.commentBox}>
            <Image
              source={
                item.user[0].imageUrl !== ''
                  ? {uri: item.user[0].imageUrl}
                  : require('../../../assets/images/profile-avatar.jpeg')
              }
              style={styles.profilePicture}
            />
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentUserName}>{item.user[0].name}</Text>
              <View style={styles.commentMessageContainer}>
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
              <Text style={styles.dateText}>
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={
          isKeyboardOpen
            ? styles.commentContainerWithOpenKeyboard
            : styles.commentContainer
        }>
        <TextInput
          ref={commentInputRef}
          style={styles.commentInputContainer}
          onChangeText={text => setComment(text)}
          value={comment}
        />
        <TouchableOpacity onPress={onPostCommet}>
          <Image
            source={require('../../../assets/icons/sendMessageIcon.png')}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportDetails;
