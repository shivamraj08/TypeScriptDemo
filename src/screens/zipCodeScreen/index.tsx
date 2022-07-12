// import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
// import React from 'react'
// import CustomBackButton from '../../component/customBackButton'
// import { normalize } from '../../utils/dimensions'
// import { images } from '../../utils/images'
// import COLOR from '../../utils/color'

// export default function ZipCodeScreen() {
  
//   return (
//     <View style={{flex:1,backgroundColor:'black',}}>
//         <CustomBackButton/>
//         <Text style={{fontSize:20,fontWeight:'900',color:'white',margin:normalize(10)}}>{"ZipCode"}</Text>
//         <View style={styles.textInputViewStyle}>
//           <Image style={styles.searchImgStyle} source={images.searchImg} />
//           <TextInput
//             style={styles.textInputStyle}
//             placeholder="ZipCode"
//             placeholderTextColor={COLOR.WHITE}
//           />
//         </View> 
//             </View>
//   )
// }

// const styles = StyleSheet.create({
//     textInputViewStyle: {
//         borderWidth: 1,
//         height: normalize(45),
//         width: normalize(350),
//         borderRadius: normalize(5),
//         marginTop: normalize(5),
//         borderColor: COLOR.WHITE,
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: normalize(19),
//       },
//       searchImgStyle: {
//         height: normalize(20),
//         width: normalize(20),
//         marginLeft: normalize(15),
//       },
//       textInputStyle: {
//         marginHorizontal: normalize(20),
//         height: normalize(45),
//         fontSize: 14,
//         color: COLOR.WHITE,
//       },
// })

import {StyleSheet, Text, View, FlatList, TouchableOpacity,Image,TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../utils/color';
import CustomBackButton from '../../component/customBackButton';
import { normalize } from '../../utils/dimensions';
import { images } from '../../utils/images';
import { zipCodeAction } from '../editProfileScreen/action';
export default function ZipCode({route}: any) {
//   const [zipcode, setZipCode] = useState('');

const dispatch=useDispatch<any>()
//   const {zipcode} = route.params;
//   console.log(zipcode);
  const {zipCodeData} = useSelector((store: any) => store.EditProfileReducer);
//   console.log('zipcode34567890', zipcode);

  console.log('fsdafsdjk======>', zipCodeData);
  const data = zipCodeData.result;
  const renderitem = ({item}: any) => {
    console.log('itemwilllllllllll', item);
    return (
    //   <TouchableOpacity onPress={() => zipcode(item.zipcode)}>
       <View
          style={{
            flexDirection: 'row',
            height: 65,
            width: '100%',
            borderColor: COLOR.BLACK,
            top: 20,
            borderWidth: 0.4,
          }}>
          <Text style={{color: COLOR.WHITE}}>{item.zipcode}, </Text>
          <Text style={{color: COLOR.WHITE}}>{item.city},</Text>
          <Text style={{color: COLOR.WHITE}}>{item.state}</Text>
        </View>
    //   </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <CustomBackButton />
      <View style={styles.textInputViewStyle}>
         <Image style={styles.searchImgStyle} source={images.searchImg} />
          <TextInput
            style={styles.textInputStyle}
            placeholder="ZipCode"
            placeholderTextColor={COLOR.WHITE}
            onChangeText={(text:any)=>{
            dispatch(zipCodeAction(text))
            }}
          />
        </View> 
      <FlatList data={data} renderItem={renderitem} />
    </View>
  );
}

const styles = StyleSheet.create({
    textInputViewStyle: {
                borderWidth: 1,
                height: normalize(45),
                width: normalize(350),
                borderRadius: normalize(5),
                marginTop: normalize(5),
                borderColor: COLOR.WHITE,
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: normalize(19),
              },
              searchImgStyle: {
                height: normalize(20),
                width: normalize(20),
                marginLeft: normalize(15),
              },
              textInputStyle: {
                marginHorizontal: normalize(20),
                height: normalize(45),
                fontSize: 14,
                color: COLOR.WHITE,
              },
});