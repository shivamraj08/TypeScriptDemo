import {FlatList, StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Search_Video_Api} from '../action';
import Video from 'react-native-video';
import CustomListEmpty from '../../../../component/customListEmpty';
import {debounce} from 'lodash';
import COLOR from '../../../../utils/color';
import { normalize } from '../../../../utils/dimensions';

const {width} = Dimensions.get('screen');

export default function VideosSearchScreen(props: any) {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch<any>();
  const [isLoading,setIsLoading] = React.useState<boolean>(false);
  const {Video_data} = useSelector((store: any) => store.SearchScreenReducer);

  React.useEffect(() => {
    setIsLoading(true);
    dispatch(
      get_Search_Video_Api(
        props.data,
        page,
        '4',
        (response: any) => {
          if (response.data.statusCode === 200) {
          setIsLoading(false);
          }
        },
        (errorAPI: any) => {
          console.log('err', errorAPI);
          setIsLoading(false);
        },
      ),
    );
  }, [props.data]);

  const processchange = useCallback(
    debounce((search: string) => {
      setIsLoading(false);
      dispatch(get_Search_Video_Api(search, page, '4'));
    }, 1000),
    [],
  );

  React.useEffect(() => {
    processchange(props.data);
  }, [props.data]);

  const renderList = ({item}: any) => {
    return (
      <Video
        source={{uri: item?.contentUrlMp4}}
        style={styles.videoContainer}
        resizeMode="cover"
      />
    );
  };

  return (
    <>
    <FlatList
      data={Video_data}
      renderItem={renderList}
      numColumns={3}
      ListEmptyComponent={props.data && !isLoading && <CustomListEmpty />}
    />
    {isLoading && <ActivityIndicator size={'large'} color={COLOR.BLUE} style={styles.indicator}/>}
    </>
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
  indicator:{
    marginBottom:normalize(290)
  }
});
