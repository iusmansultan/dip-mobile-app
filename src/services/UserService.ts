import AxiosCall from '../utils/AxiosCall';
import {BASE_URL, API_ENDPOINTS} from '../helpers/Config';

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

const SignInUser = async (data: any) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.USER.SIGNIN_USER;
    const response = await AxiosCall({url: url, method: 'post', data: data});
    console.log(response);

    return {
      success: true,
      message: 'SignIn Successfully',
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

export {CreateUser, SignInUser, VerifyUser};
