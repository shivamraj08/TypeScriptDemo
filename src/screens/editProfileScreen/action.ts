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
export const zipCodeAction = (text: string) => {
  console.log(text);
  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https
      .get(`/zipcode-list?&search=${text}&page=1`)
      .then(resp => {
        console.log('zipcode resp', resp);
        dispatch({type: 'SET_ZIPCODE', payload: resp.data.data});
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};
