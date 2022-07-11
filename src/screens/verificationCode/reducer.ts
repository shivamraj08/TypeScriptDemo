const initialState = {
  verify_Otp_Data: {
    userId: '',
    otp: '',
    countryCode: '',
    phoneNo: '',
  },
};

const VerifyOtpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'otp_verify':
      return {...state, verify_Otp_Data: payload};
    default:
      return state;
  }
};

export default VerifyOtpReducer;
