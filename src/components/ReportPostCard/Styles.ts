import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  BLACK,
  COLOR_PRIMARY,
  WHITE,
  MEDIUM,
  SEMIBOLD,
  REGULAR,
} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  postCard: {
    maxHeight: 360,
    width: wp('92%'),
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: '#D9D9D9',
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

  image: {
    width: wp('92%'),
    height: 200,
    overflow: 'hidden',
  },
  userName: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: getFontSize(14),
    color: BLACK,
    fontFamily: MEDIUM,
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
});

export default styles;
