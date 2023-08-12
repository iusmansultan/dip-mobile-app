import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLOR_PRIMARY, BLACK, COLOR_SECANDRY} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  labelText: {
    fontSize: getFontSize(14),
    // fontWeight: '600',
    color: COLOR_SECANDRY,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    marginTop: 4,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E4E2',
  },
  input: {
    color: BLACK,
    fontSize: getFontSize(14),
    fontWeight: '500',
    width: '85%',
    height: '100%',
    fontFamily: 'Poppins-Medium',
  },
  visibilityIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
