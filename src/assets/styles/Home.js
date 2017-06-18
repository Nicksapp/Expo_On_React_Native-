import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;  // 屏幕宽度

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  rowFlex: {
    flexDirection: 'row'
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
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  groupHeader: {
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: .5
  },
  textHeader: {
      fontSize: 16,
      fontWeight: "500",
  },
  textTitle: {
      fontSize: 15,
      fontWeight: "500",
  },
  midContainer: {
      marginTop: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff'
  },
  midItem: {
      flexDirection: 'row',
      width: width/2,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,
  },
  smText: {
      color: '#999',
      fontSize: 10,
  },
});