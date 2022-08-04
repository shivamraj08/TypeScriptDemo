import {StyleSheet, Text, View, FlatList,ActivityIndicator, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {normalize} from '../../../../utils/dimensions';
import {get_Search_Hashtag_Api} from '../action';
import COLOR from '../../../../utils/color';
import CustomListEmpty from '../../../../component/customListEmpty';
import {debounce} from 'lodash';
import { images } from '../../../../utils/images';

export default function HashtagSearchScreen(props: any) {
  const dispatch = useDispatch<any>();
  const [page, setPage] = React.useState<any>(1);
  const [isLoading, setisLoading] = useState(false);
  const {HashTag_data} = useSelector((store: any) => store.SearchScreenReducer);

  const renderList = ({item}: any) => {
    return (
      <View style={styles.renderContainer}>
        <Image source={images.hashtag} style={styles.accountImg} resizeMode={'contain'}/>
        <Text style={styles.nameTextStyle}>{item?.hashtag}</Text>
      </View>
    );
  };

  const processchange = useCallback(
    debounce((search: string) => {
      setisLoading(false);
      dispatch(get_Search_Hashtag_Api(search, page, '3'));
    }, 1000),
    [],
  );

  React.useEffect(() => {
    processchange(props.data);
  }, [props.data]);

  React.useEffect(() => {
    setisLoading(true);
    dispatch(
      get_Search_Hashtag_Api(
        props.data,
        page,
        '3',
        (response: any) => {
          if (response?.data?.statusCode === 200) {
            setisLoading(false);
          }
        },
        (errorAPI: any) => {
          setisLoading(false);
        },
      ),
    );
  }, [props.data]);
  const keyextractor = (item: any, index: any) => item._id + index;

  const ItemDivider = () => {
    return <View style={styles.itemDividerStyle} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={HashTag_data}
        renderItem={renderList}
        ItemSeparatorComponent={ItemDivider}
        ListEmptyComponent={props.data && !isLoading &&<CustomListEmpty />}
        // keyExtractor={keyextractor}
        style={{height: normalize(527)}}
      />
      {isLoading && <ActivityIndicator size={'large'} color={COLOR.BLUE} style={styles.indicator}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal:normalize(20),
    marginTop:normalize(10)
  },
  renderContainer: {
    marginTop: 20,
    marginHorizontal: normalize(30),
    marginBottom: normalize(20),
    flexDirection:'row'
  },
  listEmptyView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
  noResultText: {
    color: COLOR.WHITE,
    fontSize: 14,
  },
  accountImg:{
    height:normalize(40),
    width:normalize(40)
  },
  indicator:{
    marginBottom:normalize(290)
  }
});
