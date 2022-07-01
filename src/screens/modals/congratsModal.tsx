// import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {images} from '../../utils/images';

// export default function CongratsModal(props: any) {
//   const {modalOpen, setModalOpen} = props;

//   const modalClosed = () => {
//     setModalOpen(!modalOpen);
//   };

//   return (
//     <View style={{backgroundColor: 'black', flex: 1}}>
//       <View style={{marginTop: 250, marginLeft: 20}}>
//         <Image
//           source={images.like}
//           style={{height: 25, width: 27, marginLeft: 150}}
//         />
//         <TouchableOpacity onPress={modalClosed}>
//           <Image
//             source={images.dialogBox}
//             style={{width: 328, height: 244, position: 'absolute'}}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import {vh, vw} from '../../utils/dimensions';
import COLOR from '../../utils/color';
import {STRINGS} from '../../utils/strings';

export default function CongratsModal(props: any) {
  const {setModalOpen, modalOpen} = props;

  const modalClosed = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.thumbStyleView}>
        <Image source={images.like} style={styles.thumbImgStyle} />
      </View>
      <View style={styles.headerViewStyle}>
        <Text style={styles.congratstext}>{STRINGS.LABEL.CONGRATULATIONS}</Text>
      </View>
      <View style={styles.accountview}>
        <Text style={styles.registeredTextStyle}>
          {STRINGS.LABEL.ACCOUNT_SUCCESSFULLY}
        </Text>
      </View>
      <View style={styles.headerViewStyle}>
        <Text style={styles.registeredTextStyle}>
          {STRINGS.LABEL.REGISTERTED}
        </Text>
      </View>

      <TouchableOpacity style={styles.continueTouchable} onPress={modalClosed}>
        <Text style={styles.continueTextStyle}>{STRINGS.LABEL.CONTINUE}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#121212',
    borderTopWidth: 2,
    borderColor: COLOR.BLUE,
  },
  thumbStyleView: {
    marginTop: vh(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbImgStyle: {
    height: vh(30),
    width: vw(30),
  },
  headerViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(5),
  },
  congratstext: {
    color: COLOR.WHITE,
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  accountview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(12),
  },

  registeredTextStyle: {
    color: COLOR.WHITE,
    fontFamily: 'Helvetica',
    fontSize: 15,
  },
  continueTouchable: {
    marginTop: vh(15),
    backgroundColor: COLOR.BLUE,
    width: vw(280),
    height: vh(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  continueTextStyle: {
    color: COLOR.BLACK,
    fontFamily: 'HelveticaNeue-BoldItalic',
    fontSize: 18,
    fontWeight: '900',
  },
});
