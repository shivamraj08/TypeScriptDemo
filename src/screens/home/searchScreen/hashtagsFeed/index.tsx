import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {normalize} from '../../../../utils/dimensions';
import {get_Search_Hashtag_Api} from '../action';
import COLOR from '../../../../utils/color';
import {ActivityIndicator} from 'react-native-paper';
import CustomListEmpty from '../../../../component/customListEmpty';

export default function HashtagSearchScreen(props: any) {
  const dispatch = useDispatch<any>();
  const [page, setPage] = React.useState<any>(1);
  const [isLoading, setisLoading] = useState(false);
  const {HashTag_data} = useSelector((store: any) => store.SearchScreenReducer);

  const renderList = ({item}: any) => {
    return (
      <View style={styles.renderContainer}>
        <Text style={styles.nameTextStyle}>{item?.hashtag}</Text>
      </View>
    );
  };

  React.useEffect(() => {
    setisLoading(true);
    dispatch(
      get_Search_Hashtag_Api(
        props.data,
        page,
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
        ListEmptyComponent={props.data && <CustomListEmpty />}
        // keyExtractor={keyextractor}
        style={{height: normalize(527)}}
      />
      {isLoading && <ActivityIndicator size={'small'} color={'grey'} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 50,
    marginHorizontal: normalize(20),
    marginBottom: normalize(10),
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
});
