import {StyleSheet,Text,View,FlatList,StatusBar,Image,TouchableOpacity,TextInput,} from 'react-native';
import React from 'react';
import {country_dial} from '../../utils/country_dial';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';
import {images} from '../../utils/images';
import {STRINGS} from '../../utils/strings';

export default function CountryModal(props: any) {
  const {country, setCountry, dialcode, setDialcode} = props;
  const DATA = country_dial;
  const SPACING = 20;

  const handledialCode = (item: any) => {
    setDialcode(item.dial_code);
    setCountry(!country);
  };

  const renderItems = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.renderItemView}
          onPress={() => {
            handledialCode(item);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text>{item.flag}</Text>
            <Text style={styles.countryNameStyle}>{item.name}</Text>
          </View>
          <Text style={styles.dialCodeStyle}>{item.dial_code}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemSeparator = () => {
    return <View style={styles.itemSeparatorView} />;
  };

  const countryModalClosed = () => {
    setCountry(!country);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.selectCountryText}>
        {STRINGS.LABEL.SELECT_COUNTRY}
      </Text>
      <TouchableOpacity onPress={countryModalClosed} activeOpacity={0.5}>
        <Image source={images.cancel} style={styles.backArrImg} />
      </TouchableOpacity>
      <View style={styles.textInputViewStyle}>
        <TouchableOpacity>
          <Image style={styles.searchImgStyle} source={images.searchImg} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInputStyle}
          placeholder={STRINGS.LABEL.SEARCH_COUNTRY}
          placeholderTextColor={COLOR.WHITE}
        />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItems}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: COLOR.BLACK,
            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 20,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(50),
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  flagImgStyle: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  itemSeparatorView: {
    height: normalize(2),
    width: '100%',
    backgroundColor: '#1B1B1B',
  },
  countryNameStyle: {
    color: COLOR.WHITE,
    marginLeft: 10,
    maxWidth: 270,
    fontSize: 16,
  },
  renderItemView: {
    flexDirection: 'row',
    height: normalize(45),
    paddingTop: normalize(15),
    justifyContent: 'space-between',
  },
  selectCountryText: {
    width: normalize(215),
    height: normalize(32),
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    marginLeft: normalize(10),
    marginTop: normalize(20),
    color: COLOR.WHITE,
    marginBottom: normalize(5),
  },
  backArrImg: {
    height: normalize(28),
    width: normalize(28),
    bottom: normalize(35),
    left: normalize(325),
  },
  searchImgStyle: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(15),
  },
  textInputViewStyle: {
    borderWidth: 1,
    height: normalize(45),
    width: normalize(350),
    borderRadius: normalize(5),
    borderColor: COLOR.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: normalize(19),
    marginLeft: normalize(10),
  },
  textInputStyle: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: COLOR.WHITE,
  },
  dialCodeStyle: {
    color: COLOR.WHITE,
    fontSize: 16,
  },
});
