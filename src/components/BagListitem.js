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

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../context/AuthProvider';

const BagListItem = props => {
  const {basket, setBasket, setReloadBasket, reloadBasket} =
    useContext(AuthContext);

  const {item} = props;
  const {
    productName,
    productPrice,
    productImage,
    productWeight,
    productQuantity,
    productId,
    totalPrice,

    //
    price,
    quantity,
    vendorProductId,
  } = item;
  const [quantityQ, setQuantityO] = useState(quantity);
  const [priceP, setPriceP] = useState(price);

  const increamentQty = async task => {
    if (task === 'add') {
      var counter = quantityQ + 1;
      setQuantityO(counter);
      const newPrice = await calculatePrice(counter);
      updateBasket(counter, newPrice);
      counter = 0;
    } else {
      if (quantityQ > 1) {
        var counter = quantityQ - 1;
        setQuantityO(counter);
        const newPrice = await calculatePrice(counter);
        updateBasket(counter, newPrice);
        counter = 0;
      }
    }
  };

  const calculatePrice = counter => {
    const totalPrice = counter * productPrice;
    setPriceP(totalPrice);
    return totalPrice;
  };

  const updateBasket = (newQuantity, newPrice) => {
    const index = basket.findIndex(
      item => item.vendorProductId === vendorProductId,
    );
    if (index >= 0) {
      basket[index].price = newPrice;
      basket[index].quantity = newQuantity;
      // setBasket(basket);
      // console.log(basket);
      setReloadBasket(!reloadBasket);
    }
  };

  const removeItem = () => {
    const index = basket.findIndex(
      item => item.vendorProductId === vendorProductId,
    );
    if (index >= 0) {
      var tempArray = basket;
      tempArray.splice(index, 1);
      // console.log(tempArray);
      setBasket(tempArray);
      setReloadBasket(!reloadBasket);
    }
  };

  return (
    <TouchableOpacity style={[styles.item]}>
      <View style={[styles.itemImgBg]}>
        <Image
          style={styles.ItemLogo}
          //   source={require('./../assets/product1.png')}
          source={{uri: productImage}}
        />
      </View>
      <View style={[styles.itemMid]}>
        <Text style={[styles.name]}>{productName}</Text>
        <Text style={[styles.quant]}>{productPrice}, Price</Text>
        <View style={[styles.btnSec]}>
          <TouchableOpacity
            onPress={() => {
              increamentQty('minus');
            }}
            style={[styles.minus]}>
            <Entypo name="minus" style={[styles.minusIcon]} />
            {/* <Ionicons style={[styles.minusIcon]} name='add' /> */}
          </TouchableOpacity>
          <Text style={[styles.quantNumb]}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              increamentQty('add');
            }}
            style={[styles.add]}>
            <Ionicons style={[styles.addIcon]} name="add" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.endSec]}>
        <TouchableOpacity
          onPress={() => {
            removeItem();
          }}
          style={styles.closeIcon}>
          <Ionicons style={styles.closeIcon1} name="close" />
        </TouchableOpacity>
        <Text style={[styles.totalPrice]}>{priceP} .Rs</Text>
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
    justifyContent: 'center',
    height: 50,
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
  },
  headName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listConatainer: {
    marginBottom: '40%',
  },
  item: {
    flexDirection: 'row',
    marginTop: 12,
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
    width: '85%',
    marginLeft: '5%',
    // width: '100%',
    height: 150,
  },
  itemImgBg: {
    height: 75,
    width: 75,
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'column',
  },
  ItemLogo: {
    height: 65,
    width: 65,
    // flexDirection: 'column'
  },
  itemMid: {
    // flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    width: '60%',
  },
  name: {
    fontSize: 16,
    color: '#181725',
    fontWeight: 'bold',
    lineHeight: 18,
  },
  quant: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 16,
    color: '#7C7C7C',
  },
  btnSec: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  minus: {
    width: 45,
    height: 45,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    borderColor: '#E2E2E2',
    justifyContent: 'center',
  },
  minusIcon: {
    fontSize: 25,
  },
  add: {
    width: 45,
    height: 45,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    borderColor: '#E2E2E2',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 25,
    color: '#DB3022',
  },
  quantNumb: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    lineHeight: 18,
    marginRight: 12,
    marginLeft: 12,
  },
  endSec: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // marginRight: 12
  },
  totalPrice: {
    color: '#181725',
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 17,
  },
  closeIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon1: {
    color: '#7F7F7F',
    fontSize: 23,
  },
});

export default BagListItem;
