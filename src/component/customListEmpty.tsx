import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../utils/images'
import { normalize } from '../utils/dimensions'

export default function CustomListEmpty() {
  return (
    <View>
        <Image source={images.noSearchResult} style={styles.nosearchStyle}/>
        <Text style={styles.noResultText}>
          {'No Result Found'}
        </Text>
        <Text style={styles.sorryText}>
          {'Sorry,no search results found!'}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    nosearchStyle:{
        height:normalize(136),
        width:normalize(136),
        resizeMode:'contain',
        alignSelf:'center',
        top:normalize(100)
      },
      sorryText:{
        color:'white',
        fontSize:14,alignSelf:'center',
        top:normalize(120)
      },
      noResultText:{
        color:'white',
        fontSize:18,
        fontWeight:'900',
        alignSelf:'center',
        top:normalize(110),
      },
})