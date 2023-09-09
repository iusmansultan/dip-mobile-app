import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import show from '../../assets/icons/show.png';
import hidden from '../../assets/icons/hidden.png';
import {BLACK} from '../../helpers/Colors';

type DescriptionFieldProps = {
  title: string;
  placeholderText: string;
  onChange: (text: string) => void;
  value?: string;
};

const DescriptionField: React.FC<DescriptionFieldProps> = ({
  title,
  placeholderText,
  onChange,
  value,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={BLACK}
          value={value}
          onChangeText={(text: string) => onChange(text)}
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

export default DescriptionField;
