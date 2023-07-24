import {StyleSheet} from 'react-native';
import {
  BLACK,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  WHITE,
} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  scrollViewContainer: {
    width: '100%',
    height: '55%',
    marginBottom: 20,
  },
  labelText: {
    color: COLOR_SECANDRY,
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
    marginTop: 34,
  },
  desciptionText: {
    color: '#A5A5A5',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 34,
  },
  topIconContainer: {
    backgroundColor: WHITE,
    padding: 15,
    borderRadius: 60,
    resizeMode: 'contain',
    marginTop: '5%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  topIcon: {
    width: 40,
    height: 40,
  },
  packegeContainer: {
    width: '100%',
    height: 132,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  packegeContainerActive: {
    width: '100%',
    height: 132,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#FFF2E7',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
  },
  packageTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    textTransform: 'uppercase',
    color: COLOR_SECANDRY,
  },
  packageOptionsContainer: {
    padding: 5,
  },

  optionTile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    marginBottom: 2,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: COLOR_SECANDRY,
  },

  optionTitleText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: COLOR_SECANDRY,
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: COLOR_SECANDRY,
    marginBottom: 30,
  },
  radioButtonOuterActive: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonOuterInActive: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#B3B3B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInnerInActive: {
    width: 11,
    height: 11,
    borderRadius: 40,
    backgroundColor: 'transparent',
  },
  radioButtonInnerActive: {
    width: 11,
    height: 11,
    borderRadius: 40,
    backgroundColor: COLOR_PRIMARY,
  },
});

export default styles;
