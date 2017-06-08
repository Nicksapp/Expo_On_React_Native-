import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            title: '首页',
        }
    }

    _gotoAbout = () => {
        this.props.navigator.push('about', {name: 'Nickj'});
    }

    render () {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>HomeScreen!</Text>
                <Button onPress={this._gotoAbout} title="Goto About"></Button>
            </View>  
        )
    }
}

