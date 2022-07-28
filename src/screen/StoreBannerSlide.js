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

const imageW = width - 10;
const imageH = imageW * 1.54;
import {AuthContext} from '../context/AuthProvider';
import {getVendorBanner} from '../data/data';

const StoreBannerSlide = () => {
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
                  source={require('./../assets/storebanner.png')}>
                  <View style={styles.overTextOfferBox}>
                    <Text style={styles.overTextOffer}>15% Discount</Text>
                  </View>
                </ImageBackground>
              );
            })
          : // display thi sif banner is empy
            data?.map((item, index) => {
              return (
                <ImageBackground
                  key={index.toString()}
                  style={styles.backgroundImg}
                  imageStyle={{borderRadius: 10}}
                  source={require('./../assets/storebanner.png')}
                  //   source={item.bannerImageurl}
                >
                  <View style={styles.overTextOfferBox}>
                    <Text style={styles.overTextOffer}>15% Discount</Text>
                  </View>
                </ImageBackground>
              );
            })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    borderRadius: 15,
    width: '96%',
    marginLeft: '2%',
  },
  backgroundImg: {
    height: 122,
    width: '100%',
    paddingLeft: 0,
    marginLeft: 0,
    borderRadius: 15,
  },
  overTextOfferBox: {
    width: 120,
    marginTop: 10,
    backgroundColor: '#FF6B6B',
    borderTopRightRadius: 5,
    borderBottomEndRadius: 5,
    height: 26,
    justifyContent: 'center',
  },
  overTextOffer: {
    fontWeight: '400',
    fontSize: 14,
    color: 'white',
    marginLeft: 15,
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

export default StoreBannerSlide;
