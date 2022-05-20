import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView, FlatList,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
const { height, width } = Dimensions.get('screen')

const data = [
  {
    id: 1,
    offer: "30 % Discount",
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: "30 % Discount",
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: "39 % Discount",
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
]
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

const imageW = width ;
const imageH = imageW * 1.54;

const OfferSlide = () => {
  return (        
    <View style={styles.slideContainer}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            // <View style={{ width, alignItems: 'center' }}>
            //   <ImageBackground style={styles.backgroundImg}  imageStyle={{ borderRadius: 6}} source={require('./../assets/slide1.png')}>
            //     <View style={styles.overTextOfferBox}>
            //       <Text style={styles.storeNearItemDisLable1}>{item.offer}</Text>  
            //     </View>
            //   </ImageBackground>
            // </View>
            
            <View style={{ width, alignItems: 'center' }}>
              <ImageBackground style={styles.backgroundImg}  imageStyle={{ borderRadius: 0}} source={require('./../assets/slide1.png')}>
                
              </ImageBackground>
            </View>
          )
        }}
      />
    
  </View>
    );
  }
  
const styles = StyleSheet.create({
  slideContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  backgroundImg: {
    height: 110,
    borderRadius: 5,
    width: imageW,
    paddingLeft: 0,
    marginLeft: 0,
    marginTop:5
  },
  overTextOfferBox:{
    width: 160,
    marginTop: 70,
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
  marginBottom: 12
}
});

export default OfferSlide;