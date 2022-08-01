import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Search_Accounts_Api} from '../action';
import {normalize} from '../../../../utils/dimensions';

export default function AccountSearchScreen(props: any) {
  const dispatch = useDispatch<any>();
  const [text, setText] = React.useState<any>();
  const [page, setPage] = React.useState<any>(1);
  const {Account_data} = useSelector((store: any) => store.SearchScreenReducer);
  // console.log('===????? Account data selector', Account_data);

  const renderList = ({item}: any) => {
    // console.log('account render items', item);
    return (
      <View style={styles.renderContainer}>
        <Text style={styles.nameTextStyle}>{item?.name}</Text>
        <Text style={styles.usernameTextStyle}>{item?.username}</Text>
      </View>
    );
  };

  React.useEffect(() => {
    dispatch(get_Search_Accounts_Api(props.data, page));
  }, [page]);

  React.useEffect(() => {
    dispatch(
      get_Search_Accounts_Api(
        props.data,
        page,
        (response: any) => {
          if (response.data.statusCode === 200) {
            // console.log('resp account useeffect ', response);
          }
        },
        (errorAPI: any) => {
          console.log('err in acc useeffect ', errorAPI);
        },
      ),
    );
  }, [props.data]);

  const keyextractor = (item: any, index: any) => item._id + index ;

  const ItemDivider = () => {
    return <View style={styles.itemDividerStyle} />;
  };

  const onEndReachedList = () => {
    setPage(page + 1);
    dispatch(get_Search_Accounts_Api(text, page));
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={Account_data}
        renderItem={renderList}
        // keyExtractor={keyextractor}
        ItemSeparatorComponent={ItemDivider}
        onEndReached={onEndReachedList}
        onEndReachedThreshold={1}
        style={{height: normalize(527)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
