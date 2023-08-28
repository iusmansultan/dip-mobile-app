import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {LOGIN} from '../../../helpers/RoutesName';
import {VerifyUser} from '../../../services/UserService';

import {NavigationProp} from '@react-navigation/native';
import {useApiContext} from '../../../contextApi/ApiContext';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const OTP = ({route, navigation}) => {
  const {loading, setLoading, error, setError} = useApiContext();
  const {email} = route.params;

  const [otp, setOtp] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onVerify = async () => {
    setLoading(true);
    const body = {
      email: email,
      code: value,
    };
    console.log(body);
    const response = await VerifyUser(body);
    console.log (response)
    setLoading(false);
    if (response.success) {
      Alert.alert('Succcesss');
      navigation.replace(LOGIN)
    } else {
      Alert.alert(
        'Error',
        response.message,
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/vector.png')}
        style={styles.image}
      />

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <PrimaryButton title="Verify" onPress={onVerify} />
    </View>
  );
};

export default OTP;
