import AxiosCall from '../utils/AxiosCall';
import {BASE_URL, API_ENDPOINTS} from '../helpers/Config';

const CreateNewGuide = async (data: any) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.GUIDE.CREATE_NEW_GUIDE;
    const response = await AxiosCall({url: url, method: 'post', data: data});

    if (response.success) {
      return {
        success: true,
        message: 'Guide created successfully!',
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

const GetUserGuides = async (id: string) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.GUIDE.GET_USER_GUIDE + '/' + id;
    const response = await AxiosCall({url: url, method: 'get', data: id});

    if (response.success) {
      return {
        success: true,
        message: 'your guides!',
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

export {CreateNewGuide, GetUserGuides};
