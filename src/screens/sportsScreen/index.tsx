import {Text, TextInput, View, Image, FlatList} from 'react-native';
import React from 'react';
import CustomBackButton from '../../component/customBackButton';
import {images} from '../../utils/images';
import {useSelector} from 'react-redux';
import COLOR from '../../utils/color';
import {styles} from './style';
import {STRINGS} from '../../utils/strings';

export default function SportScreen() {
  const DATA = useSelector((store: any) => store.EditProfileReducer);
  // console.log('////sport data is here', DATA);
  const renderItems = ({item}: any) => {
    // console.log('+++++++++////Item There', item);
    return (
      <View style={styles.renderContainer}>
        <Image style={styles.sportsImg} source={{uri: item?.sportImg}} />
        <Text style={styles.sportText}>{item.sportName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomBackButton />
      <View style={styles.body}>
        <Text style={styles.sportTextHeader}>
          {STRINGS.LABEL.WHICH_SPORTS_PLAY}
        </Text>
        <View style={styles.textInputViewStyle}>
          <Image style={styles.searchImgStyle} source={images.searchImg} />
          <TextInput
            style={styles.textInputStyle}
            placeholder={STRINGS.LABEL.SEARCH_SPORTS}
            placeholderTextColor={COLOR.WHITE}
          />
        </View>
        <FlatList
          data={DATA.sports}
          renderItem={renderItems}
          numColumns={3}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
