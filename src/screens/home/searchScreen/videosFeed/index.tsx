import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Search_Video_Api} from '../action';
import Video from 'react-native-video';

const {width} = Dimensions.get('screen');
export default function VideosSearchScreen(props: any) {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch<any>();
  const {Video_data} = useSelector((store: any) => store.SearchScreenReducer);
  console.log('=====++++ selector videos', Video_data);

  React.useEffect(() => {
    dispatch(
      get_Search_Video_Api(
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

  const renderList = ({item}: any) => {
    console.log('renderitem videos', item);
    return (
      <Video
        source={{uri: item?.contentUrlMp4}}
        style={styles.videoContainer}
        resizeMode="cover"
      />
    );
  };
  return (
      <FlatList data={Video_data} renderItem={renderList} numColumns={3} />
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 128,
    width: width / 3,
    margin: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderColor: 'yellow',
  },
});
