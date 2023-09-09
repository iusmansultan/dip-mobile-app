import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import show from '../../assets/icons/show.png';
import hidden from '../../assets/icons/hidden.png';
import { BLACK } from '../../helpers/Colors';

type InputFieldProps = {
  title: string;
  placeholderText: string;
  onChange: (text: string) => void;
  isSecureText?: boolean;
  value?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  title,
  placeholderText,
  onChange,
  isSecureText = false,
  value,
}) => {
  const [isShow, setIshow] = useState<boolean>(true);

  const togglePasswordVisibilty = () => {
    setIshow(!isShow);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={title}
          placeholderTextColor={BLACK}
          onChangeText={(text: string) => onChange(text)}
          style={styles.input}
          secureTextEntry={isSecureText ? isShow : false}
          autoCapitalize="none"
          value={value}
        />

        {isSecureText && (
          <TouchableOpacity onPress={togglePasswordVisibilty}>
            {isShow ? (
              <Image source={show} style={styles.visibilityIcon} />
            ) : (
              <Image source={hidden} style={styles.visibilityIcon} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
