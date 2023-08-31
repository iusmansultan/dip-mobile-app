import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import InputField from '../../../components/InputField/InputField';
import DescriptionField from '../../../components/DescriptionField/DescriptionField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AddNewGuide: React.FC = ({navigation}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDisbaled, setIsDisabled] = useState<boolean>(true);

  const onHandleAddNewGuide = () => {
    navigation.navigate('');
  };

  const onChangeTitle = (text: string) => {
    setTitle(text);
    if (!(text && description)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const onChangeDescription = (text: string) => {
    setDescription(text);
    if (!(title && text)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <InputField
          title="Title"
          placeholderText="Title"
          onChange={text => onChangeTitle(text)}
        />
        <DescriptionField
          title="Name"
          placeholderText="Describe your guide..."
          onChange={text => onChangeDescription(text)}
        />
      </ScrollView>

      <PrimaryButton title="Save" isDisbaled={isDisbaled} onPress={() => {}} />
    </View>
  );
};

export default AddNewGuide;
