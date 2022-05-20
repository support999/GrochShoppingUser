import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'; 
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide'
const { height, width } = Dimensions.get('screen')
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

const products = [
    {
        id: '13',
        price: '1kg',
        Rs: '4.99',
        quant: 1,
        DealTime: '04min 00 sec',
        name: 'Egg Chicken Red',
        URI:'./../assets/product1.png'
    },
    {
        id: '14',
        price: '1kg',
        Rs: '1.99',
        quant: 1,
        DealTime: '04min 00 sec',
        name: 'Egg Chicken Red',
        URI:'./../assets/product1.png'
    },
    {
        id: '15',
        price: '1kg',
        Rs: '3',
        quant: 1,
        DealTime: '04min 00 sec',
        name: 'Organic Bananas',
        URI:'./../assets/product1.png'
    },
    {
        id: '16',
        price: '1kg',
        Rs: '2.99',
        quant: 1,
        DealTime: '04min 00 sec',
        name: 'Ginger',
        URI:'./../assets/product1.png'
    },
    {
        id: '17',
        price: '1kg',
        Rs: '4.99',
        quant: 1,
        DealTime: '04min 00 sec',
        name: 'Bell Red',
        URI:'./../assets/product1.png'
    },
]

const Item = ({ item }) => (
    <TouchableOpacity style={[styles.item]}>
        <View style={[styles.itemImgBg]}>
        <Image style={styles.ItemLogo} source={require('./../assets/product1.png')} ></Image>
        </View>
        <View style={[styles.itemMid]}>
            <Text style={[styles.name]}>{item.name}</Text>
            <Text style={[styles.quant]}>{item.price}, Price</Text>
            <View style={[styles.btnSec]}>
                <TouchableOpacity style={[styles.dealBtn]}>
                    <Text style={[ styles.dealText]}>Get Deal</Text>
                    <Feather name="arrow-up-right" style={[styles.arrowIcon]} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.endSec]}>
            <TouchableOpacity style={[styles.closeIcon]} >
                <Ionicons style={styles.closeIcon1} name='md-pulse' />
                <Text style={[ styles.dealTime]}>{item.DealTime}</Text>
            </TouchableOpacity> 
            <Text style={[styles.totalPrice]}>{item.Rs} .Rs</Text>
        </View>
    
  </TouchableOpacity>
  );
  
const Deals = ({ navigation }) => {
    
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    
  return (        
        <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
              <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
              <Text style={[styles.headerName, {color : 'black', fontSize: 34, fontWeight: '900'}]} >Deals</Text>
          </View>


          <ScrollView style={styles.listConatainer}>
          <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
          </ScrollView>
          
        </View>
    );
  }
  
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
      borderBottomWidth: 1,
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
      marginRight: 13,
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
        flexDirection: 'row',
        marginTop: 12,
        borderBottomColor: '#F7F7F7',
        borderBottomWidth: 1,
        width: '85%',
        marginLeft:'5%'
        // width: '100%',
    },
    itemImgBg: {
        height: 75,
        width: 75,
        marginLeft: 10,
        marginTop: 20,
        flexDirection: 'column'
    },
    ItemLogo: {
        height: 65,
        width: 65,
        // flexDirection: 'column'
    },
    itemMid: {
        // flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        width: '50%'
    },
    name: {
        fontSize: 16,
        color: '#181725',
        fontWeight: 'bold',
        lineHeight: 18
    },
    quant: {
        marginTop: 4,
        fontSize: 14,
        lineHeight: 16,
        color: '#7C7C7C'
    },
    btnSec: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom:12
    },
    dealBtn: {
        backgroundColor: '#FFB439',
        borderRadius: 5,
        height: 25,
        width: 115,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    dealText:
    {
        color: '#000000',
        fontSize: 11,
        letterSpacing: 0.1,
        lineHeight: 27
    },
    
    minus: {
        // width: 45,
        // height: 45,
        // borderWidth: 1,
        // backgroundColor: '#fff',
        // borderRadius: 18,
        // alignItems: "center",
        // borderColor:'#E2E2E2',
        // justifyContent: 'center'
    },
    arrowIcon: {
        fontSize: 15,
        marginTop: 2,
        marginLeft: 8
    },
    add: {
        width: 45,
        height: 45,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 18,
        alignItems: "center",
        borderColor:'#E2E2E2',
        justifyContent: 'center'
    },
    addIcon: {
        fontSize: 25,
        color: '#DB3022'
    },
    quantNumb: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#181725",
        lineHeight: 18,
        marginRight: 12,
        marginLeft: 12
    },
    endSec: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 12
    },
    totalPrice: {
        color: '#181725',
        fontWeight:"bold",
        color: '#181725',
        marginBottom: 17,
        fontSize:18,
    },
    closeIcon: {
        marginRight:12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIcon1: {
        color: '#7F7F7F',
        fontSize: 23,
    },
    dealTime: {
        color: '#7C7C7C',
        fontSize: 11,
        lineHeight: 17,
        marginLeft: 4
    },

});

export default Deals;