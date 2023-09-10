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
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'relative',
  },
  imageOverLayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    width: 25,
    height: 25,
    tintColor: WHITE,
  },
  scrollContainer: {
    width: '100%',
    height: '80%',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
});

export default styles;
