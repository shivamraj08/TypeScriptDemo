import {combineReducers} from 'redux';
import EditProfileReducer from '../screens/editProfileScreen/reducer';
import SignUpReducer from '../screens/signUpScreen/reducer';
import VerifyOtpReducer from '../screens/verificationCode/reducer';
import SignInReducer from '../screens/signInScreen/reducer';
import HomeScreenReducer from '../screens/home/homeScreen/reducer';
import SearchScreenReducer from '../screens/home/searchScreen/reducer';

const rootReducer = combineReducers({
  SignUpReducer,
  VerifyOtpReducer,
  EditProfileReducer,
  SignInReducer,
  HomeScreenReducer,
  SearchScreenReducer,
});

export default rootReducer;
