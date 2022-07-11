import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import {STRINGS} from '../../utils/strings';
import {styles} from './style';
import CustomBackButton from '../../component/customBackButton';

export default function TermsOfUse() {
  return (
    <View style={styles.container}>
      <View style={styles.headerTopView}>
        <TouchableOpacity onPress={CustomBackButton}>
          <Image source={images.backarrow} style={styles.backArrowStyle} />
        </TouchableOpacity>
        <Text style={styles.termsTextStyle}>{STRINGS.LABEL.TERMS}</Text>
      </View>
      <View style={styles.paragraphView}>
        <Text style={styles.para1TextStyle}>{STRINGS.TermsofUse.Terms1}</Text>
        <Text style={styles.para2TextStyle}>{STRINGS.TermsofUse.Terms2}</Text>
      </View>
    </View>
  );
}
