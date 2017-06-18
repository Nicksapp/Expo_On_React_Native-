import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class ScreenScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    handleToTag() {
        console.log("tag clicked")
    }
    handleToClearHistory() {
        console.log("history cleared")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={34} style={{color: '#999', marginTop: 2}}/>
                    </TouchableOpacity>
                    <View style={{flex: 1, flexDirection: 'row',marginLeft: 15}}>
                        <TextInput 
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({text})}
                            placeholder='请输入商品名称'
                            value={this.state.text}></TextInput>
                    </View>    
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.textHeader}>历史搜索</Text>
                        <TouchableOpacity onPress={this.handleToClearHistory.bind(this)}> 
                            <Ionicons name="ios-trash" size={18} style={{color: '#cecece'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row',flexWrap: 'wrap', marginTop: 15}}>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>汉堡</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>双皮奶</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>烤冷面</Text>
                        </TouchableOpacity>                    
                    </View>
                </View>
                <View style={[styles.mainContainer, {marginTop: 30}]}>
                    <View>
                        <Text style={styles.textHeader}>热门搜索</Text>
                    </View>
                    <View style={{flexDirection: 'row',flexWrap: 'wrap', marginTop: 20}}>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>汉堡</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>双皮奶</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>烤冷面</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>尖椒煎饺</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>烤冷面</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>尖椒煎饺</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagCon} activeOpacity={1} onPress={this.handleToTag.bind(this)}>
                            <Text style={styles.greyTag}>奶茶</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  center: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  headerContainer: {
    // flex: 1,
    height: 60,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    height: 38,
    backgroundColor:'#f8f8f8',
    color:'#666',
    borderRadius: 20,
    padding: 10,
  },
  mainContainer: {
    // flex: 1
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "500",
  },
  tagCon: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    backgroundColor: '#f7f7f7',
    borderRadius: 5
  },
  greyTag: {
    color: '#666',
  }
});
