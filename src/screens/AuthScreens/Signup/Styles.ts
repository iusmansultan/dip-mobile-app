import {StyleSheet} from 'react-native';
import {BLACK, COLOR_SECANDRY} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
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
    color: COLOR_SECANDRY,
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
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    marginTop: 30,
  },
  orText: {
    color: COLOR_SECANDRY,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  divider: {
    backgroundColor: '#D8DADC',
    height: 1,
    width: '44%',
  },
  socialButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#D8DADC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    gap: 40,
  },
  icon: {
    width: 20,
    height: 20,
  },
  socialText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLOR_SECANDRY,
  },
});

export default styles;
