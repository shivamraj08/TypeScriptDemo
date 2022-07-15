import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../utils/color';
import CustomBackButton from '../../component/customBackButton';
import {normalize} from '../../utils/dimensions';
import {images} from '../../utils/images';
import {zipCodeAction} from '../editProfileScreen/action';

interface user {
  setZipcodeModal?: any;
  callback?: any;
}

export default function ZipCode(props: user) {
  let {callback, setZipcodeModal} = props;
  const dispatch = useDispatch<any>();
  const {zipCodeData} = useSelector((store: any) => store.EditProfileReducer);
  const[page,setPage] = React.useState(1);
  const[text,setText] = React.useState('');

  useEffect(() => {
    console.log('page:asdfasd',page,text);
    dispatch({type: 'SET_ZIPCODE', payload:[]});
  }, [])
  
  const closedzipcode = (zip: any) => {
    callback(zip);
    setZipcodeModal(false);
  };
  const ItemSeparator = () => {
    return (
      <View
        style={styles.itemSeparatorView}
      />
    );
  };
  
  const _onEndReached = () =>{
    setPage(page+1)
    dispatch(zipCodeAction(text,page));
  }

  const renderitem = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => closedzipcode(item.zipcode)}>
        <View style={styles.renderItemView}>
          <Text style={{color: COLOR.WHITE}}>{item.zipcode}, </Text>
          <Text style={{color: COLOR.WHITE}}>{item.city},</Text>
          <Text style={{color: COLOR.WHITE}}>{item.state}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <CustomBackButton />
      <Text style={styles.textZipCodeStyle}>{'Search Zip Code'}</Text>
      <View style={styles.textInputViewStyle}>
        <Image style={styles.searchImgStyle} source={images.searchImg} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="ZipCode"
          placeholderTextColor={COLOR.WHITE}
          onChangeText={(txt: any) => {
            setText(txt)
            setPage(1)
            if(txt?.length<=0){
              dispatch({type: 'SET_ZIPCODE', payload:[]});
            }
            dispatch(zipCodeAction(txt,page))
          }}
        />
      </View>
      <FlatList
        data={zipCodeData}
        renderItem={renderitem}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={_onEndReached}
        onEndReachedThreshold={0.5}
      />
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
    marginLeft: normalize(10),
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
  renderItemView: {
    flexDirection: 'row',
    height: 65,
    width: '100%',
    borderColor: COLOR.BLACK,
    top: 20,
    borderWidth: 0.4,
    marginLeft: normalize(10),
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  textZipCodeStyle: {
    width: normalize(215),
    height: normalize(32),
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    marginLeft: normalize(10),
    marginTop: normalize(20),
    color: COLOR.WHITE,
    marginBottom: normalize(5),
  },
  itemSeparatorView:{
          height: 2,
          width: '100%',
          backgroundColor: '#1B1B1B',
        }
});
