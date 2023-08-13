import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLACK, COLOR_PRIMARY, MEDIUM, WHITE} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  postCard: {
    height: 60,
    width: '100%',
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: WHITE,

    borderWidth: 1,
    borderColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  icon: {
    width: 15,
    height: 15,
  },
  userName: {
    fontSize: getFontSize(14),
    color: BLACK,
    fontFamily: MEDIUM,
    width: '70%',
    
  },

  profileImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 40,
  },

  flexStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
});

export default styles;
