import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  COLOR_PRIMARY,
  BLACK,
  DESCRIPTION_TEXT,
  TEXT_INPUT_BACKGROUND,
} from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  labelText: {
    fontSize: 14,
    // fontWeight: '600',
    color: BLACK,
    fontFamily: 'Poppins-SemiBold',
  },
  inputContainer: {
    width: '100%',
    height: 153,
    borderRadius: 12,
    marginTop: 4,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D8DADC',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    color: BLACK,
    fontSize: 14,
    width: '100%',
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
