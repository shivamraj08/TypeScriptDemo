import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLOR from '../../../utils/color';
import CustomSearchButton from '../../../component/customSearchButton';
import { normalize } from '../../../utils/dimensions';
import ToptabNavigator from '../../../routes/topTab';
import CustomBackButton from '../../../component/customBackButton';

export default function SearchScreen() {
  return (
    <View style={{flex: 1, backgroundColor: COLOR.BLACK}}>
      <CustomSearchButton placeholder={'Search'} 
      topview={styles.body}
      />
      <ToptabNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    marginTop:normalize(60),

  }
});
