import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '../utils/images';
import { normalize } from '../utils/dimensions';
import { useNavigation } from '@react-navigation/native';

export default function CustomBackButton() {
  const navigation = useNavigation<any>();
  const goBackScreen = () => navigation.goBack();
  return (
    <View>
      <TouchableOpacity onPress={goBackScreen}>
          <Image style={styles.backArrowStyle} source={images.backarrow} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    backArrowStyle: {
        height: normalize(20),
        width: normalize(20),
        marginLeft: normalize(15),
        resizeMode: 'contain',
        marginTop: normalize(60),
      },
})