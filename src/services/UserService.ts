import AxiosCall from '../utils/AxiosCall';
import {BASE_URL, API_ENDPOINTS} from '../helpers/Config';
import storage from '@react-native-firebase/storage';

const CreateUser = async (data: any) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.USER.CREATE_USER;
    const response = await AxiosCall({url: url, method: 'post', data: data});
    console.log(response);

    if (response.success) {
      return {
        success: true,
        message: 'Please verify your email',
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
const UpdateUserProfile = async (data: any, id: string) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.USER.UPDATE_PROFILE + '/' + id;
    const response = await AxiosCall({url: url, method: 'post', data: data});
    console.log(response);

    if (response.success) {
      return {
        success: true,
        message: 'Profile updated successfully!',
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
const VerifyUser = async (data: any) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.USER.VARIFY_USER;
    const response = await AxiosCall({url: url, method: 'post', data: data});
    console.log(response);

    if (response.success) {
      return {
        success: true,
        message: 'Verification Done, Please Sign IN.',
        data: response,
      };
    }

    return {
      success: false,
      message: response.message,
      data: response.res,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};

const SignInUser = async (data: any) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.USER.SIGNIN_USER;
    const response = await AxiosCall({url: url, method: 'post', data: data});
    console.log(response);

    return {
      success: true,
      message: 'SignIn Successfully',
      data: response.res,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};
const UploadUserProfileImage = async (image: any, id: string) => {
  try {
    let imageRef = storage().ref(`serviceImages/${id}`);
    await imageRef.putFile(image?.uri);
    return {
      success: true,
      message: 'Image uploaded successfully!',
      url: await imageRef.getDownloadURL(),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};


const GetAllUser = async () => {
  try {
    const url = BASE_URL + API_ENDPOINTS.USER.GET_ALL_USER;
    const response = await AxiosCall({url: url, method: 'get', data: ''});
    console.log(response);

    return {
      success: true,
      message: 'SignIn Successfully',
      data: response.res,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};

export {
  CreateUser,
  SignInUser,
  VerifyUser,
  UploadUserProfileImage,
  UpdateUserProfile,
  GetAllUser,
};
