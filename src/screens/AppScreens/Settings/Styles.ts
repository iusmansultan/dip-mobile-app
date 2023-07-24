import {Platform, StyleSheet} from 'react-native';
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
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  labelText: {
    color: COLOR_SECANDRY,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    marginTop: Platform.OS === 'ios' ? '18%' : '5%',
    marginBottom: 35,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 50,
  },

  avatarContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#ebebeb',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 20,
    height: 20,
  },
  accountInfo: {
    width: '70%',
  },
  title: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  description: {
    color: COLOR_SECANDRY,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  optionTile: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  logoutButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  logoutText: {
    color: COLOR_SECANDRY,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  logout: {
    width: 15,
    height: 15,
  },
});

export default styles;
