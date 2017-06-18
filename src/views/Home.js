import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Button, 
         Image, 
         ScrollView, 
         RefreshControl, 
         TouchableOpacity, } from 'react-native';

import styles from '../assets/styles/Home';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';

import { Constants, Svg } from 'expo';

import Search from '../components/Search'
import Star from '../components/Star'
import ListItem from '../components/ListItemHome'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        text: 'search your food',
        isRefreshing: false,
    };
    this._onRefresh = this._onRefresh.bind(this);
  }

  componentWillMount() {
	
  }

  _onRefresh() {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
        console.log("refreshing done!")
        this.setState({ isRefreshing: false })
    }, 1000)
  }

  _onScroll() {
    
  }

  handleToInfoList(title) {
      console.log("clicked -> " + title)
  }
  render() {
    const {navigate} = this.props.navigation;

    const swiperList = [
        {
            img: 'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
            title: '甜品饮品',
            url: ''
        },{
            img: 'https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg',
            title: '美食',
            url: ''
        },{
            img: 'https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg',
            title: '准时达',
            url: ''
        },{
            img: 'https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg',
            url: '',
            title: '新店特惠'
        },{
            img: 'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg',
            url: '',
            title: '鲜花蛋糕'
        },{
            img: 'https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg',
            url: '',
            title: '包子粥店'
        },{
            img: 'https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg',
            url: '',
            title: '商超便利'
        },{
            img: 'https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg',
            url: '',
            title: '预订早餐'
        },{
            img: 'https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg',
            url: '',
            title: '果蔬生鲜'
        },{
            img: 'https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg',
            url: '',
            title: '简餐'
        },{
            img: 'https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg',
            url: '',
            title: '日韩料理'
        },{
            img: 'https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg',
            url: '',
            title: '川湘菜'
        },{
            img: 'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg',
            url: '',
            title: '汉堡薯条'
        },{
            img: 'https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg',
            url: '',
            title: '披萨意面'
        },{
            img: 'https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg',
            url: '',
            title: '土豪推荐'
        },{
            img: 'https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg',
            url: '',
            title: '麻辣烫'
        }
    ]

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigate('Search')}>
                <Search />
            </TouchableOpacity>
            
       
            <ScrollView
					style={styles.container}
					onScroll={this._onScroll.bind(this)}
					scrollEventThrottle={100}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={this._onRefresh}
							colors={['#666666']}
							tintColor="#666666"
							title="loading..."
							titleColor="#666666"
							progressBackgroundColor="white"
						/>
					}>     
                <Swiper height={200} horizontal={true} 
                    dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{bottom: 5}}>
                    <View style={styles.slide1}>
                        {
                            swiperList.slice(0,8).map((item, index) => (
                                <TouchableOpacity activeOpacity={0.9} onPress={this.handleToInfoList.bind(this, item.title)} key={index}>
                                    <View style={styles.swiperListItem}>
                                        <Image source={{ uri: item.img }} style={styles.listImage}></Image>
                                        <Text style={styles.listTitle}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style={styles.slide1}>
                        {
                            swiperList.slice(8).map((item, index) => (
                                <TouchableOpacity activeOpacity={0.9} onPress={this.handleToInfoList.bind(this, item.title)} key={index}>
                                    <View style={styles.swiperListItem}>
                                        <Image source={{ uri: item.img }} style={styles.listImage}></Image>
                                        <Text style={styles.listTitle}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </Swiper>

                <View style={styles.midContainer}>
                    <View style={[styles.midItem,{borderBottomWidth: .5,borderRightWidth:.5,borderBottomColor: '#eee',borderRightColor: '#eee'}]}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.textTitle}>热卖套餐</Text>
                            <Text style={[styles.smText,{marginTop:5}]}>附近畅销美食</Text>
                        </View>
                        <Image source={require('../assets/img/home01.png')} style={{width: 40,height: 40}}></Image>
                    </View>
                    <View style={[styles.midItem,{borderBottomWidth: .5,borderBottomColor: '#eee'}]}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.textTitle}>霸王餐</Text>
                            <Text style={[styles.smText,{marginTop:5}]}>领20元红包</Text>
                        </View>
                        <Image source={require('../assets/img/home02.png')} style={{width: 40,height: 40}}></Image>
                    </View>
                    <View style={[styles.midItem,{borderRightWidth: .5,borderRightColor: '#eee'}]}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.textTitle}>营养快餐</Text>
                            <Text style={[styles.smText,{marginTop:5}]}>15元吃饱</Text>
                        </View>
                        <Image source={require('../assets/img/home03.png')} style={{width: 40,height: 40}}></Image>
                    </View>
                    <View style={styles.midItem}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.textTitle}>不止5折</Text>
                            <Text style={[styles.smText,{marginTop:5}]}>周五半价日</Text>
                        </View>
                        <Image source={require('../assets/img/home04.png')} style={{width: 40,height: 40}}></Image>
                    </View>
                </View>

                <View style={styles.recommendContainer}>
                    <View style={styles.groupHeader}>
                        <Text style={styles.textHeader}>推荐商家</Text>
                    </View>
                    <TouchableOpacity key={1} activeOpacity={1} onPress={() => navigate('Search')}>
                        <ListItem />
                    </TouchableOpacity>
                    <TouchableOpacity key={2} activeOpacity={1} onPress={() => navigate('Search')}>
                        <ListItem />
                    </TouchableOpacity>
                    <TouchableOpacity key={3} activeOpacity={1} onPress={() => navigate('Search')}>
                        <ListItem />
                    </TouchableOpacity>
                    <TouchableOpacity key={4} activeOpacity={1} onPress={() => navigate('Search')}>
                        <ListItem />
                    </TouchableOpacity>
                    <TouchableOpacity key={5} activeOpacity={1} onPress={() => navigate('Search')}>
                        <ListItem />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
      
    );
  }
}


