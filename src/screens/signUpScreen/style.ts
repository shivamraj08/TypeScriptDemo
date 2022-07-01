import { StyleSheet } from "react-native";
import COLOR from "../../utils/color";

export const styles = StyleSheet.create({
    signUpContainer: {
      flex: 1,
      backgroundColor: 'black',
    },
    createTextStyle: {
      width: 195,
      height: 32,
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: '900',
      marginLeft: 24,
      marginTop: 20,
      color: 'white',
    },
    taglineStyle: {
      fontSize: 14,
      fontWeight: '400',
      width: 145,
      height: 16,
      marginLeft: 24,
      color: 'white',
      marginBottom: 20,
    },
    createButtonStyle: {
      fontSize: 18,
      fontWeight: '900',
      textAlign: 'center',
      color: 'black',
      marginBottom: 30,
      top: 15,
      fontStyle: 'italic',
    },
    createButtonTouchable: {
      backgroundColor: '#44C2E3',
      width: '93%',
      marginLeft: 15,
      borderRadius: 5,
      borderWidth: 1,
    },
    textInputStyle: {
      marginLeft: 20,
      marginRight: 20,
    },
    agreeStyle: {
      color: 'white',
      marginLeft: 15,
      marginBottom: 20,
    },
    checkboxStyle: {
      height: 20,
      width: 20,
    },
    lineStyle: {
      flex: 1,
      height: 1,
      backgroundColor: 'grey',
    },
    orTextStyle: {
      textAlign: 'center',
      color: COLOR.DARK_GREY,
    },
    termsButtonStyle: {
      fontSize: 16,
      fontWeight: '600',
      color: COLOR.BLUE,
      left: 5,
      bottom: 2,
    },
    orViewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 25,
      paddingHorizontal: 18,
    },
    googleButton: {
      height: 50,
      width: '90%',
      top: 20,
      margin: 10,
      borderRadius: 7,
      borderWidth: 1,
      right: 12,
      left: 12,
    },
    alreadyTextStyle: {
      fontSize: 16,
      color: COLOR.WHITE,
      fontWeight: '600',
    },
    signInButtonStyle: {
      fontSize: 18,
      fontWeight: '900',
      color: COLOR.BLUE,
      marginHorizontal: 5,
      bottom: 1,
    },
    lastViewSignIn: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      top: 20,
    },
    backArrowStyle: {
      height: 20,
      width: 20,
      marginLeft: 20,
      marginTop: 10,
    },
    CheckBoxTouchable: {
      height: 20,
      width: 20,
      marginBottom: 10,
      marginLeft: 20,
    },
    AgreeTermsViewStyle: {
      flexDirection: 'row',
    },
    validErrorStyle: {
      color: 'red',
    },
  });
  