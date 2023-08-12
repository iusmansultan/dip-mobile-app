import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import show from '../../assets/icons/show.png';
import hidden from '../../assets/icons/hidden.png';
import {BLACK} from '../../helpers/Colors';

type SearchFieldProps = {
  placeholderText: string;
  onChange: (text: string) => void;
  isSecureText?: boolean;
};

const SearchField: React.FC<SearchFieldProps> = ({
  placeholderText,
  onChange,
  isSecureText = false,
}) => {
  const [isShow, setIshow] = useState<boolean>(true);

  const togglePasswordVisibilty = () => {
    setIshow(!isShow);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={BLACK}
          onChangeText={(text: string) => onChange(text)}
          style={styles.input}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default SearchField;
