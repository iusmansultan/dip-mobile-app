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

const CreateReport = async (data: any) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.REPORTS.CREATE_NEW_REPORT;
    const response = await AxiosCall({url: url, method: 'post', data: data});

    if (response.success) {
      return {
        success: true,
        message: 'Report created successfully!',
        data: response,
      };
    }

    return {
      success: false,
      message: response.message,
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};
const GetAllReports = async () => {
  try {
    const url = BASE_URL + API_ENDPOINTS.REPORTS.GET_ALL_REPORT;
    const response = await AxiosCall({url: url, method: 'get'});

    if (response.success) {
      return {
        success: true,
        message: 'All Reports',
        data: response.data,
      };
    }

    return {
      success: false,
      message: response.message,
      data: response,
    };
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

export {UploadImage, CreateReport, GetAllReports};
