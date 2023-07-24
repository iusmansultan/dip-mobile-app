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
    backgroundColor: '#F5F5F5',
    padding: 30,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  labelText: {
    color: COLOR_SECANDRY,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    marginTop: 45,
    marginBottom: 22,
  },
  decritpionText: {
    color: COLOR_SECANDRY,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
    width: '100%',
  },
  textRow: {
    color: COLOR_SECANDRY,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    width: '60%',
  },
  idText: {
    color: COLOR_SECANDRY,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    width: '100%',
    height: 40,
  },
});

export default styles;
