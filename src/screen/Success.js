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
const Success = ({navigation}) => {

  return (        
        <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
              <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
              <Text style={[styles.headerName, {color : 'black', fontSize: 34, fontWeight: '900'}]} ></Text>
              {/* <Ionicons style={styles.closeIcon} name='close'  /> */}
          </View>


            <View style={styles.listContainer}>
              <View style={styles.item}>
                  <View style={styles.successItemLogoBg}>
                    <Image style={styles.successItemLogo} source={require('./../assets/right.png')} ></Image>
                  </View>
                  <Text style={styles.successText}>Order Successfully Placed</Text>
              </View>

                <TouchableOpacity>
                  <Text style={styles.trackText}>Track Status </Text>
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
      color: '#7F7F7F',
      fontSize: 23,
      textAlign: 'right'
      
    },
    listContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  item: {
      marginBottom: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    successItemLogoBg: {
        backgroundColor: 'red',
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 40
    },
    successItemLogo: {
        // height: 30,
        // width: 30,
    },
    successText: {
        color: '#000000',
        fontSize: 24,
        // fontWeight: 'bold'
    },
    trackText: {
        color: '#FF0909',
        fontSize: 18,
        lineHeight: 18
    }

});

export default Success;