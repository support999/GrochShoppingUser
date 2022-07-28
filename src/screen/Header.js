import React, {useEffect, useState, useContext} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Alert,
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
import OfferSlide from './OfferSlide';
import ShopsCategory from './ShopsCategory';
import TopPick from './TopPick';

import APP_URL from './../AppURL';
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import {decodeLocationByCoordinates, hasLocationPermission} from '../util/util';
import {AuthContext} from '../context/AuthProvider';

const Header = ({}) => {
  const {setLocation, location} = useContext(AuthContext);
  const navigation = useNavigation();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location !== null) decodeLatLng();
  }, [location]);

  const decodeLatLng = async () => {
    // console.log(location);
    const add = await decodeLocationByCoordinates(location);

    var streetNumber = add?.streetNumber;
    var streetName = add?.streetName;
    var adminArea = add?.adminArea;

    // console.log('street name', streetName);
    // var {streetName, adminArea} = add;
    var fullAddress = '';
    if (streetNumber && streetNumber !== null) fullAddress = streetNumber;
    if (streetName && streetName !== undefined) fullAddress += ' ' + streetName;
    if (adminArea !== null) fullAddress += adminArea;

    setAddress(fullAddress);
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      async position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(pos);
        console.log(pos);
      },
      error => {
        Alert.alert('Unable to decode your loation');
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: false,
        forceLocationManager: false,
      },
    );
  };

  return (
    <View style={styles.header}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={styles.appHeadLogo}
          source={require('./../assets/GHlogo.png')}></Image>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.locationBtn}
            onPress={() => navigation.navigate('SearchLocation')}>
            <Ionicons name="location" size={25} color="#EB3223" />
            <Text style={styles.text}>{address}</Text>
            <AntDesign style={styles.AntDesign} name="down" color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('UserOption')}>
            {/* <MaterialIcons style={styles.MaterialIcons} name="perm-contact-calendar" color="#EB3223" /> */}
            <Ionicons
              style={styles.MaterialIcons}
              name="ios-person-circle"
              size={24}
              color="#EB3223"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appHeadLogo: {
    height: 42,
    width: 71,
  },
  locationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Ionicons: {
    fontSize: 26,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    width: 220,
    fontSize: 12.5,
    // numberOfLines: 1,
  },
  AntDesign: {
    fontSize: 18,
    marginTop: 7,
    fontWeight: 'bold',
  },
  MaterialIcons1: {
    fontSize: 26,
    margin: 5,
  },
  MaterialIcons: {
    fontSize: 30,
    margin: 5,
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

export default Header;
