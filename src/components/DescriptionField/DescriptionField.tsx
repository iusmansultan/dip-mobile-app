import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import show from '../../assets/icons/show.png';
import hidden from '../../assets/icons/hidden.png';

type DescriptionFieldProps = {
  title: string;
  placeholderText: string;
  onChange: (text: string) => void;
};

const DescriptionField: React.FC<DescriptionFieldProps> = ({
  title,
  placeholderText,
  onChange,
}) => {


  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholderText}
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
