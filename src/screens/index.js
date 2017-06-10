import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../views/Home'
import FindScreen from '../views/Find'
import OrderScreen from '../views/Order'
import ProfileScreen from '../views/Profile'

// 底部 Tab 标签导航
export default TabNav = TabNavigator(
  {
    MainTab: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        title: '首页',
        tabBarLabel: '首页',  // 底部 title
        headerStyle: {
          backgroundColor: '#0096ff',
        },
        header: null, // 不显示 Header
        headerTintColor: '#ffffff',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    FindTab: {
      screen: FindScreen,
      path: '/',
      navigationOptions: {
        title: '发现',
        tabBarLabel: '发现',
        headerStyle: {
          backgroundColor: '#0096ff'
        },
        headerTintColor: '#ffffff',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-compass' : 'ios-compass-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    OrderTab: {
      screen: OrderScreen,
      path: '/',
      navigationOptions: {
        title: '订单',
        tabBarLabel: '订单',
        headerStyle: {
          backgroundColor: '#0096ff'
        },
        headerTintColor: '#ffffff',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    ProfileTab: {
      screen: ProfileScreen,
      path: '/',
      navigationOptions: {
        title: '我的',
        tabBarLabel: '我的',
        headerStyle: {
          backgroundColor: '#0096ff'
        },
        headerTintColor: '#ffffff',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-contact' : 'ios-contact-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#0084FF',
    }
  }
);
