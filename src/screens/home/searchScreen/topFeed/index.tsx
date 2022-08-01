import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Search_Api} from '../action';
import {normalize} from '../../../../utils/dimensions';

export default function TopSearchScreen(props: any) {
  const dispatch = useDispatch<any>();
  const [text, setText] = React.useState<any>();
  const [page, setPage] = React.useState<number>(1);
  const {Search_data} = useSelector((store: any) => store.SearchScreenReducer);

  React.useEffect(() => {
    dispatch(get_Search_Api(props.data, page));
  }, [page]);

  const renderList = ({item}: any) => {
    return (
      <View style={styles.renderContainer}>
        <Text style={styles.nameTextStyle}>{item?.name}</Text>
        <Text style={styles.usernameTextStyle}>{item?.username}</Text>
      </View>
    );
  };

  React.useEffect(() => {
    dispatch(
      get_Search_Api(
        props.data,
        page,
        (response: any) => {
          if (response.data.statusCode === 200) {
          }
        },
        (errorAPI: any) => {
          console.log('err', errorAPI);
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
    <View>
      <FlatList
        data={Search_data}
        renderItem={renderList}
        // keyExtractor={keyextractor}
        ItemSeparatorComponent={ItemDivider}
        onEndReached={onEndReachedList}
        onEndReachedThreshold={0.1}
        style={{height: normalize(567)}}
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
