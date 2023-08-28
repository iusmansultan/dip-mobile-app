import axios, {AxiosResponse} from 'axios';

interface ParamsType {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete'; // Adjust with other methods if needed
  data?: any; // Optional request payload
}

const AxiosCall = async ({url, method, data}: ParamsType): Promise<any> => {
  try {
    let response: AxiosResponse;
    console.log(url);

    switch (method) {
      case 'get':
        response = await axios.get(url);
        break;
      case 'post':
        response = await axios.post(url, data);
        break;
      case 'put':
        response = await axios.put(url, data);
        break;
      case 'delete':
        response = await axios.delete(url);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default AxiosCall;
