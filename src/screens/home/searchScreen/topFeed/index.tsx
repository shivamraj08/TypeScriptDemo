import {StyleSheet, Text, View, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Search_Api} from '../action';
import {normalize} from '../../../../utils/dimensions';
import CustomListEmpty from '../../../../component/customListEmpty';
import {debounce} from 'lodash';
import { images } from '../../../../utils/images';
import COLOR from '../../../../utils/color';

export default function TopSearchScreen(props: any) {
  const dispatch = useDispatch<any>();
  const [page, setPage] = React.useState<number>(1);
  const [isLoading,setIsLoading] = React.useState<boolean>(false);
  const {Search_data} = useSelector((store: any) => store.SearchScreenReducer);

  React.useEffect(() => {
    dispatch(get_Search_Api(props.data, page, '1'));
  }, [page]);

  const processchange = useCallback(
    debounce((search: string) => {
      setIsLoading(false)
      dispatch(get_Search_Api(search, page, '1'));
    }, 1000),
    [],
  );

  React.useEffect(() => {
    processchange(props.data);
  }, [props.data]);

  const renderList = ({item}: any) => {
    return (
      <View style={styles.renderContainer}>
        <Image source={images.account} style={styles.accountImg} resizeMode={'contain'}/>
        <View style={styles.userNameView}>
        <Text style={styles.nameTextStyle}>{item?.name}</Text>
        <Text style={styles.usernameTextStyle}>{item?.username}</Text>
        </View>
      </View>
    );
  };

  React.useEffect(() => {
    setIsLoading(true)
    console.log('prps data', props.data);
    dispatch(
      get_Search_Api(
        props.data,
        page,
        '1',
        (response: any) => {
          if (response?.data?.statusCode === 200) {
          setIsLoading(false)
          }
        },
        (errorAPI: any) => {
          console.log('err', errorAPI);
          setIsLoading(false)

        },
      ),
    );
  }, [props.data]);
  const keyextractor = (item: any, index: any) => item._id + index;

  const ItemDivider = () => {
    return <View style={styles.itemDividerStyle} />;
  };

  const onEndReachedList = () => {
    setPage(page + 1);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Search_data}
        renderItem={renderList}
        // keyExtractor={keyextractor}
        ItemSeparatorComponent={ItemDivider}
        onEndReached={onEndReachedList}
        ListEmptyComponent={props.data && !isLoading && <CustomListEmpty />}
        onEndReachedThreshold={0.5}
        style={{height: normalize(567)}}
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
  },
  renderContainer: {
    marginTop: 30,
    marginHorizontal: normalize(20),
    marginBottom: normalize(20),
    flexDirection:'row',
  },
  nosearchStyle: {
    height: normalize(136),
    width: normalize(136),
    resizeMode: 'contain',
    alignSelf: 'center',
    top: normalize(100),
  },
  sorryText: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    top: normalize(120),
  },
  noResultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    alignSelf: 'center',
    top: normalize(110),
  },
  accountImg:{
    height:normalize(50),
    width:normalize(50),
  },
  userNameView:{
    marginHorizontal:normalize(20),
  },
  indicator:{
    marginBottom:normalize(290)
  }
});

// function errorcallback(
//   text: any,
//   page: any,
//   callback: any,
//   errorcallback: any,
// ): any {
//   throw new Error('Function not implemented.');
// }
// function callback(
//   text: any,
//   page: any,
//   callback: any,
//   errorcallback: (
//     text: any,
//     page: any,
//     callback: any,
//     errorcallback: any,
//   ) => any,
// ): any {
//   throw new Error('Function not implemented.');
// }
