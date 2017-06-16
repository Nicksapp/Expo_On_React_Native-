import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

// Tab router 配置 
import TabNav from './src/screens'
import OrderTab from './src/views/Order'
import SearchView from './src/views/SearchView'

export default StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,
  },
  NotifSettings: {
    screen: OrderTab,
    navigationOptions: {
      title: 'Notifications',
      headerStyle: {
        backgroundColor: '#0096ff'
      },
      headerTintColor: '#ffffff',
    },
  },
  SearchNavigator: {
    screen: StackNavigator({
      Search: {
        screen: SearchView,
        navigationOptions: {
          header: null,
        }
      }
    },{
      mode: 'modal'
    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});










