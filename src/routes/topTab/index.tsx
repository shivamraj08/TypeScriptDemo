import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import TopSearchScreen from '../../screens/home/searchScreen/topFeed';
import AccountSearchScreen from '../../screens/home/searchScreen/accountFeed';
import HashtagSearchScreen from '../../screens/home/searchScreen/hashtagsFeed';
import VideosSearchScreen from '../../screens/home/searchScreen/videosFeed';
import COLOR from '../../utils/color';

export default function ToptabNavigator() {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: 'transparent'},
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={
                focused
                  ? {
                      color: COLOR.BLUE,
                      fontSize: 15,
                      fontWeight: '800',
                      fontFamily: 'Helvetica-BlackItalic',
                    }
                  : {
                      color: COLOR.WHITE,
                      fontSize: 15,
                      fontWeight: '800',
                      fontFamily: 'Helvetica-BlackItalic',
                    }
              }>
              {route.name}
            </Text>
          );
        },
        tabBarLabelStyle: {color: COLOR.BLUE},
        tabBarIndicatorStyle: {backgroundColor: COLOR.BLUE}
      })}>
      <TopTab.Screen name="Top" component={TopSearchScreen} />
      <TopTab.Screen name="Accounts" component={AccountSearchScreen} />
      <TopTab.Screen name="HashTags" component={HashtagSearchScreen} />
      <TopTab.Screen name="Videos" component={VideosSearchScreen} />
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({});
