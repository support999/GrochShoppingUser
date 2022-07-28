import React, {useEffect, useState, createRef} from 'react';
import ActionSheet from 'react-native-actions-sheet';
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
import StoreBannerSlide from './StoreBannerSlide';

const StoreDetails = ({navigation, route}) => {
  // const actionSheetRef = createRef();
  const {item, productName, type} = route.params;
  const {
    shopName,
    ShopName,
    VendorAddress,
    vendorProducts,
    vendorOpeningTime,
    vendorClosingTime,
    VendorProducts,
    VendorId,
  } = type === 1 ? item : item.Vendor;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);
  const [checked, setChecked] = React.useState('first');

  const fetchData = async (productName, VendorId) => {
    setLoading(true);
    const res = await searchVendorProduct(productName, VendorId);
    setProducts(res);
    console.log(item);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(productName, VendorId);
    // vendorProductImage();
    // actionSheet2Ref.current?.setModalVisible(true);
  }, []);

  const performSearch = () => {
    fetchData(filter, VendorId);
  };

  const onChange = val => {
    setFilter(val);
    // console.log(val
  };
  const actionSheetRef = createRef();
  const actionSheet2Ref = createRef();

  const Action = ({navigation, item}) => (
    <ActionSheet ref={actionSheetRef}>
      <View style={{}}>
        <View style={[sheetStyle.sheetHead]}>
          <Text style={sheetStyle.headName}>Filter</Text>
        </View>

        <ScrollView
          style={{
            flexDirection: 'column',
            // display: 'flex',
            // flex: 1,
            marginLeft: 20,
          }}>
          <View style={[sheetStyle.subHead]}>
            <Text style={sheetStyle.subHeadName}>Categories</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View
              style={[
                sheetStyle.readio,
                {backgroundColor: '#F20505', borderColor: '#F20505'},
              ]}></View>
            <Text style={[sheetStyle.readioText, {color: '#F20505'}]}>
              Beauty & Hygiene
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Cleaning</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Beverages</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Food and Vegetables</Text>
          </View>
          <View style={[sheetStyle.subHead, {marginTop: 20}]}>
            <Text style={[sheetStyle.subHeadName]}>Brand</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View
              style={[
                sheetStyle.readio,
                {backgroundColor: '#F20505', borderColor: '#F20505'},
              ]}></View>
            <Text style={[sheetStyle.readioText, {color: '#F20505'}]}>
              Ammul
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Cocola</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Ifad</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Kazi Farmas</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Product On Offers</Text>
          </View>
          <TouchableOpacity
            style={[sheetStyle.checkoutBtn, {marginTop: 20}]}
            onPress={() => actionSheetRef.current?.setModalVisible(false)}>
            <Text style={[sheetStyle.checkoutText]}>Apply Filter</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ActionSheet>
  );
  const Action2 = ({navigation, item}) => (
    <ActionSheet ref={actionSheet2Ref}>
      <View style={{}}>
        <View style={[sheetStyle.sheetHead]}>
          <Text style={sheetStyle.headName}>Sorting</Text>
        </View>

        <ScrollView
          style={{
            // flexDirection: 'column',
            marginLeft: 20,
          }}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View
              style={[
                sheetStyle.readio,
                {backgroundColor: '#F20505', borderColor: '#F20505'},
              ]}></View>
            <Text style={[sheetStyle.readioText, {color: '#F20505'}]}>
              Price
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 20}}>
            <View style={[sheetStyle.readio]}></View>
            <Text style={[sheetStyle.readioText]}>Product</Text>
          </View>

          <TouchableOpacity
            style={[sheetStyle.checkoutBtn]}
            onPress={() => actionSheet2Ref.current?.setModalVisible(false)}>
            <Text style={[sheetStyle.checkoutText]}>Apply Filter</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ActionSheet>
  );
  const Filters = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            actionSheet2Ref.current?.setModalVisible(true);
          }}
          style={{
            height: 26,
            width: 73,
            borderRadius: 4,
            backgroundColor: '#E6E6E6',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons name="sort" color="#828282" size={16} />
          <Text
            style={{
              color: '#828282',
              fontSize: 13,
              marginLeft: 5,
              fontWeight: '400',
            }}>
            Sort
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            actionSheetRef.current?.setModalVisible(true);
          }}
          style={{
            height: 26,
            width: 73,
            borderRadius: 4,
            backgroundColor: '#FFC2C2',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
          }}>
          <AntDesign name="filter" color="#828282" size={16} />
          <Text
            style={{
              color: '#828282',
              fontSize: 13,
              marginLeft: 5,
              fontWeight: '400',
            }}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Buttons = () => {
    return (
      <View
        style={{
          width: '15%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <TouchableOpacity>
          <AntDesign name="message1" color="red" size={17} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="perm-phone-msg" color="black" size={17} />
        </TouchableOpacity>
      </View>
    );
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'column', width: '70%'}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={
                  (styles.storeName,
                  {
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 25,
                  })
                }>
                {shopName || ShopName}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.address}>
                {VendorAddress}
              </Text>
            </View>
            <Buttons />
          </View>

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

      <Action navigation={navigation} />
      <Action2 navigation={navigation} />
      <ScrollView>
        <StoreBannerSlide />
        <View style={styles.category}>
          <View style={styles.categorySectionHeader}>
            <Text style={styles.categorySectionHeaderCategory}>Categories</Text>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('CategoryModel')}>
              <Text style={styles.categorySectionHeaderBtn}>See All</Text>
            </TouchableOpacity> */}
          </View>

          <ScrollView
            contentContainerStyle={styles.categorySectionGrid}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            indicatorStyle={false}>
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
          </ScrollView>
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
            <Filters></Filters>
          </View>

          {loading ? (
            <View style={{marginTop: 40}}>
              <ActivityIndicator show={loading} size="large" />
            </View>
          ) : (
            <ScrollView style={styles.previousYouGrid}>
              <View style={styles.previousYouHeader}>
                <Text style={styles.categoryName}>Vegetables</Text>
              </View>
              {products?.map((item, index) => {
                if (index < 50) {
                  return (
                    <ProductListitem
                      key={index.toString()}
                      item={item}
                      index={index}
                      showBasket
                      discount
                      price
                      vendorId={VendorId}
                    />
                  );
                }
              })}
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const sheetStyle = StyleSheet.create({
  sheet: {
    position: 'absolute',
    top: '23%',
    height: '100%',
    width: '99%',
    backgroundColor: '#F2F3F2',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginLeft: 1,
    marginRight: 1,
  },
  sheetHead: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    width: '90%',
    marginLeft: '5%',
  },
  headName: {
    fontSize: 20,
    color: '#181725',
    fontWeight: '400',
  },
  subHead: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  subHeadName: {
    fontSize: 24,
    color: '#181725',
    fontWeight: '600',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  closeIcon1: {
    fontSize: 24,
    color: '#181725',
    fontWeight: '600',
  },
  sheetItem: {
    position: 'absolute',
    bottom: 1,
  },
  itemName: {
    fontSize: 18,
    color: '#7C7C7C',
  },
  righticon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  optn: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#181725',
  },
  right: {
    marginLeft: 15,
    marginTop: 6,
    fontSize: 15,
  },
  terms: {
    width: '80%',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    color: '#7C7C7C',
  },
  checkout: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 1,
  },
  checkoutBtn: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 18,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB3022',
    width: '80%',
    marginLeft: '10%',
    // position: 'absolute',
    bottom: 10,
    // marginTop: 120,
  },
  checkoutText: {
    // flex: 6,
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 18,
    // marginLeft:'12%'
  },
  priceBG: {
    position: 'relative',
    // flex: 1/2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: '4%',
    backgroundColor: '#BB0A0A',
    borderRadius: 5,
    left: 0,
  },
  priceInfo: {
    // width: '10%',
    padding: '2%',
    color: '#FCFCFC',
    fontSize: 12,
    fontWeight: '500',
  },
  readio: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    borderRadius: 8,
  },
  readioText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#181725',
    marginLeft: 12,
  },
});
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
    // borderBottomWidth: 1,
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
    // width: 23,
  },
  address: {
    fontSize: 12,
    color: '#7F7F7F',
    // display: 'block',
    // maxWidth: '50%',
    height: 18,
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
    justifyContent: 'space-between',
  },
  previousYouHeaderFevorit: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    width: '50%',
  },
  categoryName: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
    width: '50%',
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
