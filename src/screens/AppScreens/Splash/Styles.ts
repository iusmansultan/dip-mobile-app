import {StyleSheet} from 'react-native';
import {
  BLACK,
  BOLD,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  MEDIUM,
  WHITE,
} from '../../../helpers/Colors';
import {getFontSize} from '../../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_PRIMARY,
    padding: 10,
  },
  logo: {
    tintColor: WHITE,
    width: 100,
    height: 100,
  },
  labelText: {
    color: WHITE,
    fontSize: getFontSize(18),
    fontFamily: MEDIUM,
  },
});

export default styles;
