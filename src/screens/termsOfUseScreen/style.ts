import { StyleSheet } from "react-native";
import COLOR from "../../utils/color";
import { vh,vw } from "../../utils/dimensions";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: COLOR.BLACK,
      flex: 1,
    },
    backArrowStyle: {
      height: vh(20),
      width: vw(12),
    },
    headerTopView: {
      flexDirection: 'row',
      marginHorizontal: vw(15),
    },
    termsTextStyle: {
      fontSize: 24,
      width: vw(164),
      height: vh(22),
      color: COLOR.WHITE,
      fontWeight: '800',
      paddingHorizontal: vw(15),
      bottom: vh(5),
    },
    para1TextStyle: {
      height: vh(240),
      width: vw(328),
      color: COLOR.WHITE,
      paddingTop: 5,
      fontSize: 16,
      marginTop: vh(34),
      fontFamily: 'Helvetica Neue',
    },
    para2TextStyle: {
      width: vw(328),
      height: vh(430),
      color: COLOR.WHITE,
      fontSize:15
    },
    paragraphView: {
      marginHorizontal: vw(20),
    },
  });