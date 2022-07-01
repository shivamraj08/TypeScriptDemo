import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EditProfileScreen from '../screens/editProfileScreen';
import SignUpScreen from '../screens/signUpScreen';
import VerificationScreen from '../screens/verificationCode';
import TermsOfUse from '../screens/termsOfUseScreen';

export default function NavigationScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignupProfile" component={SignUpScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="OtpVerify" component={VerificationScreen} />
        <Stack.Screen name="Terms" component={TermsOfUse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
