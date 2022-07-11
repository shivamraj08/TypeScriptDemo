const initialState = {
  sign_Up_Data: {
    name: '',
    email: '',
    password: '',
    countryCode: '+1',
    phoneNo: '',
  },
};
const SignUpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'Sign_up_Data':
      console.log('signup payload is ', payload);
      return {...state, sign_Up_Data: payload};
    default:
      return state;
  }
};

export default SignUpReducer;
