import {StyleSheet} from 'react-native';
import {BLACK, COLOR_SECANDRY, WHITE} from '../../../helpers/Colors';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getFontSize } from '../../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: wp('4%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelText: {
    color: BLACK,
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    marginTop: '5%',
    marginBottom: 33,
  },
  forgotPasswordContianer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 30,
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: BLACK,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  containText: {
    color: COLOR_SECANDRY,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  containTextBold: {
    color: COLOR_SECANDRY,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 15,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    marginTop: 10,
    marginBottom: 10,
  },
  orText: {
    color: BLACK,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  divider: {
    backgroundColor: BLACK,
    height: 1,
    width: '44%',
  },
  socialButton: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#D8DADC',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
    paddingHorizontal: 15,
  },
  socialButtonApple: {
    width: '100%',
    backgroundColor: BLACK,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#D8DADC',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
    paddingHorizontal: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  iconApple: {
    width: 20,
    height: 20,
    tintColor: WHITE,
  },
  socialText: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(14),
    color: BLACK,
  },
  socialTextApple: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(14),
    color: WHITE,
  },
  scrollView: {
    height: heightPercentageToDP('100%'),
    backgroundColor: WHITE,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default styles;
