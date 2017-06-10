import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from '../components/Search'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'search your food' };
  }

  render() {
    return (
        <View style={styles.container}>
            <Search />
            <Swiper  height={200} horizontal={true} 
                dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                paginationStyle={{bottom: 5}}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
            </Swiper>
        </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
});
