import {StyleSheet, View} from 'react-native';
import React from 'react';
import COLOR from '../../../utils/color';
import CustomSearchButton from '../../../component/customSearchButton';
import {normalize} from '../../../utils/dimensions';
import ToptabNavigator from '../../../routes/topTab';
import {useSelector} from 'react-redux';

export default function SearchScreen() {
  const [text, setText] = React.useState<any>();
  const {Search_data} = useSelector((store: any) => store.SearchScreenReducer);

  return (
    <View style={{flex: 1, backgroundColor: COLOR.BLACK}}>
      <CustomSearchButton
        placeholder={'Search'}
        topview={styles.body}
        onchangeText={(txt: any) => {
          setText(txt);
        }}
      />
      <ToptabNavigator data={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: normalize(60),
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
    marginTop: 30,
    marginHorizontal: normalize(40),
    marginBottom: normalize(20),
  },
});
