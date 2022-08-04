import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import COLOR from '../../../utils/color';
import CustomSearchButton from '../../../component/customSearchButton';
import {normalize} from '../../../utils/dimensions';
import ToptabNavigator from '../../../routes/topTab';
import {images} from '../../../utils/images';
import {debounce} from 'lodash';

export default function SearchScreen() {
  const [text, setText] = React.useState<any>('');

  return (
    <View style={{flex: 1, backgroundColor: COLOR.BLACK}}>
      <View style={{flexDirection: 'row'}}>
        <CustomSearchButton
          text={text}
          setText={setText}
          placeholder={'Search'}
          topview={styles.body}
          onchangeText={(txt: any) => {
            setText(txt);
          }}
        />
        <TouchableOpacity style={styles.searchView}>
          <Image source={images.searchIcon} style={styles.searchIconImg} />
        </TouchableOpacity>
      </View>
      <ToptabNavigator data={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: normalize(60),
    width: normalize(300),
  },
  itemDividerStyle: {
    height: 1,
    width: '100%',
    backgroundColor: '#1B1B1B',
  },
  usernameTextStyle: {
    fontSize: 16,
    color: 'grey',
  },
  nameTextStyle: {
    fontSize: 18,
    color: 'white',
  },
  renderContainer: {
    marginTop: normalize(30),
    marginHorizontal: normalize(40),
    marginBottom: normalize(20),
  },
  searchView: {
    height: normalize(46),
    width: normalize(46),
    borderRadius: normalize(5),
    borderWidth: 1,
    borderColor: COLOR.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    top: normalize(70),
    right:10
  },
  searchIconImg: {
    height: normalize(25),
    width: normalize(25),
    resizeMode: 'contain',
  },
});
