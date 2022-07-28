import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
const {height, width} = Dimensions.get('screen');

const data = [
  {
    id: 1,
    offer: '30 % Discount',
    bannerImageurl: require('./../assets/slide1.png'),
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: '30 % Discount',
    bannerImageurl: require('./../assets/slide1.png'),
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: '39 % Discount',
    bannerImageurl: require('./../assets/slide1.png'),
    vendorId: '12313',
    offerID: '32423',
  },
];
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import Swiper from 'react-native-swiper';

const imageW = width;
const imageH = imageW * 1.54;
import {AuthContext} from '../context/AuthProvider';
import {getVendorBanner} from '../data/data';

const GroceryOfferSlide = () => {
  const {setLocation, location} = useContext(AuthContext);
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    if (location !== null) fetchData();
  }, [location]);

  const fetchData = async () => {
    const res = await getVendorBanner({lat: 23.2164638, lng: 77.389849}, 1);
    setBanner(res);
    // console.log(res);
  };

  return (
    <View style={styles.slideContainer}>
      <Swiper
        autoplay
        dot={
          <View
            style={{
              backgroundColor: 'gray',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginBottom: -13,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#F20505',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              width: 18,
              marginBottom: -13,
              // display: 'none',
            }}
          />
        }>
        {/* display this if the banner from api has data */}
        {banner?.length > 0
          ? banner?.map((item, index) => {
              return (
                <ImageBackground
                  key={index.toString()}
                  style={styles.backgroundImg}
                  imageStyle={{borderRadius: 0}}
                  //   source={{ uri: item.bannerImageurl }}
                  source={require('./../assets/banner.png')}></ImageBackground>
              );
            })
          : // display thi sif banner is empy
            data?.map((item, index) => {
              return (
                <ImageBackground
                  key={index.toString()}
                  style={styles.backgroundImg}
                  imageStyle={{borderRadius: 0}}
                  source={require('./../assets/banner.png')}
                  //   source={item.bannerImageurl}
                ></ImageBackground>
              );
            })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    height: 120,
    width: '96%',
    marginLeft: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backgroundImg: {
    height: 120,
    marginTop: -1,
    borderRadius: 5,
    width: imageW,
    paddingLeft: 0,
    marginLeft: 0,
    padding: 0,
  },
  overTextOfferBox: {
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
    marginBottom: 12,
  },
});

export default GroceryOfferSlide;
