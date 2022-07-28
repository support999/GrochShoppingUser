import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octions from 'react-native-vector-icons/Octicons';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide';
const {height, width} = Dimensions.get('screen');
import {ScrollView, StatusBar, useColorScheme} from 'react-native';

const products = [
  {
    id: '13',
    price: '1kg',
    Rs: '4.99',
    quant: 1,
    DealTime: '04min 00 sec',
    name: '20 % off on Beverages',
    vendorName: 'Vendor Name 1',
    URI: './../assets/product1.png',
    likes: 23,
    liked: false,
  },
  {
    id: '14',
    price: '1kg',
    Rs: '1.99',
    quant: 1,
    name: '20 % off on Beverages',
    vendorName: 'Vendor Name 1',
    DealTime: '04min 00 sec',
    URI: './../assets/product1.png',
    likes: 23,
    liked: true,
  },
  {
    id: '15',
    price: '1kg',
    Rs: '30',
    quant: 1,
    vendorName: 'Vendor Name 1',
    DealTime: '04min 00 sec',
    name: '20 % off on Beverages',
    URI: './../assets/product1.png',
    likes: 23,
    liked: true,
  },
  {
    id: '16',
    price: '1kg',
    Rs: '2.99',
    quant: 1,
    vendorName: 'Vendor Name 1',
    DealTime: '04min 00 sec',
    name: '20 % off on Beverages',
    URI: './../assets/product1.png',
    likes: 23,
    liked: false,
  },
  {
    id: '17',
    price: '1kg',
    Rs: '4.99',
    quant: 1,
    vendorName: 'Vendor Name 1',
    DealTime: '04min 00 sec',
    name: 'Bell Red 20 % off on Beverages',
    URI: './../assets/product1.png',
    likes: 23,
    liked: false,
  },
];

const Item = ({item}) => (
  <View style={[styles.item]}>
    <View style={[styles.itemImgBg]}>
      <Text style={[styles.name]}>{item.name}</Text>
      <Text style={[styles.Vname]}>{item.vendorName}</Text>
      <Image
        style={styles.ItemLogo}
        source={require('./../assets/product1.png')}></Image>
    </View>
    <View style={[styles.itemMid]}>
      {/* <Text style={[styles.quant]}>{item.price}, Price</Text> */}
      <View style={[styles.btnSec]}>
        <TouchableOpacity style={[styles.dealBtn]}>
          <Text style={[styles.dealText]}>Get Deal</Text>
          <Feather name="arrow-up-right" style={[styles.arrowIcon]} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={[styles.endSec]}>
      <TouchableOpacity style={[styles.closeIcon]}>
        <Ionicons style={styles.closeIcon1} name="md-pulse" />
        <Text style={[styles.dealTime]}>{item.DealTime}</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginRight: 12,
        }}>
        <Text style={[styles.totalPrice, {color: '#2C9309'}]}>
          <FontAwesome name="rupee" size={12} />
          {item.Rs}
        </Text>
        <Text style={[styles.totalPrice, {textDecorationLine: 'line-through'}]}>
          <FontAwesome name="rupee" size={12} />
          {item.Rs}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 12,
          width: 70,
        }}>
        {item.liked ? (
          <TouchableOpacity>
            <FontAwesome name="thumbs-o-up" size={22} color="#2C9309" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <FontAwesome name="thumbs-up" size={22} color="#2C9309" />
          </TouchableOpacity>
        )}

        <Text style={[styles.totalPrice, {color: '#2C9309'}]}>
          {item.likes}
        </Text>
        <TouchableOpacity>
          <FontAwesome name="thumbs-o-down" color="#EA2C2C" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Deals = ({navigation}) => {
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.TOback}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.backIcon} name="left" color="black" />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerName,
            {
              color: '#181725',
              fontSize: 20,
              fontWeight: '700',
              alignSelf: 'center',
              justifyContent: 'center',
            },
          ]}>
          Offers
        </Text>
        <TouchableOpacity>
          <Octions name="sort-desc" color={'black'} size={22} />
        </TouchableOpacity>
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
};

const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TOback: {
    //   flexDirection: 'column'
    // alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  backIcon: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  headerDetails: {
    marginLeft: 15,
    width: '80%',
  },
  headerName: {
    marginLeft: 2,
    marginTop: 10,
    fontSize: 1,
    fontWeight: '900',
    color: 'black',
    alignSelf: 'center',
  },
  closeIcon: {
    flex: 1,
    marginTop: 13,
    marginRight: 13,
    color: '#7F7F7F',
    fontSize: 23,
    textAlign: 'right',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    // width: '100%',
    width: width,
    // marginLeft: '5%',
    // marginTop: '5%',
  },
  item: {
    flexDirection: 'row',
    marginTop: 12,
    borderBottomColor: '#F7F7F7',
    // borderBottomWidth: 1,
    width: '95%',
    marginLeft: '2.5%',
    // width: '100%',
    backgroundColor: '#FBFAFA',
    // backgroundColor: 'gray',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  itemImgBg: {
    height: 75,
    width: '35%',
    marginLeft: 10,
    flexDirection: 'column',
  },
  ItemLogo: {
    height: 65,
    width: 65,
    // flexDirection: 'column'
  },
  itemMid: {
    // flex: 1,
    flexDirection: 'column',
    // marginLeft: 20,
    width: '35%',
  },
  name: {
    fontSize: 12,
    color: '#7C7C7C',
    fontWeight: '500',
    width: 150,
  },
  Vname: {
    fontSize: 12,
    color: '#7C7C7C',
    fontWeight: '500',
    width: 140,
  },
  quant: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 16,
    color: '#7C7C7C',
  },
  btnSec: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dealBtn: {
    backgroundColor: '#FFE4E1',
    borderRadius: 5,
    height: 25,
    width: 115,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  dealText: {
    color: '#000000',
    fontSize: 11,
    letterSpacing: 0.1,
    lineHeight: 27,
    fontWeight: '400',
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
    marginLeft: 8,
  },
  add: {
    width: 45,
    height: 45,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    borderColor: '#E2E2E2',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 25,
    color: '#DB3022',
  },
  quantNumb: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    lineHeight: 18,
    marginRight: 12,
    marginLeft: 12,
  },
  endSec: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // marginRight: 12,
    width: '30%',
    // marginLeft: ,
  },
  totalPrice: {
    color: '#7C7C7C',
    fontWeight: '500',
    marginBottom: 17,
    fontSize: 13,
  },
  closeIcon: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon1: {
    color: '#7F7F7F',
    fontSize: 23,
  },
  dealTime: {
    color: '#7C7C7C',
    fontSize: 11,
    lineHeight: 17,
    marginLeft: 4,
  },
});

export default Deals;
