import axios from 'axios';

const Api_SignUp = (
  name: any,
  email: any,
  password: any,
  phoneNo: any,
  callback: Function,
  errorCallback: Function,
) => {
  return (dispatch: any, getState: any) => {
    axios
      .post('https://fivestardevapi.appskeeper.in/api/v1/user/signup', {
        name: name,
        email: email,
        password: password,
        countryCode: '+1',
        phoneNo: phoneNo,
      })
      .then(resp => {
        dispatch({type: 'Sign_up_Data', payload: resp.data.data});

        console.log('data is here', resp.data.data);
        callback(resp);
      })
      .catch(error => {
        errorCallback(error);
        console.log('error is here', error);
      });
  };
};
export default Api_SignUp;
