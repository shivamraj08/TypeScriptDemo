import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import TopSearchScreen from '../../screens/home/searchScreen/topFeed';
import AccountSearchScreen from '../../screens/home/searchScreen/accountFeed';
import HashtagSearchScreen from '../../screens/home/searchScreen/hashtagsFeed';
import VideosSearchScreen from '../../screens/home/searchScreen/videosFeed';

export default function ToptabNavigator() {
    const TopTab=createMaterialTopTabNavigator();
  return (
      <TopTab.Navigator
      screenOptions={{
          tabBarStyle : {backgroundColor:'black'},
      }}
      >
          <TopTab.Screen name='Top' component={TopSearchScreen}/>
          <TopTab.Screen name='Top' component={AccountSearchScreen}/>
          <TopTab.Screen name='Top' component={HashtagSearchScreen}/>
          <TopTab.Screen name='Top' component={VideosSearchScreen}/>
      </TopTab.Navigator>
  )
}

const styles = StyleSheet.create({})