import {StyleSheet, Platform} from 'react-native';
import {
  BLACK,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  WHITE,
} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 30,
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Platform.OS === 'ios' ? '10%' : 0,
    marginBottom: 100,
  },
  watchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  iconPrimary: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR_PRIMARY,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: COLOR_SECANDRY,
  },
  textPrimary: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: COLOR_PRIMARY,
  },
  targetedNumberText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    color: COLOR_SECANDRY,
  },
  numberText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: WHITE,
  },
  selectedText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: COLOR_SECANDRY,
  },
  inputNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    backgroundColor: WHITE,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 250,
  },
  inputNumbers: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  targetedNumberContainer: {
    width: '20%',
    backgroundColor: '#CACACA',
    height: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: WHITE,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
});

export default styles;
