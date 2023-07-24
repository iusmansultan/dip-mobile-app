import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR_PRIMARY, WHITE } from '../../helpers/Colors';
import { getFontSize } from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginBottom: 30,
    height: 56,
    borderRadius: 8,
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    width: '100%',
    marginBottom: 30,
    height: 56,
    borderRadius: 8,
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  buttonText: {
    color: WHITE,
    fontSize: getFontSize(20),
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
