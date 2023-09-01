import {StyleSheet, Platform} from 'react-native';
import {
  BLACK,
  COLOR_PRIMARY,
  COLOR_SECANDRY,
  MEDIUM,
  REGULAR,
  SEMIBOLD,
  WHITE,
} from '../../../helpers/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getFontSize} from '../../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  imagesContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    gap: 10,
  },
  addImageButton: {
    width: 65,
    height: 87,
    borderWidth: 1.5,
    borderColor: COLOR_PRIMARY,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoText: {
    color: COLOR_PRIMARY,
    fontSize: getFontSize(14),
    fontFamily: MEDIUM,
    textAlign: 'center',
  },
  autocompleteContainer: {
    maxHeight: 200, // Maximum height of the autocomplete container
    width: wp('93%'),
  },
  textInputContainer: {
    backgroundColor: 'transparent',
    height: 50,
  },

  textInput: {
    borderColor: '#D8DADC',
    borderWidth: 1,
    borderRadius: 12,
    height: 55,
    color: BLACK,
    fontFamily: REGULAR,
  },
  rowText: {
    borderRadius: wp('1%'),
    color: BLACK,
    fontFamily: MEDIUM,
  },
  addPlaceContainer: {
    width: '100%',
    height: 30,
    marginTop: 10,
  },
  addPlaceText: {
    fontSize: getFontSize(14),
    fontFamily: MEDIUM,
  },
  scrollContainer: {
    height: '90%',
    width: wp('100%'),
    marginBottom: 10,
  },
  contentContainerStyle: {
    alignItems: 'center',
    padding: 15,
  },
  guideContainer: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guideTitle: {
    fontFamily: MEDIUM,
    fontSize: getFontSize(14),
    color: BLACK,
  },
  icon: {
    width: 20,
    height: 20,
  },
  addNewGuideContainer: {
    width: '100%',
    height: 120,
    borderWidth: 1.5,
    borderColor: COLOR_PRIMARY,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  addNewGuideText: {
    color: COLOR_PRIMARY,
    fontFamily: SEMIBOLD,
    fontSize: getFontSize(15),
  },
  addButton: {
    marginRight: 15,
    backgroundColor: COLOR_PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  plus: {
    width: 12,
    height: 12,
    tintColor: WHITE,
  },
  addButtonText: {
    fontFamily: MEDIUM,
    fontSize: getFontSize(12),
    color: WHITE,
    // marginBottom: -2,
  },
});

export default styles;
