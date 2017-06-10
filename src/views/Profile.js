import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>ProfileScreen</Text>
        <Button
            onPress={() => navigation.navigate('NotifSettings')}
            title="Open profile screen"
            />
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
