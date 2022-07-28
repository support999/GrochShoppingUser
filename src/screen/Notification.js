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
const Notification = ({navigation}) => {

  return (        
        <View style={styles.main}>
          <View style={styles.header}>
            {/* <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
              <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity> */}
              <Text style={[styles.headerName, {color : 'black', fontSize: 34, fontWeight: '900'}]} >Notification</Text>
              {/* <Ionicons style={styles.closeIcon} name='close'  /> */}
          </View>


            <View style={styles.listContainer}>
              <TouchableOpacity style={[styles.item, styles.bgColor1]}>
                <View style={styles.itemCol1}>
                  <Image style={styles.ItemLogo , {height: 40, width: 40}} source={require('./../assets/peice.png')}></Image>
                </View>
                <View style={styles.itemCol2}>
                    <Text style={styles.itemName}>Almost done!</Text>
                    <Text style={styles.itemDetails }>Complete registration of your business profile to start work.</Text>
                </View>
                <View style={styles.itemCol3}>
                  <Ionicons style={ {fontSize: 16}} name='close' />
                </View>
              </TouchableOpacity>

              <TouchableOpacity  style={[styles.item, styles.bgColor2]}>
                <View style={styles.itemCol1}>
                  <Image style={styles.ItemLogo , {height: 40, width: 40}} source={require('./../assets/peice.png')}></Image>
                </View>
                <View style={styles.itemCol2}>
                    <Text style={styles.itemName}>Almost done!</Text>
                    <Text style={styles.itemDetails }>Complete registration of your business profile to start work.</Text>
                </View>
                <View style={styles.itemCol3}>
                  <Ionicons style={ {fontSize: 16}} name='close' />
                </View>
        </TouchableOpacity>
        
        <TouchableOpacity  style={[styles.item, styles.bgColor3]}>
                <View style={styles.itemCol1}>
                  <Image style={styles.ItemLogo , {height: 40, width: 40}} source={require('./../assets/peice.png')}></Image>
                </View>
                <View style={styles.itemCol2}>
                    <Text style={styles.itemName}>Almost done!</Text>
                    <Text style={styles.itemDetails }>Complete registration of your business profile to start work.</Text>
                </View>
                <View style={styles.itemCol3}>
                  <Ionicons style={ {fontSize: 16}} name='close' />
                </View>
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
    height: 106,
    borderRadius: 24,
    width: '90%',
    flexDirection: "row",
    marginTop: 12
  },
  itemCol1: { flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: 70 },
  itemCol2:{flexDirection: "column", justifyContent: 'center', flexDirection: 'column' , flex:3},
    itemName: {fontSize: 16.5, fontWeight: '500', color:"#1A1A25"},
    AntDesign: {
        fontSize: 16,
        color: '#9B9B9B',
        textAlign: 'right'
    },
    itemDetails: {
      fontSize: 13, color: '#1A1A25',
      },
    itemNameIcon: {
        // flex: 1,
        flexDirection:"row"
  },
  itemCol3: { flexDirection: "column", justifyContent: 'center', alignItems: 'center', flex: 1 },
  bgColor1:{
    backgroundColor: '#FFBEBE',
  },
  bgColor2:{
    backgroundColor: '#69D843',
  },
  bgColor3:{
    backgroundColor: '#FDEBE0',
    }

});

export default Notification;