import axios from 'axios';

export const sportsApi = (verify_Otp_Data: any) => {
  const token = verify_Otp_Data.data.authToken;
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
export const zipCodeAction = (text: string, page: number) => {
  console.log('tex', text, 'page:', page);
  return (dispatch: any, getState: any) => {
    const {
      EditProfileReducer: {zipCodeData},
    } = getState();
    console.log('masudgfuayshdff', zipCodeData);

    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    
    $https
      .get(`zipcode-list?page=${page}&limit=15&search=${text}`)
      .then(resp => {
        console.log('zipcode resp', resp);
        if (page > 1 && zipCodeData?.length > 0) {
          dispatch({
            type: 'SET_ZIPCODE',
            payload: [...zipCodeData, ...resp.data.data.result],
          });
        } else dispatch({type: 'SET_ZIPCODE', payload: resp.data.data.result});
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};
