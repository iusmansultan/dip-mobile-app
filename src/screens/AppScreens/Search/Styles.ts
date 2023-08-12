import {StyleSheet} from 'react-native';
import {
  BLACK,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  WHITE,
} from '../../../helpers/Colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {getFontSize} from '../../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },

  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: heightPercentageToDP('5%'),
    paddingHorizontal: 10,
  },

  activeTab: {
    borderBottomWidth: 1,
    borderBlockColor: BLACK,
    paddingBottom: 5,
  },
  inActiveTab: {
    borderBottomWidth: 1,
    borderBlockColor: 'transparent',
    paddingBottom: 5,
  },
  activeTabText: {
    fontSize: getFontSize(14),
    fontWeight: 'bold',
    color: BLACK,
  },
  inActiveTabText: {
    fontSize: getFontSize(14),
    color: BLACK,
  },

  flatList: {
    width: '100%',
  },
});

export default styles;
