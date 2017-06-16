import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Button, 
         Image, 
         ScrollView, 
         RefreshControl, 
         TouchableOpacity, 
         Dimensions,} from 'react-native';
import Swiper from 'react-native-swiper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';

import Search from '../components/Search'

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
     
            <Search />
       
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
                <Swiper  height={200} horizontal={true} 
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

                <View style={styles.recommendContainer}>
                    <View style={styles.groupHeader}>
                        <Text style={styles.textHeader}>推荐商家</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('Search')}>
                        <View style={styles.cellContainer}>
                            <View style={{flex: 1}}>
                                <Image style={{flex: 1}}  source={{uri: 'http://images.cangdu.org/15c644f3580142.jpeg'}}></Image>
                            </View>
                            <View style={{flex: 4, flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5}}>
                                    <Text style={styles.textTitle}>食欲中西简餐</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.textRed}>4.4</Text>
                                        <Text style={[styles.textGrey,{fontSize: 10,marginLeft: 5,marginTop: 3}]}>月售516单</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={[styles.textGrey,styles.textSizeMid]}>￥30起送 / 配送费￥3 </Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={[styles.textLightGrey,styles.textSizeMid]}>855m / </Text>
                                            <Text style={[styles.textBlue,styles.textSizeMid]}>48分钟</Text>  
                                        </View>
                                    </View>    
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </View>
      
    );
  }
}

const width = Dimensions.get('window').width;  // 屏幕宽度

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  slide1: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4'
  },
  swiperListItem: {
    width: width/4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  listImage: {
    width: 42,
    height: 42,
    marginBottom: 10
  },
  listTitle: {
    color: '#666',
    fontSize: 12
  },

  recommendContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e4e4e4',
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  groupHeader: {
    padding: 10,
  },
  textHeader: {
      fontSize: 16,
      fontWeight: "500",
  },
  textTitle: {
      fontSize: 15,
      fontWeight: "500",
  },
  cellContainer: {
      flexDirection: 'row',
      height: 80,
      paddingBottom: 10,
      paddingLeft: 5,
      paddingRight: 5,
  },

  textRed: {
      color: '#ff6000'
  },
  textGrey: {
      color: '#666'
  },
  textBlue: {
      color: '#3190e8'
  },
  textLightGrey: {
      color: '#999'
  },
  textSizeMid: {
      fontSize: 12
  }
});
