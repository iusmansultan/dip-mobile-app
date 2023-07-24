import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLOR_PRIMARY, WHITE, DESCRIPTION_TEXT} from '../../helpers/Colors';

const styles = StyleSheet.create({
  button: {
    width: wp('93%'),
    marginBottom: 15,
    height: 53,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLOR_PRIMARY,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
