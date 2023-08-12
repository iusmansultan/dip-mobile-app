import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLACK, COLOR_PRIMARY, WHITE} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  postCard: {
    height: 300,
    width: '100%',
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: WHITE,

    borderWidth: 1,
    borderColor: '#D9D9D9',
  },

  image: {
    width: '100%',
    height: 200,
  },
  userName: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: getFontSize(20),
    color: BLACK,
  },
  description: {
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
    fontSize: getFontSize(14),
    color: BLACK,
  },
});

export default styles;
