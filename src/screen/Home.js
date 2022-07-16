import React, {useEffect, useContext, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import NearYou from './NearYou';
import SearchBar from './SearchBar';
import List from './List';
import Header from './Header';
import OfferSlide from './OfferSlide';
import ShopsCategory from './ShopsCategory';
import TopPick from './TopPick';

import APP_URL from './../AppURL';
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import {
  addToBasket,
  fetchCategory,
  fetchHistory,
  getBasket,
} from '../data/data';
import {AuthContext} from '../context/AuthProvider';

const Home = ({navigation}) => {
  // console.log(moment().format('YYYY:MM:DD'));
  const {
    setBasket,
    basket,
    reloadBasket,
    setBadge,
    setPayableAmount,
    refreshFlatlist,
    setRefreshFlatList,
    orders,
    setOrders,
    reloadOrder,
    setReloadOrder,
  } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  //  state = {
  // Data: []
  // }

  const fetchData = async () => {
    const res = await getBasket();
    setBasket(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChange = val => {
    navigation.navigate('FreqentSearch');
  };

  useEffect(() => {
    if (basket?.length > 0) {
      calculateTotalPrice();
      setRefreshFlatList(!refreshFlatlist);
      addToBasket(basket);
    }
  }, [basket, reloadBasket]);

  //   calcate the total of all items in the bag
  const calculateTotalPrice = () => {
    var totatPayableAMount = 0;
    var totatQty = 0;

    for (const iterator of basket) {
      const {price, quantity} = iterator;
      totatPayableAMount += price;
      totatQty += quantity;
    }
    setPayableAmount(totatPayableAMount);
    setBadge(totatQty);
  };

  useEffect(() => {
    if (reloadOrder) getOrderHistory();
  }, [reloadOrder]);

  const getOrderHistory = async () => {
    const orederRes = await fetchHistory(12);
    setOrders(orederRes);
    setReloadOrder(false);
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar />
      <View style={styles.container}>
        <Header />

        <SearchBar showText onChange={onChange} />
        <OfferSlide />

        <ScrollView style={{padding: 0, margin: 0, flex: 1}}>
          <Favorit />
          <ShopsCategory />
          <TopPick />
          <NearYou />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    // flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  Ionicons: {
    marginLeft: 15,
    marginLeft: 5,
    fontSize: 26,
  },
  text: {
    fontSize: 18,
    marginLeft: 12,
    fontWeight: 'bold',
    color: 'black',
    // numberOfLines: 1,
  },
  AntDesign: {
    fontSize: 18,
    marginTop: 7,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  MaterialIcons1: {
    fontSize: 26,
    flex: 1,
    textAlign: 'right',
  },
  MaterialIcons: {
    fontSize: 26,
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
    marginTop: 5,
  },
  searchInput: {
    // flex: 1,
    height: 50,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#000000',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 30,
    flex: 4,
    padding: 0,
    marginTop: -4,
    marginLeft: 15,
    fontSize: 15,
    color: 'black',
  },
  miceIcon: {
    flex: 1,
    textAlign: 'right',
    color: '#EB3223',
  },
  slideContainer: {
    // flex: 1,
    height: 180,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  backgroundImg: {
    // flex: 1,
    // width: '100%',
    height: 180,
    borderRadius: 5,
  },
  overTextOfferBox: {
    width: 160,
    marginTop: 70,
    // marginLeft: 20,
  },
  overTextOffer: {
    lineHeight: 37,
    fontWeight: '600',
    fontSize: 35,
    color: 'white',
  },
  storeNearItemDisLable1: {
    backgroundColor: '#FF6B6B',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: 'white',
    paddingTop: 3,
    paddingLeft: 10,
    fontWeight: 'bold',
    height: 27,
    width: 110,
    fontSize: 13,
    marginBottom: 12,
  },
});

export default Home;
