import {StyleSheet} from 'react-native';
import {
  BLACK,
  COLOR_SECANDRY,
  WHITE,
  BOLD,
  MEDIUM,
  REGULAR,
  SEMIBOLD,
  COLOR_PRIMARY,
} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  image: {
    width: '100%',
    height: '30%',
    resizeMode:'center'
  },
  labelText: {
    color: BLACK,
    fontSize: 25,
    fontFamily: MEDIUM,
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
    fontFamily: REGULAR,
  },
  containText: {
    color: COLOR_SECANDRY,
    fontSize: 12,
    fontFamily: MEDIUM,
  },
  containTextBold: {
    color: COLOR_SECANDRY,
    fontSize: 12,
    fontFamily: SEMIBOLD,
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
    marginTop: 10,
  },
  orText: {
    color: COLOR_SECANDRY,
    fontFamily: REGULAR,
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
    fontFamily: REGULAR,
    fontSize: 12,
    color: COLOR_SECANDRY,
  },

  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: 20,
    marginBottom: 20,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    borderRadius: 10,
  },
  focusCell: {
    backgroundColor: COLOR_PRIMARY,
    color: WHITE,
    borderRadius: 10,
  },
});

export default styles;
