import { StyleSheet, Text,} from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopSearchScreen from '../../screens/home/searchScreen/topFeed';
import AccountSearchScreen from '../../screens/home/searchScreen/accountFeed';
import HashtagSearchScreen from '../../screens/home/searchScreen/hashtagsFeed';
import VideosSearchScreen from '../../screens/home/searchScreen/videosFeed';
import COLOR from '../../utils/color';

export default function ToptabNavigator( props : any) {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'transparent' },
        tabBarLabel: ({ focused }) => {
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
        tabBarLabelStyle: { color: COLOR.BLUE },
        tabBarIndicatorStyle: { backgroundColor: COLOR.BLUE },
      })}>
      <TopTab.Screen name="Top" children={() => <TopSearchScreen data={props.data} />}/>
      <TopTab.Screen name="Accounts" children={() => <AccountSearchScreen data={props.data} />}/>
      <TopTab.Screen name="HashTags" children={() => <HashtagSearchScreen data={props.data} />}/>
      <TopTab.Screen name="Videos" children={() => <VideosSearchScreen data={props.data} />}/>
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({});
