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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    // justifyContent: 'center',
  },
  contentContainerStyle: {},

  image: {
    width: wp('100%'),
    height: 400,
    overflow: 'hidden',
  },
  userName: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: getFontSize(14),
    color: BLACK,
    fontFamily: SEMIBOLD,
  },
  userTopContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: getFontSize(13),
    color: BLACK,
    fontFamily: MEDIUM,
  },

  createdAt: {
    fontSize: getFontSize(10),
    color: '#9c9c9c',
    fontFamily: REGULAR,
    marginTop: 1,
  },
  description: {
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
    fontSize: getFontSize(12),
    color: BLACK,
    fontFamily: REGULAR,
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  divider: {
    width: wp('100%'),
    height: 1,
    backgroundColor: '#dbdbdb',
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.4,
  },
  commentContainer: {
    width: wp('100%'),
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    minHeight: hp('10%'),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  commentInputContainer: {
    width: '85%',
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: WHITE,
    borderColor: '#dbdbdb',
  },
  sendIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
});

export default styles;
