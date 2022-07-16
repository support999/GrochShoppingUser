import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide'
import Chart from './Chart';
const { height, width } = Dimensions.get('screen')
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const Help = ({navigation}) => {

  return (        
        <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
              <AntDesign style={styles.backIcon} name="left" color="black" />
              </TouchableOpacity>
              
              <View style={{ flexDirection: "row", justifyContent:'space-between'}}>
                  <View>
                      <Text style={[styles.headerName, { color: 'black', fontSize: 19, fontWeight: '900' }]} >Hi, user Name1 </Text>
                      <Text style={[styles.headerName, {color : '#E5E5E5', fontSize: 11, fontWeight: 'bold'}]} >Dec 21, 2021 </Text>
                  </View>
                  <View style={{ height: 50, width: 50, marginRight:20, borderRadius: 25}}>
                      <Image style={{ height: 50, width: 50, borderRadius:25}} source={require('./../assets/shopLogo.png')} ></Image>
                  </View>
                
              </View>
              
          </View>

        <ScrollView>
        <StoreList navigation={navigation} header={'This Month'}></StoreList>
            <View style={[{ height: 310,width: '95%', marginLeft:'2.5%', borderRadius:25, marginBottom: 20 }, stylesList.shadow]}>
                <Text style={{fontSize: 15, color:'#151522', fontWeight: '600', marginTop:28,marginLeft: 12}}>Expense</Text>
                <View style={[ { justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginLeft: 12,marginRight: 12, marginTop:12}]}>
                      <Text style={[{ justifyContent:'center', paddingLeft: 12, marginLeft: 12,color: '#FF0606', marginLeft: 12, borderBottomColor: '#FF0606', borderBottomWidth: 4, width :70}]}>Sales</Text>
                    <Text style={[stylesList.fevoritSectionHeaderHistory, {justifyContent:'center', paddingRight: 12,color: '#FF0606', marginRight: 12, borderBottomColor: '#FF0606', borderBottomWidth: 4, width :70}]}>Orders</Text>
                  </View>
                  
                  <Chart></Chart>
            </View>      
        </ScrollView>
          
          
        </View>
    );
  }
  const StoreList = ({ header, nextScreen, navigation }) => {
    // console.log('this is from props #################################################'+ header)
//   const navigation = useNavigation();
  return (        
          <View style={stylesList.storeNearYou}>
            
            <View style={stylesList.storeNearYouHeader}>
              <Text style={stylesList.storeNearYouHeaderFevorit}>{header}</Text>
              <Text style={stylesList.fevoritSectionHeaderHistory}>View All</Text>
            </View>
  
            <View style={stylesList.storeNearYouGrid}>
              
              <TouchableOpacity style={[stylesList.storeNearYouItem, stylesList.shadow]} onPress={() => navigation.navigate('Actionsheet')}>
                
              </TouchableOpacity>
        
              <TouchableOpacity style={[stylesList.storeNearYouItem, stylesList.shadow]} onPress={() => navigation.navigate(nextScreen)}>
                
              </TouchableOpacity>
              <TouchableOpacity style={[stylesList.storeNearYouItem, stylesList.shadow]} onPress={() => navigation.navigate(nextScreen)}>
              </TouchableOpacity>
          </View>
          
          
          </View>
    );
  }
  
const stylesList = StyleSheet.create({
storeNearYou: {
    marginLeft: 15,
    marginRight: 15,
},
storeNearYouHeader: {
    flexDirection: 'row',
    height: 30,
    marginTop: 1,
    marginLeft: '5%',
    width: '90%'
},
storeNearYouHeaderFevorit: {
    flex: 1,
    fontSize: 14,
    color: '#222222',
    textAlign: 'left',
    // height: 50
    },
    fevoritSectionHeaderHistory: {
        // flex: 1,
        fontSize: 14,
        color: '#2D9CDB',
        textAlign: 'right',
        height: 30
    },
storeNearYouGrid: {
    // flex: 1,
},
storeNearYouItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 25,
    flexDirection: 'row',
    height: 87,
    backgroundColor:'#F7F7F7'
},
storeNearItemLogo: {
    height: 75,
    width: 75,
    borderRadius: 19,
    marginLeft: 10,
    marginTop: 10

},
storeNearItemDetails: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    flex: 1
},
storeNearItemName: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 'bold',
},
storeNearItemAddress: {
    color: '#000000',
    fontSize: 12,
    lineHeight: 22,

},
storeNearItemDistance: {
    color: '#7F7F7F',
    fontSize: 12,
    lineHeight: 22,

},
storeNearItemActive: {
    color: '#2C9309',
    fontSize: 12,
    lineHeight: 22,
    fontWeight:'500',
    marginLeft: 5

},
storeNearItemRatingDive1: {
    flexDirection: 'row',
    flex: 1
},
storeNearItemRatingDive2: {
    color: '#FFBA49',
    flex: 1,
    flexDirection: 'row',
    
},
storeNearItemRatingText: {
//  marginLeft: 1 
    color: 'white',
    marginLeft: 3,
    marginTop: 1,
    fontSize: 10,
},
storeNearItemRating: {
    marginLeft: 13,
    marginTop: -3,
    marginTop: 3,
    color: 'white',
    fontSize: 10,
    height: 12
},
storeNearItemActiveCount: {
    flexDirection: 'row',
    backgroundColor: '#2C9309',
    height: 20,
    width: 53,
    borderRadius: 5,
    color: 'white',
    fontSize: 11,
    marginBottom: 3
},
storeNearItemTime: {
    marginLeft: 5,
    color: '#FF0909',
    fontSize: 9
},
storeNearItemDis: {
    flex:1  ,
    width: 20,
    marginLeft: 70
},
storeNearItemDisIcons: {
    flexDirection: 'row',
    textAlign: 'center'
},

storeNearItemDisLable1: {
    backgroundColor: '#2C9309',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: 'white',
    marginBottom: 1,
    paddingLeft: 5,
    height: 20,
    fontSize: 10
    // paddingTop: 3
},
storeNearItemDisLable2: {
    backgroundColor: '#EA2C2C',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: 'white',
    paddingLeft: 5,
    height: 20,
    // paddingTop: 3,
    fontSize: 10, 
    marginBottom: 12
},
storeNearItemRating1: {
    fontSize: 18,
    color: 'black',
    flex: 1
    },
shadow: {
    borderRadius:0,
    shadowColor: "black",
    shadowOffset: {
        width: 10,
        height: 10,
    },
    shadowOpacity: 8.27,
    shadowRadius: 1.65,
    elevation: 6,
}
});
const styles = StyleSheet.create({
    main: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'column',
      width: '90%',
      marginLeft: '5%',
      borderBottomColor: '#F7F7F7',
      paddingBottom: 20
    },
    TOback: {
    //   flexDirection: 'column'
    },
    backIcon: {
      fontSize: 22,
      color: 'black',
      fontWeight: '600',
    },
    headerDetails: {
      marginLeft: 15,
      width: '80%'
    },
    headerName: {
      marginLeft: 2,
      marginTop: 10,
      fontSize: 1,
      fontWeight: '900',
      color: 'black'
    },
  closeIcon: {
      flex: 1,
      marginTop: 13,
      marginRight: 3,
      color: '#7F7F7F',
      fontSize: 23,
      textAlign: 'right'
      
    },
    listContainer: {
        flex: 1,
        flexDirection: 'column',
        // width: '100%',
        width: width,
        marginLeft: '5%',
        marginTop: '5%'
    },
    item: {
        borderBottomColor: '#F7F7F7',
		borderBottomWidth: 1,
        marginTop: 10,
        height: '10%',
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        width: '100%',
        fontWeight: '400',
    },
    AntDesign: {
        fontSize: 16,
        color: '#9B9B9B',
        textAlign: 'right'
    },
    itemDetails: {
        fontSize: 11,
        color: '#9B9B9B',
    },
    itemNameIcon: {
        // flex: 1,
        flexDirection:"row"
    }

});

export default Help;