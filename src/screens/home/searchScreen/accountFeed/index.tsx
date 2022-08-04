import {StyleSheet, Text, View, FlatList,Image,ActivityIndicator} from 'react-native';
import React, { useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Search_Accounts_Api} from '../action';
import {normalize} from '../../../../utils/dimensions';
import CustomListEmpty from '../../../../component/customListEmpty';
import {debounce} from 'lodash';
import { images } from '../../../../utils/images';
import COLOR from '../../../../utils/color';

export default function AccountSearchScreen(props: any) {
  const dispatch = useDispatch<any>();
  const [text, setText] = React.useState<any>();
  const [page, setPage] = React.useState<any>(1);
  const [isLoading,setIsLoading] = React.useState<boolean>(false);
  const {Account_data} = useSelector((store: any) => store.SearchScreenReducer);
  // console.log('===????? Account data selector', Account_data);

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
    dispatch(get_Search_Accounts_Api(props.data, page,'2'));
  }, [page]);

  const processchange = useCallback(
    debounce((search: string) => {
      setIsLoading(false);
      dispatch(get_Search_Accounts_Api(search, page, '2'));
    }, 1000),
    [],
  );

  React.useEffect(() => {
    processchange(props.data);
  }, [props.data]);

  React.useEffect(() => {
    setIsLoading(true)
    dispatch(
      get_Search_Accounts_Api(
        props.data,
        page,
        (response: any) => {
          if (response.data.statusCode === 200) {
          setIsLoading(false);
          }
        },
        (errorAPI: any) => {
          console.log('err in acc useeffect ', errorAPI);
          setIsLoading(false);
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
        data={Account_data}
        renderItem={renderList}
        // keyExtractor={keyextractor}
        ItemSeparatorComponent={ItemDivider}
        onEndReached={onEndReachedList}
        onEndReachedThreshold={1}
        ListEmptyComponent={props.data && !isLoading && <CustomListEmpty />}
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
  },
  renderContainer: {
    marginTop: 30,
    marginHorizontal: normalize(20),
    marginBottom: normalize(20),
    flexDirection:'row'
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
