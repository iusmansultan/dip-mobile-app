import {StyleSheet, Platform} from 'react-native';
import {BLACK, COLOR_SECANDRY, WHITE} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // marginTop: Platform.OS === 'ios' ? '10%' : 0,
  },
  labelText: {
    color: '#5E5E5E',
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    width: '80%',
    textAlign: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
  },

  profileImageContianer: {
    width: 120,
    height: 120,
    borderRadius: 150,
    backgroundColor: COLOR_SECANDRY,
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 150,
    resizeMode: 'cover',
  },
  userNameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: COLOR_SECANDRY,
    marginTop: 10,
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: WHITE,
    width: 150,
    height: 40,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: '10%',

    shadowColor: '#9e9e9e',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pointText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLOR_SECANDRY,
  },
  pointTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: COLOR_SECANDRY,
  },

  actionTileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 10,
    height: 58,
    paddingHorizontal: 10,
    marginTop: '4%',

    shadowColor: '#9e9e9e',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  arrowIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  flexStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
  },
  actionTileText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: COLOR_SECANDRY,
  },
  deleteActionTileText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#E64646',
  },
});

export default styles;
