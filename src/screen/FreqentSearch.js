import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  StatusBar,
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

import {searchProductByName, searchVendorByProductName} from '../data/data';

import {
  ActivityIndicator,
  ProductListitem,
  VendorsNearbyListitem,
} from '../components';
import {addFrequentSearch, getFrequentSearch} from '../data/user';

const FreqentSearch = ({navigation}) => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [searchType, setSearchType] = useState('product');
  const [result, setResult] = useState([]);
  const [resultProduct, setResultProduct] = useState([]);
  const [filter, setFilter] = useState(null);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const [frequentSearch, setFrequentSearch] = useState(['beans']);

  // console.log(resultProduct.length);

  const fetchFrequent = async () => {
    const res = await getFrequentSearch();
    setFrequentSearch(res);
  };

  useEffect(() => {
    fetchFrequent();
  }, []);

  const fetchData = async filter => {
    setLoading(true);
    var res = [];
    // if (searchType === 'vendor') {
    //   res = await searchVendorByProductName(filter);
    //   setResult(res);
    // } else {
    res = await searchProductByName(filter);
    setResultProduct(res);
    // }
    setLoading(false);
    setIsFirstTime(false);

    // if the serach has result add , item to frequenst search
    if (res.length > 0) {
      // chech  if item is not already in frequent search

      try {
        const index = frequentSearch.findIndex(
          item => item.toLocaleLowerCase() === filter.toLocaleLowerCase(),
        );
        if (index < 0) addItemToFrequentSearch(filter);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const performSearch = () => {
    fetchData(filter);
  };

  const onChange = val => {
    setFilter(val);
    // console.log(val
  };

  const addItemToFrequentSearch = async item => {
    var tempSearch = [];
    // tempSearch = frequentSearch;
    tempSearch.push(item);
    Array.prototype.push.apply(tempSearch, frequentSearch);
    setFrequentSearch(tempSearch);
    await addFrequentSearch(tempSearch);
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.TOback}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.backIcon} name="left" color="black" />
        </TouchableOpacity>
        <Text
          style={[
            styles.storeName,
            {color: 'black', fontSize: 18, fontWeight: 'bold'},
          ]}></Text>
        {/* <Ionicons style={styles.closeIcon} name='close'  /> */}
      </View>

      {/* <View style={[styles.category, {marginBottom: -30}]}>
        <View style={styles.categorySectionHeader}>
          <Text style={styles.categorySectionHeaderCategory}>Filter</Text>
        </View>

        <View style={styles.categorySectionGrid}>
          <TouchableOpacity
            onPress={() => {
              setSearchType('product');
              setResult([]);
              setResultProduct([]);
            }}
            style={styles.categorySectionItem}>
            <View
              style={[
                styles.categoryItemLogoBG,
                {
                  backgroundColor:
                    searchType === 'product' ? '#FF0909' : '#fff',
                },
              ]}>
              <Text
                style={[
                  styles.categoryItemName,
                  {color: searchType === 'product' ? '#FFF' : '#000'},
                ]}>
                Product
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSearchType('vendor');
              setResult([]);
              setResultProduct([]);
            }}
            style={styles.categorySectionItem}>
            <View
              style={[
                styles.categoryItemLogoBG,
                {
                  backgroundColor: searchType === 'vendor' ? '#FF0909' : '#fff',
                },
              ]}>
              <Text
                style={[
                  styles.categoryItemName,
                  {color: searchType === 'vendor' ? '#FFF' : '#000'},
                ]}>
                Vendor
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}

      <SearchBar onChange={onChange} doSomething={performSearch} />

      <View>
        {!loading && (
          <View>
            <View style={styles.category}>
              <View style={styles.categorySectionHeader}>
                <Text style={styles.categorySectionHeaderCategory}>
                  Frequent Search
                </Text>
              </View>

              <View style={styles.categorySectionGrid}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {frequentSearch?.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index.toString()}
                        style={styles.categorySectionItem}
                        onPress={() => fetchData(item)}>
                        <View style={styles.categoryItemLogoBG}>
                          <Text style={styles.categoryItemName}>{item}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </View>

            {/* <View style={styles.category}>
              <View style={styles.categorySectionHeader}>
                <Text style={styles.categorySectionHeaderCategory}>
                  Popular Suggestions
                </Text>
              </View>

              <View style={styles.categorySectionGrid}>
                <TouchableOpacity style={styles.categorySectionItem}>
                  <View style={styles.categoryItemLogoBG}>
                    <Text style={styles.categoryItemName}>Meat</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categorySectionItem}>
                  <View style={styles.categoryItemLogoBG}>
                    <Text style={styles.categoryItemName}>Meat</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        )}

        {!loading && (
          <View style={styles.previousYou}>
            <View style={styles.previousYouHeader}>
              <Text style={styles.previousYouHeaderFevorit}>
                {!isFirstTime && searchType === 'vendor'
                  ? 'Product Results (' + result.length + ')'
                  : 'Product Results (' + resultProduct.length + ')'}
              </Text>
            </View>
          </View>
        )}
        {/* seacrch result  */}

        {loading ? (
          <View style={{marginTop: 40}}>
            <ActivityIndicator show={loading} size="large" />
          </View>
        ) : (
          <View>
            {/* show response for vendor search */}
            {searchType === 'vendor' ? (
              <FlatList
                ListEmptyComponent={
                  !isFirstTime && (
                    <Text
                      style={[
                        styles.categorySectionHeaderCategory,
                        {textAlign: 'center', marginTop: 20, opacity: 0.5},
                      ]}>
                      No item found for {filter}
                    </Text>
                  )
                }
                keyExtractor={(item, index) => index.toString()}
                data={result}
                renderItem={({item, index}) => {
                  return (
                    <VendorsNearbyListitem
                      key={index.toString()}
                      item={item}
                      index={index}
                    />
                  );
                }}
              />
            ) : (
              // show response for product search
              <FlatList
                style={styles.previousYouGrid}
                ListEmptyComponent={
                  !isFirstTime && (
                    <Text
                      style={[
                        styles.categorySectionHeaderCategory,
                        {textAlign: 'center', marginTop: 20, opacity: 0.5},
                      ]}>
                      No item found for {filter}
                    </Text>
                  )
                }
                keyExtractor={(item, index) => index.toString()}
                data={resultProduct}
                renderItem={({item, index}) => {
                  return (
                    <ProductListitem
                      key={index.toString()}
                      item={item}
                      index={index}
                    />
                  );
                }}
              />
            )}
          </View>
        )}
      </View>
      {/* {result.length === 0 && filter !== null && (
        <Text style={styles.categorySectionHeaderCategory}>
          No result found for {filter}
        </Text>
      )} */}

      {/* <View style={styles.previousYou}>
            
            <View style={styles.previousYouHeader}>
              <Text style={styles.previousYouHeaderFevorit}>From your previous order</Text>
            </View>
  
            <View style={styles.previousYouGrid}>
              <TouchableOpacity style={styles.previousYouItem} onPress={() => navigation.navigate('StoreDetails')}>
                <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                  <View style={styles.previousItemInfo}>
                    <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                    <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
  
                    <View style={styles.previousItemRSandBuy}>
                      <Text style={styles.previousItemRS}>RS 35</Text>
                      <View style={styles.previousItemBTN}>
                        <Text style={styles.previousItemBTNtext}>Add Basket</Text>
                      </View>
                    </View>  
                  </View>            
          </TouchableOpacity>
          <TouchableOpacity style={styles.previousYouItem} onPress={() => navigation.navigate('StoreDetails')}>
                <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                  <View style={styles.previousItemInfo}>
                    <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                    <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
  
                    <View style={styles.previousItemRSandBuy}>
                      <Text style={styles.previousItemRS}>RS 35</Text>
                      <View style={styles.previousItemBTN}>
                        <Text style={styles.previousItemBTNtext}>Add Basket</Text>
                      </View>
                    </View>  
                  </View>            
          </TouchableOpacity>
          <TouchableOpacity style={styles.previousYouItem} onPress={() => navigation.navigate('StoreDetails')}>
                <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                  <View style={styles.previousItemInfo}>
                    <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
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
      </View>
      
      <View style={styles.previousYou}>
            
            <View style={styles.previousYouHeader}>
              <Text style={styles.previousYouHeaderFevorit}>Rice & Oil</Text>
            </View>
  
            <ScrollView  style={styles.previousYouGrid}>
              <TouchableOpacity style={styles.previousYouItem} onPress={() => navigation.navigate('StoreDetails')}>
                <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                  <View style={styles.previousItemInfo}>
                    <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                    <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
  
                    <View style={styles.previousItemRSandBuy}>
                      <Text style={styles.previousItemRS}>RS 35</Text>
                      <View style={styles.previousItemBTN}>
                        <Text style={styles.previousItemBTNtext}>Add Basket</Text>
                      </View>
                    </View>  
                  </View>            
              </TouchableOpacity>
            </ScrollView >
      </View> */}
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
    paddingBottom: 20,
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
    marginLeft: 15,
    width: '80%',
  },
  storeName: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 29,
    fontWeight: 'bold',
    color: 'black',
  },
  closeIcon: {
    flex: 1,
    marginTop: 13,
    marginRight: 3,
    color: '#7F7F7F',
    fontSize: 23,
    textAlign: 'right',
  },
  greenText: {
    color: '#2C9309',
    fontSize: 12,
  },
  category: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    flexDirection: 'column',
    // flex: 1
  },
  categorySectionHeader: {
    flex: 1,
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
    marginTop: 30,
  },
  categorySectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width / 4,
  },
  categoryItemLogoBG: {
    height: 30,
    width: Dimensions.get('window').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    //   backgroundColor: '#FFECE8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FF0909',
  },
  bgColor1: {
    backgroundColor: '#54B175',
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
    marginTop: 1,
  },
  previousYouHeaderFevorit: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  previousYouGrid: {
    // flex: 1,
  },
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

export default FreqentSearch;
