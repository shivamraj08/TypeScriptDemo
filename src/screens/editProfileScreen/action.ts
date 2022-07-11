import axios from 'axios';

export const sportsApi = (verify_Otp_Data: any) => {
  const token = verify_Otp_Data.verify_Otp_Data.data.authToken;
  //  console.log(token)
  const {authToken} = verify_Otp_Data;
  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${token}`;
    $https
      .get('/user/sports')
      .then(response => {
        console.log('hjkl', response);
        dispatch({type: 'SET_SPORTS', payload: response.data.data});
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};
