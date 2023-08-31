export const BASE_URL = 'http://localhost:8080/api/v1/dip/'; //for dev changes 
// export const BASE_URL = 'https://dip-backend-a6135d2281b9.herokuapp.com/api/v1/dip/'; //for live 

export const API_ENDPOINTS = {
  USER: {
    CREATE_USER: 'user/createUser',
    SIGNIN_USER: 'user/signin',
    VARIFY_USER: 'user/varify',
    FORGOT_PASSWORD: 'user/forgotpassword',
    UPDATE_PROFILE: 'user/update',
    DELETE_USER: 'user/delete',
  },
};
