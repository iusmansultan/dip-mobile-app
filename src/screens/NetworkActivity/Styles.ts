import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  COLOR_PRIMARY,
  WHITE,
  SHEET_DROP_COLOR,
  BLACK,
  DESCRIPTION_TEXT,
} from '../../helpers/Colors';

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Indicator: {
    flex: 1,
    backgroundColor: 'rgba(235, 235, 235, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },

  ErrorContainer: {
    backgroundColor: WHITE,
    alignItems: 'center',
    padding: 10,
    width: '80%',
    borderRadius: 10,

    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  titleText: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: BLACK,
  },
  descriptionText: {
    marginRight: 30,
    marginLeft: 30,
    color: WHITE,
    fontFamily: 'Poppins-Medium',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default styles;
