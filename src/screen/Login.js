import React from 'react';
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
const {height, width} = Dimensions.get('screen');
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
const Login = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View
        style={{width: 200, height: 63, marginLeft: '10%', marginTop: '40%'}}>
        <Text
          style={{
            color: '#030303',
            fontSize: 24,
            fontWeight: '500',
            lineHeight: 29,
          }}>
          Get your groceries with
          <Text
            style={{
              color: '#FF0909',
              fontSize: 24,
              fontWeight: '500',
              lineHeight: 29,
            }}>
            {' '}
            Grochouse
          </Text>
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: 37,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            width: '80%',
            flexDirection: 'row',
          }}>
          <Text style={{marginTop: 12, color: '#030303', fontSize: 18}}>
            + 91
          </Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="Phone Number"
            style={{color: '#030303', fontSize: 18, marginStart: 10}}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('NumberOtp')}
          style={{
            justifyContent: 'center',
            borderRadius: 19,
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
            backgroundColor: '#5383EC',
            height: 67,

            marginTop: 37,
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: '#FCFCFC',
            }}>
            Continue
          </Text>
        </TouchableOpacity>

        {/* <Text
          style={{
            fontSize: 14,
            color: '#828282',
            fontWeight: '600',
            marginTop: 37,
          }}>
          / Or connect with social media
        </Text> */}

        {/* <TouchableOpacity
          onPress={() => navigation.navigate('NumberOtp')}
          style={{
            justifyContent: 'center',
            borderRadius: 19,
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
            backgroundColor: '#5383EC',
            height: 67,
            width: 365,
            marginTop: 37,
          }}>
          <AntDesign name="google" size={24} color="#FFFFFF" />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              color: '#FCFCFC',
            }}>
            Continue with Google
          </Text>
        </TouchableOpacity> */}
      </View>
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
    flexDirection: 'column',
    width: '90%',
    marginLeft: '5%',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  TOback: {
    //   flexDirection: 'column'
  },
  backIcon: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  headerDetails: {
    marginLeft: 15,
    width: '80%',
  },
  headerName: {
    marginLeft: 2,
    marginTop: 10,
    fontSize: 1,
    fontWeight: '900',
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
  listContainer: {
    top: '30%',
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
    marginTop: 10,
    height: '10%',
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

export default Login;
