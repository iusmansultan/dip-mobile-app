import {StyleSheet} from 'react-native';
import {BLACK, COLOR_SECANDRY} from '../../helpers/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getFontSize } from '../../utils/GetFontSize';
import {REGULAR} from '../../helpers/Colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: wp('4%'),
  },
  logoStyle: {
    width: wp('90%'),
    height: hp('23%'),
    resizeMode: 'contain',
    marginTop: hp('5%'),
  },
  labelText: {
    color: BLACK,
    fontSize: getFontSize(30),
    fontFamily: REGULAR,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    marginTop: 10,
    marginBottom: 15,
  },
  containText: {
    color: COLOR_SECANDRY,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
