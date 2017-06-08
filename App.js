import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import HomeScreen from './src/views/Home';
import AboutScreen from './src/views/About';

import Expo from 'expo';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';


const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
}));

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation 
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: 'rgba(33,150,243,1)',
                tintColor: '#ffffff',
                translucent: true
              }
            }}
            initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTab: {

  }
});










