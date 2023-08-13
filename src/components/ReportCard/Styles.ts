import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  BLACK,
  COLOR_PRIMARY,
  WHITE,
  MEDIUM,
  SEMIBOLD,
  REGULAR,
} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  postCard: {
    height: 300,
    width: wp('92%'),
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },

  image: {
    width: wp('91%'),
    height: 200,
    overflow: 'hidden',
  },
  userName: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: getFontSize(16),
    color: BLACK,
    fontFamily: SEMIBOLD,
  },
  description: {
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
    fontSize: getFontSize(14),
    color: BLACK,
    fontFamily: REGULAR,
  },
  imageContainer: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default styles;
