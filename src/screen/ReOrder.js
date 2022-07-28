import React, { useEffect, useState } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView, TouchableOpacity,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import NearYou from './NearYou';
import SearchBar from './SearchBar';
import List from './List';
import OfferSlide from './OfferSlide'
import StoreList from './StoreList'

import APP_URL from './../AppURL'
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const ReOrder = ({ navigation }) => {
  
  const [isLoading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  //  state = {
    // Data: []
  // }

 const componentDidMount = () =>{
  fetch(APP_URL.BaseURL + APP_URL.vendorSearch, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    Vendor_Name: 'mohan eye care ',
  })
  }).then((response) => response.json())
    .then((json) => {
    //  data = json
      ({Data: json})
    // console.log({Data: json});
  })
  .catch((error) => {
    console.error(error);
  });
  }


  useEffect(() => {
    componentDidMount();
  }, []);


  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headName } >Reorder</Text>
      </View>
      <StoreList header={'Order Again From'} nextScreen={'ReOrderCheckout'}></StoreList>
      <StoreList header={'Choose from'} nextScreen={'StoreDetails'}></StoreList>
    </ScrollView>

        
    );
  }
  
const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
      flexDirection:'row',
      justifyContent: 'center',
      height: 50,  
      borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
  },
  headName: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold'
  }
  });

export default ReOrder;