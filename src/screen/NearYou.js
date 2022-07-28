import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {vendorProductImage, vendorsNearby} from '../data/data';
import {AuthContext} from '../context/AuthProvider';
import {VendorsNearbyListitem} from '../components';

const NearYou = () => {
  const navigation = useNavigation();
  const {vendorsNearBy, setVendorsNearBy, location} = useContext(AuthContext);

  const fetchData = async () => {
    const res = await vendorsNearby(location);

    setVendorsNearBy(res);
  };

  useEffect(() => {
    if (location !== null) {
      fetchData();
    }
  }, [location]);

  return (
    <View style={styles.storeNearYou}>
      <View style={styles.storeNearYouHeader}>
        <Text style={styles.storeNearYouHeaderFevorit}>
          All Stores Near You
        </Text>
        <Text style={styles.fevoritSectionHeaderHistory}>See All</Text>
      </View>

      <View style={styles.storeNearYouGrid}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {vendorsNearBy?.map((item, index) => {
            if (index < 6)
              return (
                <VendorsNearbyListitem
                  key={index.toString()}
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              );
          })}
        </ScrollView>

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
    marginTop: 10,
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
    height: 30,
    marginTop: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  storeNearYouHeaderFevorit: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'left',
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
});

export default NearYou;
