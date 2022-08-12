import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, { useEffect } from 'react';
import {normalize} from '../utils/dimensions';
import COLOR from '../utils/color';
import {images} from '../utils/images';


function CustomSportSelection({sportImg, sportName,_id, helper,selectedSports}: any) {
  const [choose, setChoose] = React.useState<any>(false);
  useEffect(()=>{
    const l = selectedSports?.findIndex((item:any)=>item == sportName)
    if(l != -1){
      setChoose(true)
    }
  },[])
  const selectedItems = () => {
    helper(sportName,_id);
    setChoose(!choose);
  };
  console.log('render');
  return (
    <TouchableOpacity style={[styles.renderContainer]} onPress={selectedItems}>
      <View
        style={[
          styles.gridView,
          {backgroundColor: choose ? COLOR.BLUE : '#121212' },
        ]}>
        {choose && (
          <Image style={styles.rightCheck} source={images.selected} resizeMode={'contain'} />
        )}
        <Image source={{uri: sportImg}} style={[styles.gridimg,{tintColor: choose ? COLOR.BLACK : COLOR.WHITE}]} />
        <Text
          style={[
            styles.imgTextStyle,
            {
              color: choose ? COLOR.BLACK : COLOR.WHITE,
              fontWeight: choose ? '400' : '400',
            },
          ]}>
          {sportName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(CustomSportSelection)

const styles = StyleSheet.create({
  gridimg: {
    height: 70,
    width: 60,
    resizeMode: 'contain',
  },
  gridView: {
    height: normalize(120),
    width: normalize(108),
    // backgroundColor: COLOR.BLACK,
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
    height: normalize(18),
    width: normalize(18),
    left: normalize(40),
  },
  renderContainer: {
    marginHorizontal: normalize(5),
    width: normalize(104),
    height: normalize(112),
    marginTop: normalize(20),
    // backgroundColor: '#121212'
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: normalize(15),
  },
});

