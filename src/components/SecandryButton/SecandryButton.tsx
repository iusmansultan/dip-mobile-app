import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Styles';

type SecandryButtonProps = {
  title: string;
  onPress: () => void;
};

const SecandryButton: React.FC<SecandryButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SecandryButton;
