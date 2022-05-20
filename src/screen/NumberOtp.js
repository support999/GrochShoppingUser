import React, {useState} from 'react';
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

const NumberOtp = ({ navigation }) => {
    const [isShow, setisShow] = useState(true);
    const change = () => {
        setisShow(!isShow);
    }
  return (        
        <View style={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
                <AntDesign style={styles.backIcon} name="left" color="black" />
                </TouchableOpacity>
                <Text style={[styles.headerName, {color : 'black', fontSize: 26, fontWeight: '900'}]} >Enter your mobile number</Text>
                {/* <Ionicons style={styles.closeIcon} name='close'  /> */}
          </View>
          
          {isShow ? 
                <View style={{ justifyContent: 'center', textAlign: 'center', alignItems: "center" }}>
                    <Text style={{
                        fontSize: 16, color: '#7C7C7C', fontWeight: "600", alignSelf: 'flex-start', marginLeft: 25, marginTop:12}}>Mobile Number</Text>
                    <View style={{marginTop: 3, borderBottomColor: 'gray', borderBottomWidth: 1, width: '80%',flexDirection:"row" }}>
                        <Text style={{marginTop: 12, color: '#030303', fontSize:18, }}>+ 91</Text>
                        <TextInput style={{ color: '#030303', fontSize:18, }} />
                    </View>

                    <TouchableOpacity onPress={()=> change()} style={{alignSelf: 'flex-end', marginTop:'50%',marginRight:30, justifyContent: 'center', borderRadius: 50, alignItems:'center', backgroundColor:'#EA2C2C', height: 67, width: 67 }}>
                        <MaterialIcons name="arrow-forward-ios" size={24} color="#FFF9FF" />
                    </TouchableOpacity>
                </View>
              : (
                <View style={{ justifyContent: 'center', textAlign: 'center', alignItems: "center" }}>
                    <Text style={{
                        fontSize: 16, color: '#7C7C7C', fontWeight: "600", alignSelf: 'flex-start', marginLeft: 25, marginTop:12}}>Code</Text>
                    <View style={{marginTop: 3, borderBottomColor: 'gray', borderBottomWidth: 1, width: '80%',flexDirection:"row" }}>
                        {/* <Text style={{marginTop: 12, color: '#030303', fontSize:18, }}>+ 91</Text> */}
                        <TextInput placeholder='-- -- -- --' style={{ color: '#030303', fontSize:18, }} />
                    </View>

                      <View style={{marginTop:'50%', flexDirection: 'row', justifyContent: 'space-between', alignItems:"center",width: '100%'}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('UserDashboard')} style={{ justifyContent: 'center',marginLeft:20, alignItems:'center', height: 67, width: 110 }}>
                            <Text style={{marginTop: 12, color: '#EA2C2C', fontSize:18, }}>Resend Code</Text>
                        </TouchableOpacity>
                      
                        <TouchableOpacity onPress={()=> change()} style={{ justifyContent: 'center', borderRadius: 50, alignItems:'center', backgroundColor:'#EA2C2C', height: 67, width: 67, marginRight:19 }}>
                            <MaterialIcons name="arrow-forward-ios" size={24} color="#FFF9FF" />
                        </TouchableOpacity>
                    </View>
                    
                </View>  
              )
          }
            
          
          
          
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
        top: '30%',
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

export default NumberOtp;