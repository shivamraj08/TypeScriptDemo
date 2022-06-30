import React from 'react';
import NavigationScreen from './src/routes';
import EditProfileScreen from './src/screens/editProfileScreen';
import CongratsModal from './src/screens/modals/congratsModal';
import SignUpScreen from './src/screens/signUpScreen';
import VerificationScreen from './src/screens/verificationCode';


export default function App() {
  return (
    // <NavigationScreen/>
    // <EditProfileScreen/>
    <CongratsModal/>
  );
}
