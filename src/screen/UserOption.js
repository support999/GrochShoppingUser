import React, {useEffect, useState, useContext, createRef} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Switch,
  Alert,
  // ProgressBarAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Slider from 'react-native-slider';
const {height, width} = Dimensions.get('screen');

const data = [
  {
    id: 1,
    offer: '30 % Discount',
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: '30 % Discount',
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: '39 % Discount',
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
];
import {ScrollView, StatusBar, useColorScheme} from 'react-native';

import {initBaseurl} from '../data/user';
import {AuthContext} from '../context/AuthProvider';

const imageW = width * 0.9;
const imageH = imageW * 1.54;

const UserOption = ({navigation}) => {
  const {url, setUrl} = useContext(AuthContext);
  const actionSheetRef = createRef();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [kmVal, setKmVal] = useState(0.5);
  useEffect(() => {}, []);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const Action = ({navigation, item}) => (
    <ActionSheet ref={actionSheetRef} style={{}}>
      <View
        style={{
          backgroundColor: '#F2F3F2',
          borderTopLeftRadius: 17,
          borderTopRightRadius: 17,
        }}>
        <ScrollView
          style={{
            flexDirection: 'column',
            marginLeft: 20,
            marginTop: '10%',
          }}>
          <View style={[sheetStyle.sheetHead]}>
            <Text style={sheetStyle.headName}>Settings</Text>
          </View>
          <View style={[sheetStyle.subHead]}>
            <Text style={sheetStyle.subHeadName}>Allow Push Notifications</Text>
            <Switch
              trackColor={{false: '#767577', true: '#EA2C2C'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              // onValueChange={toggleSwitch}
              // value={isEnabled}
            />
          </View>

          <View style={{width: '88%', marginLeft: '5%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: '600', fontSize: 15, color: '#323232'}}>
                15KM
              </Text>
              <Text style={{fontWeight: '600', fontSize: 15, color: '#5D5D5D'}}>
                50KM
              </Text>
            </View>
            <View style={{width: '100%'}}>
              {/* <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                color="#F20505"
              /> */}
              <Slider
                thumbTintColor="red"
                minimumTrackTintColor="red"
                maximumTrackTintColor="red"
                value={kmVal}
                // onValueChange={value => setKmVal(value)}
              />
            </View>
          </View>

          <View style={[sheetStyle.sheetHead, {marginTop: 20}]}>
            <Text style={sheetStyle.headName}>Other</Text>
          </View>

          <View style={[sheetStyle.subHead]}>
            <Text style={sheetStyle.subHeadName}>Activities</Text>
            <Switch
              trackColor={{false: '#767577', true: '#EA2C2C'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              // onValueChange={toggleSwitch2}
              // value={isEnabled}
            />
          </View>

          <View style={[sheetStyle.subHead]}>
            <Text style={sheetStyle.subHeadName}>Help</Text>
            <Switch
              trackColor={{false: '#767577', true: '#EA2C2C'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>

          <TouchableOpacity
            style={[sheetStyle.checkoutBtn]}
            onPress={() => {
              // actionSheetRef.current?.setModalVisible(false);
            }}>
            <Text style={[sheetStyle.checkoutText]}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ActionSheet>
  );

  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.main}>
        <Action navigation={navigation} />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.TOback}
            onPress={() => navigation.goBack()}>
            <AntDesign style={styles.backIcon} name="left" color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              style={styles.userImg}
              source={require('./../assets/defaultUser.png')}></Image>
          </TouchableOpacity>
          <View style={styles.headerDetails}>
            <Text style={styles.userName}>Amit Saxena</Text>
            <Text style={styles.otherDetails}>amitsaxena@gmail.com</Text>
            <Text style={styles.otherDetails}>9764519996</Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.item}>
            <Text style={styles.itemName}>My Order</Text>
            <Text style={styles.itemDetails}>Past Order</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
          </View>

          <View style={styles.item}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Shopping address</Text>
            <Text style={styles.itemDetails}>3 addressess</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </View>

          <View style={styles.item}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Payment Method</Text>
            <Text style={styles.itemDetails}>
              Pytem, Debit Card, Credit Card
            </Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </View>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Deals')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Offers</Text>
            <Text style={styles.itemDetails}>Promo Code and Special Offer</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              actionSheetRef.current?.setModalVisible(true);
            }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Settings</Text>
            <Text style={styles.itemDetails}>
              Profile, Notifications, Passwords
            </Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Help')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Help') */}
            <Text style={styles.itemName}>Help</Text>
            <Text style={styles.itemDetails}>FAQ's and Links</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </TouchableOpacity>

          <View style={styles.item} onPress={() => navigation.navigate('Help')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Help') */}
            <Text style={styles.itemName}>Base Url</Text>
            <TextInput
              value={url}
              onChangeText={val => setUrl(val)}
              style={{color: '#030303', fontSize: 18}}
            />
            <TouchableOpacity
              onPress={() => {
                initBaseurl(url);
                Alert.alert('Base url changed');
              }}
              style={{
                backgroundColor: '#EA2C2C',
                width: 100,
                alignSelf: 'center',
                padding: 5,
                borderRadius: 10,
                margin: 10,
              }}>
              <Text
                style={[styles.itemName, {textAlign: 'center', color: '#fff'}]}>
                Save
              </Text>
            </TouchableOpacity>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const sheetStyle = StyleSheet.create({
  sheet: {
    // position: 'absolute',
    top: '23%',
    height: '100%',
    width: '99%',
    // backgroundColor: '#F2F3F2',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginLeft: 1,
    marginRight: 1,
  },
  sheetHead: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#F2F3F2',
    paddingBottom: 20,
  },
  headName: {
    fontSize: 17,
    color: '#5D5D5D',
    fontWeight: '400',
  },
  subHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
    marginLeft: '5%',
    paddingBottom: 20,
  },
  subHeadName: {
    fontSize: 16,
    color: '#2C3D55',
    fontWeight: '500',
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
    // bottom: 10,
    // marginTop: 120,
    marginBottom: 10,
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
    width: '90%',
    marginLeft: '5%',
    flexDirection: 'row',
  },
  TOback: {
    //   flexDirection: 'column'
    // alignItems: 'center',
    marginTop: 17,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  backIcon: {
    fontSize: 26,
    color: 'black',
    fontWeight: '600',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  userImg: {
    height: 60,
    width: 60,
  },
  headerDetails: {
    marginLeft: 20,
    flex: 6,
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 22,
  },
  otherDetails: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9B9B9B',
    lineHeight: 20,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    // width: '100%',
    width: width,
    marginLeft: '5%',
    marginTop: '5%',
  },
  item: {
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
    // marginTop: '5%',
    marginBottom: '5%',
    // height: '10%',
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    width: '100%',
    fontWeight: '400',
  },
  AntDesign: {
    fontSize: 16,
    color: '#9B9B9B',
    textAlign: 'right',
  },
  itemDetails: {
    fontSize: 11,
    color: '#9B9B9B',
  },
  itemNameIcon: {
    // flex: 1,
    flexDirection: 'row',
  },
});

export default UserOption;
