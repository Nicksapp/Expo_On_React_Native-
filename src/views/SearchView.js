import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default ScreenScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>ScreenScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
