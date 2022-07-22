import ActionSheet from 'react-native-actions-sheet';
import React, {createRef, useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {StatusBar} from 'react-native';
import {AuthContext} from '../context/AuthProvider';
import {ActivityIndicator, BagListitem} from '../components';
import {addToBasket, orderProduct, removeFromAsyncStorage} from '../data/data';

const actionSheetRef = createRef();

const Action = ({navigation, totalPrice, basket}) => {
  const {setReloadOrder, setBasket} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const saveOrder = async () => {
    try {
      const res = await orderProduct(basket, 12);
      if (res) {
        setBasket([]);
        setReloadOrder(true);
        Alert.alert('Purchase Successful');
        removeFromAsyncStorage('bag');
        navigation.navigate('OrderTab');

        actionSheetRef.current?.setModalVisible(false);
      } else Alert.alert('unable to complete your purchase');
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert('unable to complete your purchase');
    }
  };
  return (
    <ActionSheet ref={actionSheetRef}>
      <View style={{height: '70%'}}>
        <View style={[sheetStyle.sheetHead]}>
          <Text style={sheetStyle.headName}>Checkout</Text>
          <TouchableOpacity
            onPress={() => {
              actionSheetRef.current?.setModalVisible(false);
            }}
            style={styles.closeIcon}>
            <Ionicons style={sheetStyle.closeIcon1} name="close" />
          </TouchableOpacity>
        </View>
        <View style={[sheetStyle.sheetItem]}>
          <Text style={sheetStyle.itemName}>Delivery Address</Text>
          <TouchableOpacity style={sheetStyle.righticon}>
            <Text style={sheetStyle.optn}>Select Address</Text>
            <AntDesign style={sheetStyle.right} name="right" color="black" />
          </TouchableOpacity>
        </View>
        <View style={[sheetStyle.sheetItem]}>
          <Text style={sheetStyle.itemName}>Payment</Text>
          <TouchableOpacity style={sheetStyle.righticon}>
            <Text style={sheetStyle.optn}></Text>
            <AntDesign style={sheetStyle.right} name="right" color="black" />
          </TouchableOpacity>
        </View>
        <View style={[sheetStyle.sheetItem]}>
          <Text style={sheetStyle.itemName}>Promo Code</Text>
          <TouchableOpacity style={sheetStyle.righticon}>
            <Text style={sheetStyle.optn}>Pick Discount</Text>
            <AntDesign style={sheetStyle.right} name="right" color="black" />
          </TouchableOpacity>
        </View>
        <View style={[sheetStyle.sheetItem]}>
          <Text style={sheetStyle.itemName}>Total Cost</Text>
          <TouchableOpacity style={sheetStyle.righticon}>
            <Text style={sheetStyle.optn}>{totalPrice}</Text>
            <AntDesign style={sheetStyle.right} name="right" color="black" />
          </TouchableOpacity>
        </View>

        <View style={[sheetStyle.sheetItem]}>
          <Text style={sheetStyle.terms}>
            By placing an order you agree to our
            <Text style={[sheetStyle.terms, {color: 'black'}]}> Terms</Text> And
            <Text style={[sheetStyle.terms, {color: 'black'}]}>
              {' '}
              Conditions
            </Text>
          </Text>
          {/* <TouchableOpacity style={sheetStyle.righticon} >
                    <Text style={sheetStyle.optn}>13.97</Text>
                    <Ionicons style={sheetStyle.right} name='close' />
                </TouchableOpacity> */}
        </View>

        <View style={[sheetStyle.sheetItem]}>
          <View style={[sheetStyle.checkout]}>
            {loading ? (
              <ActivityIndicator show={loading} color={'#DB3022'} />
            ) : (
              <TouchableOpacity
                style={[sheetStyle.checkoutBtn]}
                onPress={() => {
                  saveOrder(basket, 12);
                }}>
                <Text style={[sheetStyle.checkoutText]}>Place Order</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ActionSheet>
  );
};

const Bag = ({navigation}) => {
  const {
    basket,
    setBasket,
    reloadBasket,
    setBadge,
    setReloadBasket,
    payableAmount,
    setPayableAmount,
    refreshFlatlist,
    setRefreshFlatList,
    auth,
    user,
    setAuth,
  } = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headName}>Bag</Text>
      </View>
      <View style={styles.listConatainer}>
        <FlatList
          extraData={refreshFlatlist}
          data={basket}
          //   renderItem={renderItem}
          // keyExtractor={({item, index}) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <BagListitem
                basket={basket}
                setBasket={setBasket}
                item={item}
                setRefreshFlatList={setRefreshFlatList}
              />
            );
          }}
        />
      </View>
      <View style={[stylesBtn.checkout]}>
        <TouchableOpacity
          style={[stylesBtn.checkoutBtn]}
          onPress={() => {
            if (user) actionSheetRef.current?.setModalVisible(true);
            else {
              Alert.alert('You will have to login to complete your order');
              setAuth(false);
            }
          }}>
          <Text style={[stylesBtn.checkoutText]}>Go to Checkout</Text>
          <View style={[stylesBtn.priceBG]}>
            <Text style={[stylesBtn.priceInfo]}>Rs. {payableAmount}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Action
        navigation={navigation}
        totalPrice={payableAmount}
        basket={basket}
      />
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

const stylesBtn = StyleSheet.create({
  checkout: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 12,
  },
  checkoutBtn: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 19,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB3022',
    width: '90%',
    marginLeft: '5%',
  },
  checkoutText: {
    // flex: 6,
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: 'bold',
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
});
const sheetStyle = StyleSheet.create({
  sheet: {
    position: 'absolute',
    top: '33%',
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
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: '5%',
  },
  headName: {
    fontSize: 24,
    color: '#181725',
    fontWeight: '600',
  },
  closeIcon1: {
    fontSize: 24,
    color: '#181725',
    fontWeight: '600',
  },
  sheetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: '10%',
    marginTop: 15,
    borderTopColor: 'rgba(226, 226, 226, 0.7)',
    borderTopWidth: 1,
    paddingTop: 10,
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
    bottom: 0,
  },
  checkoutBtn: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 18,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB3022',
    width: '100%',
    marginLeft: 'auto',
  },
  checkoutText: {
    // flex: 6,
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: 'bold',
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
});
export default Bag;
