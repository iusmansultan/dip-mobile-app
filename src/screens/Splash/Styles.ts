import {StyleSheet} from 'react-native';
import {BLACK, COLOR_SECANDRY} from '../../helpers/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getFontSize } from '../../utils/GetFontSize';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: wp('2%'),
  },
  logoStyle: {
    width: wp('90%'),
    height: hp('20%'),
    resizeMode: 'contain',
    marginTop: hp('5%'),
  },
  labelText: {
    color: BLACK,
    fontSize: getFontSize(40),
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
