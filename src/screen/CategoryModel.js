import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide'
const { height, width } = Dimensions.get('screen')

import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const CategoryModel = ({navigation}) => {

  return (        
    <View style={styles.main}>
      <View style={styles.category}>
        <View style={styles.categorySectionGrid}>
            <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor1]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Veg.png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
            </TouchableOpacity>

        
            <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector(1).png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor2]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector(2).png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor3]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector-Copy.png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor3]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector-Copy.png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor3]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector-Copy.png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
                  </TouchableOpacity>
                  

                  <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector(1).png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor2]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector(2).png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor1]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Veg.png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG, styles.bgColor2]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector(2).png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector(1).png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.categorySectionItem} onPress={() => navigation.navigate('SearchProduct')}>
            <View style={[styles.categoryItemLogoBG]}>
            <Image style={styles.categoryItemLogo} source={require('./../assets/Vector(1).png')} ></Image>
            </View>
                <Text style={styles.categoryItemName}>Vegetables</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }
  
const styles = StyleSheet.create({
    main: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
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
      height: 30
  },
  categorySectionHeaderBtn: {
      // flex: 1,
      fontSize: 14,
      color: '#54B175',
      textAlign: 'right',
      height: 30
  },
  categorySectionGrid: {
    // flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30
},
    categorySectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width /4,
  },
  categoryItemLogoBG: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFECE8'
  },
  bgColor1: {
    backgroundColor: '#47CA19'
  },

  bgColor2: {
    backgroundColor: "#FFF6E4",

  },
  bgColor3: {
    backgroundColor: "#F1EDFC",

    },
    bgColor4: {
        backgroundColor: '#FFECE8'
  }

});

export default CategoryModel;