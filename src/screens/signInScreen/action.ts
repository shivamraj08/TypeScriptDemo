import axios from 'axios';
export function Api_SignIn(
  phoneNo: any,
  password: string,
  callback: Function,
  ErrorCallback: Function,
) {
  return (dispatch: any, getState: any) => {
    axios
      .post('https://fivestardevapi.appskeeper.in/api/v1/user/login', {
        password,
        countryCode: '+1',
        phoneNo,
      })
      .then(resp => {
        console.log('response Sign In ', resp);
        dispatch = {type: 'signin', payload: resp.data.data};
        callback(resp);
      })
      .catch(err => {
        console.log('error Sign In', err);
        ErrorCallback(err);
      });
  };
}
