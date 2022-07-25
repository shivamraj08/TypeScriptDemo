import {StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/homeScreen';
import SearchScreen from '../../screens/home/searchScreen';
import UploadScreen from '../../screens/home/uploadScreen';
import ActivityScreen from '../../screens/home/activityScreen';
import AccountScreen from '../../screens/home/accountScreen';
import {images} from '../../utils/images';
import {normalize} from '../../utils/dimensions';
import COLOR from '../../utils/color';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black',},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.IconStyle}
                source={focused ? images.homeActive : images.homeInActive}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.IconStyle}
                source={focused ? images.searchActive : images.searchInActive}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Image style={styles.IconStyle} source={images.upload} />;
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Image style={styles.activityIcon} source={focused? images.trendActive : images.activity} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Image style={styles.IconStyle} source={focused? images.userActive : images.user} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  IconStyle: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  activityIcon:{
    height:normalize(25),
    width:normalize(25),
    resizeMode:'contain'
  }
});
