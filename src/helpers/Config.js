// export const BASE_URL = 'http://localhost:8080/api/v1/dip/'; //for dev changes
export const BASE_URL = 'https://dip-backend-a6135d2281b9.herokuapp.com/api/v1/dip/'; //for live

export const API_ENDPOINTS = {
  USER: {
    CREATE_USER: 'user/createUser',
    SIGNIN_USER: 'user/signin',
    VARIFY_USER: 'user/varify',
    FORGOT_PASSWORD: 'user/forgotpassword',
    UPDATE_PROFILE: 'user/update',
    DELETE_USER: 'user/delete',
    GET_ALL_USER: 'user/getAllUser',
  },
  GUIDE: {
    CREATE_NEW_GUIDE: 'guide/createGuide',
    GET_USER_GUIDE: 'guide/userGuide',
    GET_ALL_GUIDE: 'guide/allGuide',
  },
  REPORTS: {
    CREATE_NEW_REPORT: 'reports/createReport',
    GET_ALL_REPORT: 'reports/getAllReport',
    GET_USER_REPORT: 'reports/getUserReport/',
  },
};
