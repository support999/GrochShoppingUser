import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  addToBag,
  addToBasket,
  fetchCategory,
  searchVendorByProductId,
} from '../data/data';
import {AuthContext} from '../context/AuthProvider';

const ProductListItem = props => {
  const {basket, setBasket} = useContext(AuthContext);

  const navigation = useNavigation();

  const {item, showBasket, vendorId, discount, price} = props;

  const {
    ProductName,
    productName,

    ProductPrice,
    productPrice,

    ProductImage,
    productImage,

    ProductWeight,
    productWeight,

    productQuantity,
    ProductId,
    productId,
  } = item;

  const addItemToBag = async () => {
    const index = basket?.findIndex(
      basketItem => basketItem.productId === ProductId,
    );
    if (index >= 0) {
      console.log('Item exist');
    } else {
      const localBasket = await addToBag(item, basket, 12, vendorId);
      setBasket(localBasket);
      console.log(localBasket);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (showBasket) return;

        navigation.navigate('VendorList', {
          productId: ProductId || productId,
          productName: ProductName || productName,
        });
      }}
      style={styles.previousYouItem}>
      <Image
        style={styles.previousItemLogo}
        source={{uri: ProductImage || productImage}}
      />
      <View style={styles.previousItemInfo}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={styles.previousItemName}
            numberOfLines={1}
            ellipsizeMode="tail">
            {ProductName || productName}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={styles.previousItemInfo1}>
            <Text style={styles.previousItemPriceQtt}>
              {ProductWeight || productWeight}
            </Text>
            {price && (
              <View style={styles.previousItemPriceDtl}>
                <Text style={styles.previousItemPriceReal}>
                  Rs 36{' '}
                  <AntDesign
                    name="arrowup"
                    size={12}
                    color="#3CAC14"></AntDesign>
                </Text>
                <Text style={[styles.previousItemPriceCut, {marginLeft: 8}]}>
                  Rs 36
                </Text>
              </View>
            )}
          </View>

          <View style={styles.previousItemRSandBuy}>
            {/* <Text style={styles.previousItemRS}>
            RS {ProductPrice || productPrice}
          </Text> */}
            {discount && (
              <View
                style={[
                  styles.previousItemBTN,
                  {
                    backgroundColor: '#3CAC14',
                    borderRadius: 5,
                    marginBottom: 10,
                  },
                ]}>
                <Text style={styles.previousItemBTNtext}>15% Discount</Text>
              </View>
            )}
            {showBasket && (
              <TouchableOpacity
                onPress={() => {
                  addItemToBag();
                }}
                style={styles.previousItemBTN}>
                <Text style={styles.previousItemBTNtext}>Add</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
  closeIcon1: {
    // flex: 1,
    // marginTop: 13,
    // marginRight: 3,
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
    marginTop: 18,
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
    justifyContent: 'space-between',
    marginTop: 30,
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
  recomItemLogoBG: {
    // height: 60,
    // width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recomSectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width / 5,
  },
  RecomItemLogo: {
    width: 60,
    height: 60,
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
    marginTop: 27,
    flexDirection: 'column',
  },
  previousItemInfo: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    // flex: 1,
    width: '78%',
  },
  previousItemName: {
    color: '#4D4D4D',
    fontSize: 14,
    // width: '100%',
    // maxWidth: 188,
    width: '100%',
  },
  previousItemPriceDtl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '50%',
  },
  previousItemPriceReal: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222222',
  },
  previousItemPriceCut: {
    fontSize: 14,
    fontWeight: '700',
    color: '#7C7C7C',
    textDecorationLine: 'line-through',
  },
  previousItemPriceQtt: {
    color: '#9B9B9B',
    fontSize: 10,
    lineHeight: 13,
    marginTop: 5,
    marginBottom: 5,
  },
  previousItemInfo1: {
    flexDirection: 'column',
    // width: '23%',
  },
  previousItemRSandBuy: {
    // flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignSelf: 'flex-end',
    // marginTop: 6,
    // width: '50%',
  },
  previousItemRS: {
    marginTop: -6,
    color: '#222222',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  previousItemBTN: {
    height: 26,
    width: 106,
    // maxHeight: 90,
    borderRadius: 10,
    backgroundColor: '#FF6B6B',
  },
  previousItemBTNtext: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 3,
  },
});

export default ProductListItem;
