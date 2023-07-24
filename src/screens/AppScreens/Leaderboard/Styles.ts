import {StyleSheet} from 'react-native';
import {
  BLACK,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  WHITE,
} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
    padding: 40,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  labelText: {
    color: COLOR_SECANDRY,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    marginTop: '5%',
    marginBottom: 40,
  },
  positionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 33,
  },

  containerLeft: {
    width: 109,
    height: 113,
    elevation: 4,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#0483B2',
  },
  containerCenter: {
    width: 109,
    height: 159,
    elevation: 4,
    backgroundColor: '#DC6300',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  containerRight: {
    width: 109,
    height: 113,
    elevation: 4,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#017132',
  },

  containerBorder: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: COLOR_SECANDRY,
    opacity: 0.2,
    marginLeft: 10,
    marginRight: 10,
  },
  userDataContainer: {
    backgroundColor: WHITE,
    borderRadius: 12,
    marginTop: 30,
  },
  userTileContianer: {
    width: '100%',
    height: 52,
    backgroundColor: WHITE,
    borderRadius: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userNameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: COLOR_SECANDRY,
  },
  userPointsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLOR_SECANDRY,
  },
  scoreText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLOR_SECANDRY,
  },
  indicatorIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  endContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default styles;
