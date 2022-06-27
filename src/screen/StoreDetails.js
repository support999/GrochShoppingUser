import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide';

import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import {ActivityIndicator, ProductListitem} from '../components';
import {searchVendorProduct} from '../data/data';

const StoreDetails = ({navigation, route}) => {
  const {item, productName} = route.params;
  const {
    shopName,
    ShopName,
    vendorAddress,
    vendorProducts,
    vendorOpeningTime,
    vendorClosingTime,
    VendorProducts,
    VendorId,
  } = item.Vendor;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  const fetchData = async (productName, VendorId) => {
    setLoading(true);
    const res = await searchVendorProduct(productName, VendorId);
    setProducts(res);
    setLoading(false);
    // console.log(res);
  };

  useEffect(() => {
    fetchData(productName, VendorId);
    // vendorProductImage();
  }, []);

  const performSearch = () => {
    fetchData(filter, VendorId);
  };

  const onChange = val => {
    setFilter(val);
    // console.log(val
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.TOback}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.backIcon} name="left" color="black" />
        </TouchableOpacity>
        <View style={styles.headerDetails}>
          <Text
            style={
              (styles.storeName,
              {color: 'black', fontSize: 18, fontWeight: 'bold'})
            }>
            {shopName || ShopName}
          </Text>
          <Text style={styles.address}>{vendorAddress}</Text>
          <View style={styles.SubHeader}>
            <View style={styles.StoreRating}>
              <FontAwesome style={styles.ratingIcon} name="star" />
              <Text style={styles.address}>4.2</Text>
            </View>
            <Text style={styles.address}>Delivery in 40 mins</Text>
            <Text style={(styles.address, styles.greenText)}>Pickup Only</Text>
          </View>
        </View>
      </View>

      <SearchBar onChange={onChange} doSomething={performSearch} />

      <OfferSlide></OfferSlide>

      <ScrollView>
        <View style={styles.category}>
          <View style={styles.categorySectionHeader}>
            <Text style={styles.categorySectionHeaderCategory}>Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CategoryModel')}>
              <Text style={styles.categorySectionHeaderBtn}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categorySectionGrid}>
            <TouchableOpacity
              style={styles.categorySectionItem}
              onPress={() => navigation.navigate('SearchProduct')}>
              <View style={[styles.categoryItemLogoBG, styles.bgColor1]}>
                <Image
                  style={styles.categoryItemLogo}
                  source={require('./../assets/Veg.png')}></Image>
              </View>
              <Text style={styles.categoryItemName}>Vegetables</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categorySectionItem}
              onPress={() => navigation.navigate('SearchProduct')}>
              <View style={[styles.categoryItemLogoBG, styles.bgColor]}>
                <Image
                  style={styles.categoryItemLogo}
                  source={require('./../assets/Vector(1).png')}></Image>
              </View>
              <Text style={styles.categoryItemName}>Fruits</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categorySectionItem}
              onPress={() => navigation.navigate('SearchProduct')}>
              <View style={[styles.categoryItemLogoBG, styles.bgColor2]}>
                <Image
                  style={styles.categoryItemLogo}
                  source={require('./../assets/Vector(2).png')}></Image>
              </View>
              <Text style={styles.categoryItemName}>Milk & Eggs</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categorySectionItem}
              onPress={() => navigation.navigate('SearchProduct')}>
              <View style={[styles.categoryItemLogoBG, styles.bgColor2]}>
                <Image
                  style={styles.categoryItemLogo}
                  source={require('./../assets/Vector-Copy.png')}></Image>
              </View>
              <Text style={styles.categoryItemName}>Meat</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.previousYou}>
          <View style={styles.previousYouHeader}>
            <Text style={styles.previousYouHeaderFevorit}>
              From your previous order
            </Text>
          </View>

          <View style={styles.previousYouGrid}>
            <TouchableOpacity
              style={styles.previousYouItem}
              onPress={() => navigation.navigate('StoreDetails')}>
              <Image
                style={styles.previousItemLogo}
                source={require('./../assets/product1.png')}></Image>
              <View style={styles.previousItemInfo}>
                <Text style={styles.previousItemName}>
                  American Garden U.S. Peanut Butter Chunky
                </Text>
                <Text style={styles.previousItemPriceQtt}>60/ kg</Text>

                <View style={styles.previousItemRSandBuy}>
                  <Text style={styles.previousItemRS}>RS 35</Text>
                  <View style={styles.previousItemBTN}>
                    <Text style={styles.previousItemBTNtext}>Add Basket</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View> */}

        <View style={styles.previousYou}>
          <View style={styles.previousYouHeader}>
            <Text style={styles.previousYouHeaderFevorit}>Store Products</Text>
          </View>

          {loading ? (
            <View style={{marginTop: 40}}>
              <ActivityIndicator show={loading} size="large" />
            </View>
          ) : (
            <ScrollView style={styles.previousYouGrid}>
              {products?.map((item, index) => {
                return (
                  <ProductListitem
                    key={index.toString()}
                    item={item.Product}
                    index={index}
                    showBasket
                  />
                );
              })}
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
  },
  TOback: {
    flexDirection: 'column',
  },
  backIcon: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    marginTop: '60%',
  },
  headerDetails: {
    flex: 1,
    marginLeft: 15,
  },
  storeName: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'black',
  },
  address: {
    fontSize: 12,
    color: '#7F7F7F',
  },
  SubHeader: {
    marginTop: 4,
    marginBottom: '4%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  StoreRating: {
    flexDirection: 'row',
  },
  ratingIcon: {
    marginTop: 3,
    marginRight: 3,
    color: '#FFBA49',
  },
  greenText: {
    color: '#2C9309',
    fontSize: 12,
  },
  category: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 18,
    flexDirection: 'column',
    // flex: 1
  },
  categorySectionHeader: {
    // flex: 1,
    flexDirection: 'row',
    marginTop: 0,
  },
  categorySectionHeaderCategory: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#22292E',
    textAlign: 'left',
    height: 30,
  },
  categorySectionHeaderBtn: {
    // flex: 1,
    fontSize: 14,
    color: '#54B175',
    textAlign: 'right',
    height: 30,
  },
  categorySectionGrid: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // marginTop: 30
  },
  categorySectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width / 5,
  },
  categoryItemLogoBG: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFECE8',
  },
  bgColor1: {
    backgroundColor: '#47CA19',
  },

  bgColor2: {
    backgroundColor: '#FFF6E4',
  },
  bgColor3: {
    backgroundColor: '#F1EDFC',
  },
  categoryItemLogo: {
    borderRadius: 25,
    width: 20,
  },
  categoryItemName: {
    color: '#22292E',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 8,
  },
  categoryItemDistance: {
    color: '#7F7F7F',
    fontSize: 12,
    lineHeight: 22,
  },
  categoryItemRating: {
    height: 12,
    width: 12,
    color: '#FFBA49',
  },
  previousYou: {
    marginLeft: 15,
    marginRight: 15,
  },
  previousYouHeader: {
    flexDirection: 'row',
    height: 30,
  },
  previousYouHeaderFevorit: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  previousYouGrid: {},
  previousYouItem: {
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row',
    height: 100,
  },
  previousItemLogo: {
    height: 55,
    width: 55,
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'column',
  },
  previousItemInfo: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: 'column',
    flex: 1,
  },
  previousItemName: {
    color: '#4D4D4D',
    fontSize: 14,
    width: '80%',
  },
  previousItemPriceQtt: {
    color: '#9B9B9B',
    fontSize: 10,
    lineHeight: 13,
    marginTop: 5,
    marginBottom: 5,
  },
  previousItemRSandBuy: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 6
  },
  previousItemRS: {
    color: '#222222',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  previousItemBTN: {
    height: 26,
    width: 106,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FF0909',
    marginRight: '8%',
    // textAlign: 'right'
  },
  previousItemBTNtext: {
    fontSize: 12,
    color: '#FF0909',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 3,
  },
});

export default StoreDetails;
