import axios from 'axios';
import {Alert} from 'react-native';

const Verify_Otp_Api = (otp: string, userId: string, phoneNo: number) => {
  return (dispatch: any) => {
    axios
      .post('https://fivestardevapi.appskeeper.in/api/v1/user/verify-otp', {
        userId: userId,
        otp: otp,
        countryCode: '+1',
        phoneNo: phoneNo,
      })
      .then(resp => {
        dispatch({type: 'otp_verify', payload: resp.data});
        // console.log('otp data is here', resp.data.data);
      })
      .catch(err => {
        if (err.response.status === 400) {
          Alert.alert('Please Enter Valid OTP');
        }
      });
  };
};
export default Verify_Otp_Api;
