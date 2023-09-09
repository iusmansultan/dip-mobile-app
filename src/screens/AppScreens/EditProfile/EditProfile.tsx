import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Switch,
  SafeAreaView,
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import DescriptionField from '../../../components/DescriptionField/DescriptionField';
import ImagePicker, {
  launchImageLibrary,
  ImagePickerResponse,
  Options,
} from 'react-native-image-picker';
import {useAppSelector, useAppDispatch} from '../../../redux/Hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {
  UploadUserProfileImage,
  UpdateUserProfile,
} from '../../../services/UserService';
import {useNotification} from '../../../contextApi/ApiContext';
import {saveUser} from '../../../redux/User/UserSlice';

const EditProfile: React.FC = ({navigation}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user.value.user);
  const {showLoading, showError, showSuccess} = useNotification();

  const [image, setImage] = useState<string>(user.imageUrl);
  const [name, setName] = useState<string>(user.name);
  const [userName, setUserName] = useState<string>(user.userName);
  const [bio, setBio] = useState<string>(user.bio);

  const onHandleSave = async () => {
    const body = {
      name: name,
      imageUrl: image,
      follower: user.follower,
      following: user.following,
      like: user.like,
      bio: bio,
      userName: userName,
      email: user.email,
    };
    console.log(body);
    showLoading(true);
    const {success, message, data} = await UpdateUserProfile(body, user._id);
    showLoading(false);
    if (success) {
      showSuccess(message);
      dispatch(
        saveUser({
          isLoggedIn: true,
          user: {
            ...user,
            ...body,
          },
        }),
      );
      navigation.goBack();
    } else {
      showError(message);
    }
  };

  const onUploadImage = async () => {
    const options: Options = {
      mediaType: 'photo',
      maxHeight: 500,
      maxWidth: 500,
    };

    launchImageLibrary(options, async (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        console.log('Image URI: ', response?.assets[0].uri);
        showLoading(true);
        const {
          success,
          message,
          url = '',
        } = await UploadUserProfileImage(response?.assets[0], user._id);
        console.log(url);
        showLoading(false);
        if (success) {
          setImage(url);
        } else {
          showError(message);
        }
        //  setImages([...images, url]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}>
        <TouchableOpacity onPress={onUploadImage}>
          <Image
            source={
              image !== ''
                ? {uri: image}
                : require('../../../assets/images/profile-avatar.jpeg')
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <InputField
          title="Name"
          placeholderText="Name"
          value={name}
          onChange={text => setName(text)}
        />
        <InputField
          title="@username"
          placeholderText="@username"
          value={userName}
          onChange={text => setUserName(text)}
        />
        <DescriptionField
          title="bio"
          placeholderText="enter your bio"
          value={bio}
          onChange={text => setBio(text)}
        />
      </ScrollView>
      <PrimaryButton title="Save" onPress={onHandleSave} />
    </View>
  );
};

export default EditProfile;
