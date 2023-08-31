import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import InputField from '../../../components/InputField/InputField';
import DescriptionField from '../../../components/DescriptionField/DescriptionField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { ADD_NEW_GUIDE } from '../../../helpers/RoutesName';

const Add: React.FC = ({navigation}) => {
  const guides: any = [
    // {
    //   id: 1,
    //   title: 'Guide 1',
    //   isSelected: false,
    // },
    // {
    //   id: 2,
    //   title: 'Guide 2',
    //   isSelected: false,
    // },
    // {
    //   id: 3,
    //   title: 'Guide 3',
    //   isSelected: false,
    // },
    // {
    //   id: 4,
    //   title: 'Guide 4',
    //   isSelected: false,
    // },
  ];

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

        <InputField title="Name" placeholderText="Name" onChange={() => {}} />
        <DescriptionField
          title="Name"
          placeholderText="Describe your report..."
          onChange={() => {}}
        />

        <View style={styles.addPlaceContainer}>
          <Text style={styles.addPlaceText}>Guide</Text>
        </View>

        {guides.length > 0 ? (
          guides.map(item => {
            return (
              <View key={item.id} style={styles.guideContainer}>
                <Text> {item.title}</Text>
              </View>
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
            key: 'AIzaSyDQYAPCstGpooeRjILWMIosEQFoQ8YnKtk',
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
