import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import COLOR from '../utils/color';
import {normalize} from '../utils/dimensions';
import {images} from '../utils/images';

interface userDefined {
  onchangeText?: any;
  placeholder?: any;
  topview?: any;
  text: any;
  setText?: any;
}
export default function CustomSearchButton(props: userDefined) {
  const {onchangeText, placeholder, topview, text, setText} = props;
  const refvideo = useRef<null>();
  const handleCross = () => {
    setText('');
    refvideo?.current?.clear();
  };
  return (
    <View style={styles.body}>
      {/* <Text style={styles.sportTextHeader}>
          {STRINGS.LABEL.WHICH_SPORTS_PLAY}
        </Text> */}
      <View style={[styles.textInputViewStyle, topview]}>
        <Image style={styles.searchImgStyle} source={images.searchImg} />
        <TextInput
          style={styles.textInputStyle}
          // placeholder={STRINGS.LABEL.SEARCH_SPORTS}
          placeholder={placeholder}
          placeholderTextColor={COLOR.WHITE}
          onChangeText={onchangeText}
          ref={refvideo}
        />

        {text.length > 0 && (
          <TouchableOpacity
            onPress={handleCross}
            style={styles.crossButtonTouchable}>
            <Image source={images.cross} style={styles.crossImgStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginLeft: normalize(15),
    marginTop: normalize(10),
  },
  textInputViewStyle: {
    borderWidth: 1,
    height: normalize(45),
    width: normalize(350),
    borderRadius: normalize(5),
    marginTop: normalize(5),
    borderColor: COLOR.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: normalize(19),
  },
  searchImgStyle: {
    height: normalize(16),
    width: normalize(16),
    marginLeft: normalize(15),
    resizeMode:'contain'
  },
  textInputStyle: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: COLOR.WHITE,
    width: normalize(150),
  },
  sportTextHeader: {
    color: COLOR.WHITE,
    width: normalize(280),
    height: normalize(64),
    fontSize: 24,
    fontWeight: '900',
  },
  //   renderContainer: {
  //     marginHorizontal: normalize(5),
  //     width: normalize(104),
  //     height: normalize(112),
  //     marginTop: normalize(20),
  //     backgroundColor: '#121212',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 5,
  //   },
  //   sportsImg: {
  //     height: normalize(50),
  //     width: normalize(50),
  //     resizeMode: 'contain',
  //   },
  //   sportText: {
  //     color: COLOR.WHITE,
  //     marginTop: normalize(10),
  //   },
  // });
  crossButtonTouchable: {
    height: 30,
    width: 30,
    padding: 20,
    right: 16,
    position: 'absolute',
    bottom: 20,
  },
  crossImgStyle: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
});
