import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import styles from './Styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import ImagePicker, {
  launchImageLibrary,
  ImagePickerResponse,
  Options,
} from 'react-native-image-picker';

import InputField from '../../../components/InputField/InputField';
import DescriptionField from '../../../components/DescriptionField/DescriptionField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {ADD_NEW_GUIDE, HOME} from '../../../helpers/RoutesName';
import {GetUserGuides} from '../../../services/GuideService';
import {useAppSelector} from '../../../redux/Hooks';
import {useNotification} from '../../../contextApi/ApiContext';
import {useFocusEffect} from '@react-navigation/native';

import {UploadImage, CreateReport} from '../../../services/ReportService';

const Add: React.FC = ({navigation}) => {
  const user = useAppSelector((state: any) => state.user.value.user);
  const {showLoading, showError, showSuccess} = useNotification();
  const [guides, setGuides] = useState<any>([]);

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);

  // Set the header title dynamically based on the selected item
  useLayoutEffect(() => {
    const addButtonVisible = guides.length > 0;

    navigation.setOptions({
      headerRight: () =>
        addButtonVisible && (
          <TouchableOpacity
            onPress={onHandleAddNewGuide}
            style={styles.addButton}>
            <Image
              source={require('../../../assets/icons/plus.png')}
              style={styles.plus}
            />
            <Text style={styles.addButtonText}>Guide</Text>
          </TouchableOpacity>
        ),
    });
  }, [guides]);

  useFocusEffect(
    useCallback(() => {
      fetchUserGuides();
      return () => {};
    }, []),
  );

  useEffect(() => {
    fetchUserGuides();
  }, []);

  const fetchUserGuides = async () => {
    showLoading(true);
    const response = await GetUserGuides(user._id);
    showLoading(false);
    if (response.success) {
      const data: any = [];
      response.data.map((item: any) => {
        data.push({
          ...item,
          isSelected: false,
        });
      });

      setGuides(data);
    } else {
      showError(response.message);
    }
  };

  const onChangeName = (text: string) => {
    setName(text);
  };

  const onChangeDescription = (text: string) => {
    setDescription(text);
  };

  const onHandleCheckUnCheck = (item: any) => {
    // Create a copy of the guides array to avoid mutating the state directly
    const updatedGuides = guides.map((guide: any) => {
      if (guide === item) {
        return {
          ...guide,
          isSelected: true,
        };
      }
      return {
        ...guide,
        isSelected: false,
      };
    });

    setGuides(updatedGuides);
  };

  const onHandleAddNewGuide = () => {
    navigation.navigate(ADD_NEW_GUIDE);
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
        const url: any = await UploadImage(response?.assets[0]);
        console.log(url);
        setImages([...images, url]);
        showLoading(false);
      }
    });
  };

  const onRemoveImage = (itemIndex: number) => {
    // Create a new array without the item to be removed
    const newImages = [...images];
    newImages.splice(itemIndex, 1);

    // Update the state with the new array
    setImages(newImages);
  };

  const onCreateReport = async () => {
    const selectedGuides: string[] = [];
    guides.map((item: any) =>
      item.isSelected ? selectedGuides.push(item._id) : '',
    );
    const body = {
      images,
      title: name,
      description,
      guides: selectedGuides,
      places: 'no place',
      createdBy: user._id,
      createdAt: new Date(),
    };

    console.log(body);
    showLoading(true);
    const response = await CreateReport(body);
    showLoading(false);
    console.log(response);

    if (response.success) {
      setImages([]);
      setName('');
      setDescription('');
      fetchUserGuides();
      showSuccess('Report Created Successfully');
      navigation.navigate(HOME);
    } else {
      showError(response.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imagesContainer}>
          {images.length > 0 &&
            images.map((item, index) => (
              <View key={index}>
                <Image source={{uri: item}} style={styles.image} />
                <TouchableOpacity
                  onPress={() => onRemoveImage(index)}
                  style={styles.crossButton}>
                  <Image
                    source={require('../../../assets/icons/cross.png')}
                    style={styles.crossIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
          {images.length < 3 && (
            <TouchableOpacity
              onPress={onUploadImage}
              style={styles.addImageButton}>
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </TouchableOpacity>
          )}
        </View>

        <InputField
          title="Name"
          placeholderText="Name"
          value={name}
          onChange={text => onChangeName(text)}
        />
        <DescriptionField
          title="Name"
          placeholderText="Describe your report..."
          value={description}
          onChange={text => onChangeDescription(text)}
        />

        <View style={styles.addPlaceContainer}>
          <Text style={styles.addPlaceText}>Guide</Text>
        </View>

        {guides.length > 0 ? (
          guides.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => onHandleCheckUnCheck(item)}
                key={item._id}
                style={styles.guideContainer}>
                <Text style={styles.guideTitle}> {item.title}</Text>
                {item.isSelected ? (
                  <Image
                    source={require('../../../assets/icons/radioActive.png')}
                    style={styles.icon}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/icons/radioInActive.png')}
                    style={styles.icon}
                  />
                )}
              </TouchableOpacity>
            );
          })
        ) : (
          <TouchableOpacity
            onPress={onHandleAddNewGuide}
            style={styles.addNewGuideContainer}>
            <Text style={styles.addNewGuideText}>Add New Guide</Text>
          </TouchableOpacity>
        )}

        <View style={styles.addPlaceContainer}>
          <Text style={styles.addPlaceText}>Places</Text>
        </View>

        <GooglePlacesAutocomplete
          placeholder="Search places here"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data.description);
          }}
          textInputProps={{
            placeholderTextColor: 'black',
          }}
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            textInputContainer: styles.textInputContainer,
          }}
          query={{
            key: 'AIzaSyBF5yA4Db8h0Vpu6243pOCP77I7sFBiuaE',
            language: 'en',
          }}
          listViewDisplayed={false} // Hide the list view initially
          renderRow={rowData => (
            <Text style={styles.rowText}>{rowData.description}</Text> // Apply the custom text style to each suggestion item
          )}
        />
      </ScrollView>

      <PrimaryButton title="Create" onPress={onCreateReport} />
    </View>
  );
};

export default Add;
