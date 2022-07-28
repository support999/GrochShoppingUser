import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {searchVendorByProductId} from '../data/data';
import {AuthContext} from '../context/AuthProvider';
import {ActivityIndicator, VendorsNearbyListitem} from '../components';
import Geolocation from 'react-native-geolocation-service';
import {hasLocationPermission} from '../util/util';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBar from './SearchBar';

const NearYou = ({route}) => {
  const {location} = useContext(AuthContext);
  // console.log(location);
  const {productId, productName} = route.params;

  const navigation = useNavigation();
  const [vendorsNearBy, setVendorsNearBy] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const fetchData = async () => {
    const res = await searchVendorByProductId(productId, location);
    //sconsole.log('From Vendor ', res);
    setVendorsNearBy(res);
    setLoading(false);
  };

  useEffect(() => {
    // getLocation();
    // vendorProductImage();
  }, []);

  useEffect(() => {
    // console.log(location);
    if (location !== null) {
      fetchData();
    }
  }, [location]);

  return (
    <View style={styles.storeNearYou}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.TOback}
          onPress={() => navigation.goBack()}>
          <AntDesign
            size={25}
            style={styles.backIcon}
            name="left"
            color="black"
          />
        </TouchableOpacity>

        {/* <Ionicons style={styles.closeIcon} name='close'  /> */}
      </View>
      <SearchBar showText2 />
      <Text
        style={{
          fontSize: 14,
          fontWeight: '400',
          color: '#9B9B9B',
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10,
        }}>
        Stores Near you
      </Text>
      <View style={styles.storeNearYouHeader}>
        <Text style={styles.storeNearYouHeaderFevorit}>
          There are {vendorsNearBy.length} stores near you... {productName}
        </Text>
      </View>

      <View style={styles.storeNearYouGrid}>
        {!loading && vendorsNearBy.length > 0 ? (
          <ScrollView showsHorizontalScrollIndicator={false}>
            {vendorsNearBy?.map((item, index) => {
              return (
                <VendorsNearbyListitem
                  key={item.Vendor.VendorId}
                  item={item}
                  index={index}
                  navigation={navigation}
                  productName={productName}
                />
              );
            })}
          </ScrollView>
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            {loading ? (
              <ActivityIndicator size={'large'} show={loading} />
            ) : (
              <Text style={{fontSize: 18}}>No Vendors Found</Text>
            )}
          </View>
        )}
        {/* <TouchableOpacity
          style={styles.storeNearYouItem}
          onPress={() => navigation.navigate('StoreDetails')}>
          <Image
            style={styles.storeNearItemLogo}
            source={require('./../assets/shopLogo.png')}></Image>
          <View style={styles.offerBox}>
            <Text style={styles.offerBigText}>Free Delivery + 30% OFF</Text>
            <Text style={styles.offerSmallText}>~ Rs 30 Onwards ~</Text>
          </View>
          <View style={styles.storeNearItemDetails}>
            <View style={styles.storeNearItemInfo}>
              <Text style={styles.storeNearItemName}>
                Jain kirana store Jain kirana store Jain kirana store
              </Text>
              <Text style={styles.storeNearItemAddress}>
                Vendor store address
              </Text>

              <View style={{flexDirection: 'row'}}>
                <FontAwesome style={styles.storeNearItemRating} name="star" />
                <Text style={styles.storeNearItemDistance}> 3.5</Text>
                <Text style={styles.storeNearItemDistance}> 1.5 km</Text>
              </View>

              <View style={styles.storeNearItemTimeDiv}>
                <Text style={styles.storeNearItemActive}>Now Open</Text>
                <Text style={styles.storeNearItemTime}>Close at: 10:00 pm</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.storeNearItemDis}>
              <MaterialIcons style={styles.storeNearItemRating1} name="phone" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          style={styles.storeNearYouItem}
          onPress={() => navigation.navigate('StoreDetails')}>
          <Image
            style={styles.storeNearItemLogo}
            source={require('./../assets/shopLogo.png')}></Image>
          <View style={styles.offerBox}>
            <Text style={styles.offerBigText}>Free Delivery + 30% OFF</Text>
            <Text style={styles.offerSmallText}>~ Rs 30 Onwards ~</Text>
          </View>
          <View style={styles.storeNearItemDetails}>
            <View style={styles.storeNearItemInfo}>
              <Text style={styles.storeNearItemName}>
                Jain kirana store Jain kirana store Jain kirana store
              </Text>
              <Text style={styles.storeNearItemAddress}>
                Vendor store address
              </Text>

              <View style={{flexDirection: 'row'}}>
                <FontAwesome style={styles.storeNearItemRating} name="star" />
                <Text style={styles.storeNearItemDistance}> 3.5</Text>
                <Text style={styles.storeNearItemDistance}> 1.5 km</Text>
              </View>

              <View style={styles.storeNearItemTimeDiv}>
                <Text style={styles.storeNearItemActive}>Now Open</Text>
                <Text style={styles.storeNearItemTime}>Close at: 10:00 pm</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.storeNearItemDis}>
              <MaterialIcons style={styles.storeNearItemRating1} name="phone" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.storeNearYouItem}
          onPress={() => navigation.navigate('StoreDetails')}>
          <Image
            style={styles.storeNearItemLogo}
            source={require('./../assets/shopLogo.png')}></Image>
          <View style={styles.offerBox}>
            <Text style={styles.offerBigText}>Free Delivery + 30% OFF</Text>
            <Text style={styles.offerSmallText}>~ Rs 30 Onwards ~</Text>
          </View>
          <View style={styles.storeNearItemDetails}>
            <View style={styles.storeNearItemInfo}>
              <Text style={styles.storeNearItemName}>
                Jain kirana store Jain kirana store Jain kirana store
              </Text>
              <Text style={styles.storeNearItemAddress}>
                Vendor store address
              </Text>

              <View style={{flexDirection: 'row'}}>
                <FontAwesome style={styles.storeNearItemRating} name="star" />
                <Text style={styles.storeNearItemDistance}> 3.5</Text>
                <Text style={styles.storeNearItemDistance}> 1.5 km</Text>
              </View>

              <View style={styles.storeNearItemTimeDiv}>
                <Text style={styles.storeNearItemActive}>Now Open</Text>
                <Text style={styles.storeNearItemTime}>Close at: 10:00 pm</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.storeNearItemDis}>
              <MaterialIcons style={styles.storeNearItemRating1} name="phone" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storeNearYou: {
    flex: 1,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // flexDirection: 'column'
  },
  storeNearYouHeader: {
    flexDirection: 'row',
  },
  storeNearYouHeaderFevorit: {
    fontSize: 11,
    color: '#7C7C7C',
    fontWeight: '600',
    textAlign: 'left',
    margin: 10,
    marginTop: 0,
    lineHeight: 20,
    // height: 50
  },
  fevoritSectionHeaderHistory: {
    // flex: 1,
    fontSize: 14,
    color: 'rgba(255, 107, 107, 1)',
    textAlign: 'right',
    height: 30,
  },
  storeNearYouGrid: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  storeNearYouItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderColor: '#FF0909',
    borderRadius: 20,
    flexDirection: 'row',
    // height: 100
  },
  storeNearItemLogo: {
    height: 90,
    width: 90,
    // borderRadius: 19,
    borderTopLeftRadius: 19,
    borderBottomRightRadius: 19,
    marginLeft: 10,
    marginTop: 10,
  },
  offerBox: {
    marginTop: 20,
    height: 69,
    width: 80,
    marginLeft: -12,
    borderTopLeftRadius: 19,
    borderBottomRightRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  offerBigText: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 2.5,
    alignSelf: 'center',
    marginLeft: 7,
  },
  offerSmallText: {
    fontSize: 8,
    lineHeight: 15,
    fontWeight: '600',
    color: '#000000',
  },
  storeNearItemDetails: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
  },
  storeNearItemName: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 'bold',
    width: Dimensions.get('window').width - 240,
    height: 20,
  },
  storeNearItemAddress: {
    color: '#000000',
    fontSize: 12,
    lineHeight: 22,
    width: Dimensions.get('window').width - 240,
  },
  storeNearItemDistance: {
    color: '#7F7F7F',
    fontSize: 12,
    lineHeight: 22,
  },
  storeNearItemActive: {
    color: '#2C9309',
    fontSize: 9,
    fontWeight: '500',
    marginLeft: 5,
  },
  storeNearItemTimeDiv: {
    flexDirection: 'row',
    flex: 1,
  },
  storeNearItemRatingDive2: {
    color: '#FFBA49',
    flex: 1,
    flexDirection: 'row',
  },
  storeNearItemRatingText: {
    //  marginLeft: 1
    color: 'white',
    marginLeft: 3,
    marginTop: 1,
    fontSize: 10,
  },
  storeNearItemRating: {
    marginLeft: 13,
    marginTop: 4,
    color: '#FFBA49',
    fontSize: 12,
    height: 12,
  },
  storeNearItemActiveCount: {
    flexDirection: 'row',
    backgroundColor: '#2C9309',
    height: 20,
    width: 53,
    borderRadius: 5,
    color: 'white',
    fontSize: 11,
    marginBottom: 3,
  },
  storeNearItemTime: {
    marginLeft: 5,
    color: '#FF0909',
    fontSize: 9,
  },
  storeNearItemDis: {
    alignSelf: 'flex-end',
  },
  storeNearItemDisIcons: {
    flexDirection: 'row',
    textAlign: 'center',
  },

  storeNearItemDisLable1: {
    backgroundColor: '#2C9309',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: 'white',
    marginBottom: 1,
    paddingLeft: 5,
    height: 20,
    fontSize: 10,
    // paddingTop: 3
  },
  storeNearItemDisLable2: {
    backgroundColor: '#EA2C2C',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: 'white',
    paddingLeft: 5,
    height: 20,
    // paddingTop: 3,
    fontSize: 10,
    marginBottom: 12,
  },
  storeNearItemRating1: {
    fontSize: 18,
    height: 19,
    width: 19,
    color: 'black',
    flex: 1,
    alignSelf: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    borderBottomColor: '#F7F7F7',
    // borderBottomWidth: 1,
    // paddingBottom: 20,
  },
  TOback: {
    flexDirection: 'column',
    marginTop: 12,
  },
});

export default NearYou;
