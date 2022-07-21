const initialState = {
  Sign_In_Data: [],
};

const SignInReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'signin':
      return {...state, Sign_In_Data: payload};
    default:
      return {...state};
  }
};

export default SignInReducer;
