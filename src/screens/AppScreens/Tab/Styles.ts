import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLOR_PRIMARY, BLACK} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  tabBarIconsInActive: {
    width: 25,
    height: 25,
    tintColor: BLACK,
  },
  tabBarIconsActive: {
    width: 25,
    height: 25,
    tintColor: COLOR_PRIMARY,
  },
  tabBarLabelActive: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: COLOR_PRIMARY,
  },
  tabBarLabelInActive: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: BLACK,
  },
});

export default styles;
