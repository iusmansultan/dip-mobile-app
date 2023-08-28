import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLACK} from '../../helpers/Colors';

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
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
});

export default styles;
