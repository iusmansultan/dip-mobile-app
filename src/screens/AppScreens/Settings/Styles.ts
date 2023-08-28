import {Platform, StyleSheet} from 'react-native';
import {
  BLACK,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  MEDIUM,
  REGULAR,
  SEMIBOLD,
  WHITE,
} from '../../../helpers/Colors';
import {getFontSize} from '../../../utils/GetFontSize';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 100,
  },
  profileName: {
    marginTop: 10,
    fontFamily: MEDIUM,
    color: BLACK,
    fontSize: getFontSize(16),
  },
  userNameText: {
    marginTop: 5,
    fontFamily: REGULAR,
    color: COLOR_SECANDRY,
    fontSize: getFontSize(12),
  },
  statsContainer: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: COLOR_SECANDRY,
    borderRadius: 12,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  boxContainer: {
    alignItems: 'center',
  },
  valueText: {
    fontFamily: SEMIBOLD,
    color: BLACK,
    fontSize: getFontSize(14),
  },
  labelText: {
    fontFamily: REGULAR,
    color: BLACK,
    fontSize: getFontSize(12),
  },
  bioText: {
    fontFamily: REGULAR,
    color: BLACK,
    fontSize: getFontSize(13),
    marginTop: 10,
  },

  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: heightPercentageToDP('5%'),
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 20,
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
    color: BLACK,
    fontFamily: SEMIBOLD,
  },
  inActiveTabText: {
    fontSize: getFontSize(14),
    color: BLACK,
    fontFamily: MEDIUM,
  },
  flatList: {
    width: '100%',
  },
});

export default styles;
