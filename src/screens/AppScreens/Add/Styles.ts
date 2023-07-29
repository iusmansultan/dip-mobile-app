import {StyleSheet, Platform} from 'react-native';
import {BLACK, COLOR_SECANDRY, WHITE} from '../../../helpers/Colors';
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
    gap: 10,
  },
  inActiveText: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(20),
    color: BLACK,
  },
  activeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: getFontSize(20),
    color: BLACK,
    textDecorationLine: 'underline',
  },
  
  containerList: {
    width: '100%',
  },

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
