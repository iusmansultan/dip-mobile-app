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

import InputField from '../../../components/InputField/InputField';
import DescriptionField from '../../../components/DescriptionField/DescriptionField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {ADD_NEW_GUIDE} from '../../../helpers/RoutesName';
import {GetUserGuides} from '../../../services/GuideService';
import {useAppSelector} from '../../../redux/Hooks';
import {useNotification} from '../../../contextApi/ApiContext';
import {useFocusEffect} from '@react-navigation/native';

const Add: React.FC = ({navigation}) => {
  const user = useAppSelector((state: any) => state.user.value.user);
  const {showLoading, showError} = useNotification();
  const [guides, setGuides] = useState<any>([]);

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [place, setPlace] = useState<string>('');

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

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imagesContainer}>
          <View style={styles.addImageButton}>
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </View>
        </View>

        <InputField
          title="Name"
          placeholderText="Name"
          onChange={text => onChangeName(text)}
        />
        <DescriptionField
          title="Name"
          placeholderText="Describe your report..."
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

      <PrimaryButton title="Share" onPress={() => {}} />
    </View>
  );
};

export default Add;
