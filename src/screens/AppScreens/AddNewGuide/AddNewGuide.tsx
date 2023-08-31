import {View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';

import InputField from '../../../components/InputField/InputField';
import DescriptionField from '../../../components/DescriptionField/DescriptionField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {CreateNewGuide} from '../../../services/GuideService';
import {useNotification} from '../../../contextApi/ApiContext';
import {useAppSelector} from '../../../redux/Hooks';

const AddNewGuide: React.FC = ({navigation}) => {
  const {showLoading, showSuccess, showError} = useNotification();
  const user = useAppSelector((state: any) => state.user.value.user);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDisbaled, setIsDisabled] = useState<boolean>(true);

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

  const onSaveGuide = async () => {
    console.log(user);
    const body = {
      title,
      description,
      createdAt: new Date(),
      createdBy: user._id,
    };
    console.log('body=>', body);
    showLoading(true);
    const response = await CreateNewGuide(body);
    showLoading(false);
    if (response.success) {
      showSuccess(response.message);
      navigation.goBack();
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

      <PrimaryButton
        title="Save"
        isDisbaled={isDisbaled}
        onPress={onSaveGuide}
      />
    </View>
  );
};

export default AddNewGuide;
