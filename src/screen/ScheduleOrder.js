import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView, TouchableOpacity, Button, Platform} from 'react-native';
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
import DateTimePicker from '@react-native-community/datetimepicker';

import APP_URL from './../AppURL'
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

// const DateTimePicker = require('@react-native-community/datetimepicker');

const ScheduleOrder = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [Time, setTime] = useState('00:00:00');
  const [day, setDay] = useState('today');
 
  console.log(date)
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    console.log(date)

    let tempDate = new Date(currentDate)
    let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let ftime = tempDate.getHours() + ':' + tempDate.getMinutes() + " " 
    setTime(ftime)
    setDay(fdate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


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
  const products = [
    {
        id: '13',
        storename: 'store name 1',
        price: '1kg',
        Rs: '4.99',
        quant: 1,
        name: 'Bell Pepper Red',
        URI:'./../assets/product1.png'
    },
    // {
    //     id: '14',
    //     price: '1kg',
    //     Rs: '1.99',
    //     quant: 1,
    //     name: 'Egg Chicken Red',
    //     URI:'./../assets/product1.png'
    // },
    // {
    //     id: '15',
    //     price: '1kg',
    //     Rs: '3',
    //     quant: 1,
    //     name: 'Organic Bananas',
    //     URI:'./../assets/product1.png'
    // },
    // {
    //     id: '16',
    //     price: '1kg',
    //     Rs: '2.99',
    //     quant: 1,
    //     name: 'Ginger',
    //     URI:'./../assets/product1.png'
    // },
    // {
    //     id: '17',
    //     price: '1kg',
    //     Rs: '4.99',
    //     quant: 1,
    //     name: 'Bell Red',
    //     URI:'./../assets/product1.png'
    // },
]
  const Item = ({ item }) => (
    <TouchableOpacity style={[styles.item]}>
        <View style={[styles.itemImgBg]}>
        <Image style={styles.ItemLogo} source={require('./../assets/product1.png')} ></Image>
        </View>
        <View style={[styles.itemMid]}>
            <Text style={[styles.name]}>{item.storename}</Text>
              <Text style={[styles.quant]}>{item.name}</Text>
              <Text style={[styles.quant]}> <FontAwesome5 name="rupee-sign" style={[styles.quant ,{fontSize: 9}]} /> {item.Rs} </Text>
            
        </View>
        {/* <View style={[styles.endSec]}>
            <TouchableOpacity style={styles.closeIcon} >
                <Ionicons style={styles.closeIcon1} name='close' />
            </TouchableOpacity> 
            <Text style={[styles.totalPrice]}>{item.Rs} .Rs</Text>
        </View> */}
    
  </TouchableOpacity>
    );
    
  useEffect(() => {
    componentDidMount();
  }, []);

  const renderItem = ({ item }) => (
    <Item item={item} />
    );

    const Shceduler = () => (
        <View style={[ { marginLeft: '4%'}]}>
            <Text style={{fontSize:16, fontWeight:'600', color:'#000000', marginLeft:15}}>Select the Time Slot</Text>
            <View style={[styles.shadow, {justifyContent: 'center', marginLeft: '1%',width: '99%',  width: '90%',marginLeft:'2.5%', marginTop:'10%', height: 210}]}>
              <TouchableOpacity onPress={showDatepicker} style={{ flexDirection: 'row', marginTop:16, alignItems:"center", justifyContent:"flex-start", marginLeft: 20, marginRight: 20}}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#000000', }}>Date</Text>
                <Text style={{ fontSize: 14, color: '#000000', marginLeft: 100 }}>{day}</Text>
                <Text style={{fontSize:22,  color:'#000000', marginLeft: 125}}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={showTimepicker} style={{ flexDirection: 'row', marginTop:16, alignItems:"center", justifyContent:"flex-start", marginLeft: 20, marginRight: 20}}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#000000' }}>Time</Text>
                <Text style={{ fontSize: 14, color: '#000000', marginLeft: 100 }}>{Time}</Text>
                <Text style={{fontSize:22,  color:'#000000', marginLeft: 34}}>.</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', marginTop:16, alignItems:"center", justifyContent:"flex-start", marginLeft: 20, marginRight: 20}}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#000000' }}>Address</Text>
                <Text style={{ fontSize: 14, color: '#000000', marginLeft: 75}}>Home</Text>
                <Text style={{fontSize:22,  color:'#000000', marginLeft: 120}}>.</Text>
              </View>
          
              <View style={{ flexDirection: 'row',marginTop:16, alignItems:"center", justifyContent:"center", marginLeft: 20, marginRight: 20}}>
                <View style={{ height:36, width: 245, backgroundColor:'#DB3022', justifyContent:'center',alignItems:"center", borderRadius:7}}>
                  <Text style={{fontSize: 18, color: '#FFFFFF', fontWeight:"600",}}>Schedule Order</Text>
                </View>
              </View>

        </View>
        {show && (
          <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        </View>
    )
    

  return (
    <View style={styles.main}>
     <View style={styles.header}>
        <TouchableOpacity  style={styles.backbtn} onPress={() => navigation.goBack()}>
            <AntDesign style={styles.AntDesign} name="left" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Schedule your order</Text>
          </View>
          
          <View style={styles.listConatainer}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
          </View>
          
      <Shceduler></Shceduler>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>   
    );
  }
  
const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'center'
},
backbtn: {
    flex: 1/2,
    flexDirection: 'column',
    justifyContent: 'flex-start'
     
},
AntDesign: {
    marginLeft: 15,
    marginLeft: 5,
    fontSize: 21,
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
    alignItems: "flex-start",
    textAlign: 'left'
},
headerText: {
        marginTop: 3,
        fontSize: 18,
        marginLeft: 12,
        fontWeight: 'bold',
        color: "black",
        flex: 2,
        // numberOfLines: 1,
},
listConatainer: {
    marginTop: '3%'
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
    marginLeft: 40,
    width: '60%',
    justifyContent: 'center'
},
name: {
    fontSize: 16,
    color: '#181725',
    fontWeight: 'bold',
    lineHeight: 18
},
quant: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    color: '#000000'
},
btnSec: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: 'center',
    marginBottom:12
},
    
minus: {
    width: 45,
    height: 45,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: "center",
    borderColor:'#E2E2E2',
    justifyContent: 'center'
},
minusIcon: {
    fontSize: 25
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
    // marginRight: 12
},
totalPrice: {
    color: '#181725',
    fontWeight:"bold",
    color: '#181725',
    marginBottom: 17
},
closeIcon: {
    justifyContent: 'center',
    alignItems: 'center'
},
closeIcon1: {
    color: '#7F7F7F',
    fontSize: 23,  
  },
  shadow: {
    borderRadius:5,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.27,
    shadowRadius: 1.65,
    elevation: 6,
}
  });

export default ScheduleOrder;