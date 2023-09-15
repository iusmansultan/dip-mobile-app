import AxiosCall from '../utils/AxiosCall';
import {BASE_URL, API_ENDPOINTS} from '../helpers/Config';

const CreateComment = async (data: any) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.COMMENTS.CREATE_NEW_COMMENT;
    const response = await AxiosCall({url: url, method: 'post', data: data});

    if (response.success) {
      return {
        success: true,
        message: 'Comment created successfully!',
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

const GetAllComments = async (id: string) => {
  try {
    const url = BASE_URL + API_ENDPOINTS.COMMENTS.GET_ALL_COMMENT + '/' + id;
    const response = await AxiosCall({url: url, method: 'get', data: id});

    if (response.success) {
      return {
        success: true,
        message: 'Your Comments!',
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

const GetAllGuides = async () => {
  try {
    const url = BASE_URL + API_ENDPOINTS.GUIDE.GET_ALL_GUIDE;
    const response = await AxiosCall({url: url, method: 'get', data: ''});

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

export {CreateComment, GetAllComments, GetAllGuides};
