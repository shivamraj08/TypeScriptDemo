import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EditProfileScreen from '../screens/editProfileScreen';
import SignUpScreen from '../screens/signUpScreen';
import VerificationScreen from '../screens/verificationCode';
import TermsOfUse from '../screens/termsOfUseScreen';
import {STRINGS} from '../utils/strings';
import {StatusBar} from 'react-native';
import SelectScreen from '../screens/selectIdentity';
import SplashScreen from '../screens/splash';
import SignInScreen from '../screens/signInScreen';
import SportScreen from '../screens/sportsScreen';
import ZipCodeScreen from '../screens/zipCodeScreen';

export default function NavigationScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent={true} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={STRINGS.LABEL.SPLASH} component={SplashScreen} />
        <Stack.Screen name={STRINGS.SCREEN.SIGN_IN_SCREEN} component={SignInScreen} />
        <Stack.Screen name={STRINGS.SCREEN.SIGN_UP_PROFILE} component={SignUpScreen} />
        <Stack.Screen name={STRINGS.SCREEN.OTP_VERIFY} component={VerificationScreen} />
        <Stack.Screen name={STRINGS.LABEL.SELECT_IDENTITY_SCREEN} component={SelectScreen} />
        <Stack.Screen name={STRINGS.SCREEN.EDIT_UP_PROFILE} component={EditProfileScreen} />
        <Stack.Screen name={STRINGS.SCREEN.SPORT} component={SportScreen} />
        <Stack.Screen name={STRINGS.SCREEN.TERMS_SCREEN} component={TermsOfUse} />
        <Stack.Screen name="zipCodeScreen" component={ZipCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
