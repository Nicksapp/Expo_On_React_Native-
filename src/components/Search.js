import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Search = ({ navigation }) => (
    <View style={[styles.searchWrapper,styles.center]}>
        <View style={{flex: 1}}>
            <View style={[styles.textInput,styles.center]}>
               <Ionicons name="ios-search-outline" size={24} style={{color: '#bdbdbd', top: 1,marginRight: 3}}/>
               <Text style={{color: '#333'}}>输入商家、商品名称</Text>
            </View>
         </View>
    </View>
)

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchWrapper: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0096ff'
  },
  textInput: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingLeft: 10
  },
});