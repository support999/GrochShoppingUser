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
              <Text style={[styles.headerName, {color : 'black', fontSize: 34, fontWeight: '900'}]} >Help</Text>
              {/* <Ionicons style={styles.closeIcon} name='close'  /> */}
          </View>


            <View style={styles.listContainer}>
              <TouchableOpacity style={styles.item}>
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>General Issues</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
                  <Text style={styles.itemDetails}>Placing Order, Loggin Issue</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
                  <Text style={styles.itemName}>Offer Issues</Text>
                  <Text style={styles.itemDetails}>Coupon, Offers</Text>
                  <AntDesign style={styles.AntDesign} name="right" color="black" />
                {/* </TouchableOpacity> */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.item}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
                  <Text style={styles.itemName}>Payment</Text>
                  <Text style={styles.itemDetails}>Pytem, Debit Card, Credit Card</Text>
                  <AntDesign style={styles.AntDesign} name="right" color="black" />
                {/* </TouchableOpacity> */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.item}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
                  <Text style={styles.itemName}>Refund</Text>
                  <Text style={styles.itemDetails}>Current Order Refunds, Cancellation</Text>
                  <AntDesign style={styles.AntDesign} name="right" color="black" />
                {/* </TouchableOpacity> */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.item}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
                  <Text style={styles.itemName}>Legal</Text>
                  <Text style={styles.itemDetails}>Terms of Use, Privacy Policy</Text>
                  <AntDesign style={styles.AntDesign} name="right" color="black" />
                {/* </TouchableOpacity> */}
              </TouchableOpacity>
            </View>
          
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