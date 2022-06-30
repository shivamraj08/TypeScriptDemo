import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { images } from '../../utils/images'

export default function CongratsModal() {
  return (
      <View style={{backgroundColor:'black',flex:1}}>
    <View style={{marginTop:250,marginLeft:40,}}>
      <Image source={images.like} style={{height:25,width:27,marginLeft:150,position:'absolute'}}/>
      <Image source={images.dialogBox} style={{width:328,height:244,}} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})