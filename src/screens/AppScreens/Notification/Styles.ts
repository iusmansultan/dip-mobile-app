import {StyleSheet} from 'react-native';
import {
  BLACK,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  MEDIUM,
  REGULAR,
  WHITE,
} from '../../../helpers/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {getFontSize} from '../../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationTile: {
    // height: 50,
    width: wp('100%'),
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR_PRIMARY,
  },
  nameTextStyle: {
    fontFamily: MEDIUM,
    color: BLACK,
    fontSize: getFontSize(14),
  },
  messageStyle: {
    fontFamily: REGULAR,
    color: BLACK,
    fontSize: getFontSize(12),
  },
  noNotificationText: {
    fontFamily: REGULAR,
    color: BLACK,
    fontSize: getFontSize(15),
  },
});

export default styles;
