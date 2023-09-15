import {StyleSheet, Platform} from 'react-native';
import {
  BLACK,
  COLOR_SECANDRY,
  REGULAR,
  SEMIBOLD,
  WHITE,
} from '../../../helpers/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getFontSize} from '../../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  headerContainer: {
    height: Platform.OS === 'ios' ? hp('10%') : hp('7%'),
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    backgroundColor: WHITE,
    borderColor: '#D9D9D9',
    paddingHorizontal: wp('3%'),
  },
  logo: {
    width: 30,
    height: 30,
  },
  tabButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  inActiveText: {
    fontFamily: REGULAR,
    fontSize: getFontSize(18),
    color: BLACK,
  },
  activeText: {
    fontFamily: SEMIBOLD,
    fontSize: getFontSize(18),
    color: BLACK,
    textDecorationLine: 'underline',
  },

  containerList: {
    width: '100%',
    // padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },

});

export default styles;
