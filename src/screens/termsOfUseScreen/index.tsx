import {Text, View, Image, TouchableOpacity,SafeAreaView} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import {STRINGS} from '../../utils/strings';
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';

export default function TermsOfUse() {
    const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTopView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.backarrow} style={styles.backArrowStyle} />
        </TouchableOpacity>
        <Text style={styles.termsTextStyle}>{STRINGS.LABEL.TERMS}</Text>
      </View>
      <View style={styles.paragraphView}>
        <Text style={styles.para1TextStyle}>{STRINGS.TermsofUse.Terms1}</Text>
        <Text style={styles.para2TextStyle}>{STRINGS.TermsofUse.Terms2}</Text>
      </View>
    </SafeAreaView>
  );
}
