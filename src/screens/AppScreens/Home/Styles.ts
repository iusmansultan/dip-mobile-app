import {StyleSheet} from 'react-native';
import {BLACK, COLOR_SECANDRY} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  labelText: {
    color: BLACK,
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    marginTop: 80,
    marginBottom: 170,
  },

  buttonContainer: {
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

  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: COLOR_SECANDRY,
  },
});

export default styles;
