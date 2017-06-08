import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default class About extends React.Component {
    static route = {
        navigationBar: {
            title(params) {
                return `关于 ${params.name}`
            },
            renderRight: (route, props) => <SignOutButton name={route.params.name} />
        }
    }

    _goBack = () => {
        this.props.navigator.pop();
    }

    render () {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>Hello {this.props.route.params.name}</Text>
                <Button onPress={this._goBack} title="Goto Back"></Button>
            </View>
        )
    }
}

//  @connect()
class SignOutButton extends React.Component {
   render() {
      return (
        <TouchableOpacity style={{flex: 1,justifyContent:"center",alignContent:"center"}} onPress={() => console.log('Info Clicked')}>
          <Text style={{color:"#fff"}}>Info {this.props.name}</Text>
        </TouchableOpacity>
      );
   }
 }