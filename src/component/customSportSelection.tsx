import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, { useEffect } from 'react';
import {normalize} from '../utils/dimensions';
import COLOR from '../utils/color';
import {images} from '../utils/images';

export default function CustomSportSelection({img, imgText, helper} : any) {

    const [choose, setChoose] = React.useState<any>(false);
    
    const selectedItems = () => {
        helper(imgText)
        setChoose(!choose);
  };

  return (
      
      <TouchableOpacity style={[styles.renderContainer,]} onPress={selectedItems}>
          {/* <SportScreen choose={choose} setChoose={setChoose}/> */}
        <View
          style={[
            styles.gridView,
            {backgroundColor: choose ? COLOR.BLUE : '#121212'},
          ]}>
          {choose && (
            <Image style={styles.rightCheck} source={images.rightCheck} />
          )}
          <Image source={{uri: img}} style={styles.gridimg} />
          <Text
            style={[
              styles.imgTextStyle,
              {
                color: choose ? COLOR.BLACK : COLOR.WHITE,
                fontWeight: choose ? '900' : '400',
              },
            ]}>
            {imgText}
          </Text>
        </View>
      {/* { choose >0 ? (<CustomButton label = "CONTINUE" /> ): (<CustomInActiveButton label= "CONTINUE" />)}  */}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridimg: {
    height: 70,
    width: 60,
    resizeMode: 'contain',
  },
  gridView: {
    height: normalize(120),
    width: normalize(108),
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(6),
  },
  imgTextStyle: {
    fontFamily: 'helvetica-Oblique',
    fontSize: 15,
    marginTop: normalize(5),
  },
  rightCheck: {
    height: normalize(10),
    width: normalize(10),
    // bottom: normalize(95),
    resizeMode: 'contain',
    left: normalize(40),
    backgroundColor: 'black',
  },
   renderContainer: {
    marginHorizontal: normalize(5),
    width: normalize(104),
    height: normalize(112),
    marginTop: normalize(20),
    // backgroundColor: '#121212'
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft:normalize(15)
  },
});
