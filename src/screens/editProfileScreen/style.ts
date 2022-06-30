import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor:'black',
    },
    imgContainer: {
      height: 310,
      width: 368,
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center',
    },
    imgCover: {
      width: 358,
      height: 218,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'white',
      bottom: 30,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgProfile: {
      width: 101,
      height: 101,
      borderWidth: 1,
      borderColor: 'white',
      bottom: 20,
      borderRadius:3
    },
    imgProfileSelected: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius:3
    },
    header: {
      fontSize: 28,
      fontWeight: '900',
      color: 'white',
      marginLeft: 15,
      marginTop:40,
      fontStyle: 'italic',
    },
    edit: {
      height: 45,
      width: 30,
      justifyContent: 'center',
      position: 'absolute',
      right: 10,
      top: 10,
    },
    editImageStyle: {
      height: 20,
      width: 18,
      resizeMode: 'contain',
    },
    RightArrowImageStyle: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    calendarImageStyle: {
      height: 18,
      width: 20,
      resizeMode: 'contain',
    },
    submitText: {
      fontSize: 30,
      fontWeight: '400',
      backgroundColor: 'black',
    },
    body: {
      borderRadius: 1,
      borderWidth: 1,
    },
    cameraImg: {
      height: 26,
      position: 'absolute',
      width: 26,
      resizeMode: 'contain',
      alignSelf: 'center',
      opacity: 0.6,
    },
    profileCameraImg: {
      height: 22,
      width: 22,
      position:'absolute',
      alignSelf: 'center',
      marginTop: 39,
      opacity: 0.6,
    },
    selectView: {
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'white',
      marginTop: 10,
      flexDirection: 'row',
      height: 48,
      marginBottom: 20,
      justifyContent:'space-between',
      paddingHorizontal: 18,
      alignItems: 'center',
      paddingVertical: 10, 

    },
    selectIdentityText:{
      color: 'white', 
      fontSize: 16,
    },
    selectedCoverImage:{
      width: 358,
      height: 218,
      borderWidth: 1,
      borderRadius:5,
      borderColor: 'white',
    },
    touchableImagePickerStyle:{
      position: 'absolute',
      top: 190,
      left: 40,
    },
    customTextView:{
      marginLeft:15, 
      marginRight:15,
    },
    SubmitButtonStyle: {
      // fontFamily: 'Anek-Latin',
      // fontFamily: 'Times New Roman',
      fontSize: 18,
      fontWeight: '900',
      textAlign: 'center',
      color: 'black',
      marginBottom: 30,
      top: 10,
      fontStyle: 'italic',
    },
    SubmitButtonTouchable: {
      backgroundColor: '#44C2E3',
      width: '93%',
      alignItems:'center',
      borderRadius: 5,
      borderWidth: 1,
      marginHorizontal:15
    },
    ModalViewStyle:{
      marginTop: 2,
      marginBottom: 10
    },
    touchableCalendarStyle: {
      height: 45,
      width: '100%',
      justifyContent: 'center',
      position: 'absolute',
      alignItems:'flex-end',
      paddingRight:19,
      paddingTop:17
    }
  });