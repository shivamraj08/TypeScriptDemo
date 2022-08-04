import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../../../utils/images'
import { normalize } from '../../../utils/dimensions'
import { STRINGS } from '../../../utils/strings'

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Image source={images.activityImg} style={styles.activeImgStyle} resizeMode='contain'/>
      <Text style={styles.yourTextStyle}>
        {STRINGS.ACTIVITY.YOUR_ACTIVITY_LIST_EMPTY}
      </Text>
      <Text style={styles.tagLineStyle}>
        {STRINGS.ACTIVITY.TAG_LINE_TEXT}
      </Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'black',
    alignContent:'center'
  },
  activeImgStyle:{
    height:normalize(136),
    width:normalize(136),
    marginHorizontal:normalize(120)
  },
  yourTextStyle:{
    fontSize:18,
    color:'white',
    left:normalize(67),
    fontWeight:'900',
    fontFamily:'Helvetica-BlackItalic',
    marginTop:normalize(10)
  },
  tagLineStyle:{
    fontSize:14,
    fontFamily:'Helvetica Neue',
    left:normalize(59),
    color:'grey',
    width:normalize(258),
    height:normalize(34),
    marginTop:normalize(10)
  },

})