import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Styles';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  isDisbaled?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  isDisbaled = false,
}) => {
  return (
    <TouchableOpacity
      style={isDisbaled ? styles.disabledButton : styles.button}
      onPress={isDisbaled ? () => {} : onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
