import AxiosCall from '../utils/AxiosCall';
import {BASE_URL, API_ENDPOINTS} from '../helpers/Config';
import storage from '@react-native-firebase/storage';


const UploadImage = async (image:any) => {
  try {
      let imageName = generateRandomImageName();
      let imageRef = storage().ref(`serviceImages/${imageName}`);
      await imageRef.putFile(image?.uri);
      return await imageRef.getDownloadURL();

    
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};


function generateRandomImageName() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${random}.jpg`;
}

export {UploadImage};
