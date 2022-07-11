import {combineReducers} from 'redux';
import EditProfileReducer from '../screens/editProfileScreen/reducer';
import SignUpReducer from '../screens/signUpScreen/reducer';
import VerifyOtpReducer from '../screens/verificationCode/reducer';
const rootReducer = combineReducers({
  SignUpReducer,
  VerifyOtpReducer,
  EditProfileReducer
});

export default rootReducer;
