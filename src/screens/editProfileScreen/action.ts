import axios from 'axios';
import { useDispatch } from 'react-redux';

export const sportsApi = (verify_Otp_Data: any) => {
  const token = verify_Otp_Data.data.authToken;
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
  // console.log('tex', text, 'page:', page);
  // const token = verify_Otp_Data.data.authToken;
  // const {authToken} = verify_Otp_Data;
  return (dispatch: any, getState: any) => {
    const {
      EditProfileReducer: {zipCodeData},
    } = getState();
    // console.log('masudgfuayshdff', zipCodeData);

    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    // $https.defaults.headers.common.Authorization = `Bearer ${token}`;
    $https
      .get(`zipcode-list?page=${page}&limit=15&search=${text}`)
      .then(resp => {
        // console.log('zipcode resp', resp);
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

export const completeProfileAction = (
  authToken: string,
  username: string,
  id: string,
  zipcode: string,
  name: string,
  bio:string,
  // userType: string,
) => {
  // console.log(username, id, zipcode, name);
  return (dispatch:any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .post(
        `https://fivestardevapi.appskeeper.in/api/v1/user/complete-profile`,
        {
          username,
          id,
          zipcode,
          name,
          userType: 1,
          personalDetails: {
            "height": {
              "feet": 1,
              "inch": 2
            },
            "dob": "2021-12-23T08:52:43.725+00:00",
            "weight": 23,
            "bio": bio
          },
        },
      )
      .then(response => {
        // console.log('complete profile success ++++', response.data);
        dispatch({type:'SET_COMPLETE',payload:response?.data})
      })
      .catch(error => {
        console.log('Error profile', error);
      });
  };
};

export const checkUserNameAction = (
  authToken: any,
  text: any,
  callback: Function,
  errorcallback: Function,
) => {
  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get(
        `https://fivestardevapi.appskeeper.in/api/v1/user/check-username?username=${text}`,
      )
      .then(response => {
        // console.log('success check username', response);
        callback(response);
      })
      .catch(error => {
        // console.log('check username api is not getting data', error);
        errorcallback(error);
      });
  };
};
