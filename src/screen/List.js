import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView, FlatList,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const List = (data) => {
    console.log( data )
  return (        
          // <View style={styles.storeNearYou}>
            
          //   <View style={styles.storeNearYouHeader}>
          //     <Text style={styles.storeNearYouHeaderFevorit}>Store near you</Text>
          //   </View>
  
      <FlatList style={styles.storeNearYouGrid} data={data} renderItem={({ item }) => (
        <View style={styles.storeNearYouItem}>
          <Image style={styles.storeNearItemLogo} source={require('./../assets/shopLogo.png')} ></Image>
            <View style={styles.storeNearItemDetails}>
              <View style={styles.storeNearItemInfo}>
              <Text style={styles.storeNearItemName}>{item.Vendor_Name}</Text>
              <Text style={styles.storeNearItemAddress}>Vendor store address</Text>

                <Text style={styles.storeNearItemDistance}>1.5 km
                  <Text style={styles.storeNearItemActive}>Open</Text>
                </Text> 

                <View style={styles.storeNearItemRatingDive1}>
                  <View style={styles.storeNearItemRatingDive2}>
                    <View style={styles.storeNearItemActiveCount}>
                      <FontAwesome style={styles.storeNearItemRating} name="star"  />
                      <Text style={styles.storeNearItemRatingText}>4.2</Text>
                    </View>
                    <Text style={styles.storeNearItemTime}>Close at: 10:00 pm</Text> 
                  </View>
                </View>  
            
            </View>
          
          

          
            <View style={styles.storeNearItemDis}>
              <View style={styles.storeNearItemDisIcons}>
                <FontAwesome5 style={styles.storeNearItemRating1} name="crutch" />
                <MaterialIcons style={styles.storeNearItemRating1} name="perm-phone-msg" />
              </View>
              <View style={styles.storeNearItemDisLable}>
                <Text style={styles.storeNearItemDisLable1}>From 20 INR</Text>
                <Text style={styles.storeNearItemDisLable2}>15% Discount</Text>
              </View>
            </View>              
          </View>
        </View>
        )}
        ListEmptyComponent={() => 
          <View>
            <Text>No Store near you</Text>
        </View>}
    />
              
    );
  }
  
  const styles = StyleSheet.create({
    storeNearYou: {
      marginLeft: 15,
      marginRight: 15,
    },
    storeNearYouHeader: {
    //   flex: 1,
      flexDirection: 'row',
      height: 30,
    },
    storeNearYouHeaderFevorit: {
      flex: 1,
      fontSize: 14,
      color: 'rgba(155, 155, 155, 1)',
      textAlign: 'left',
    //   height: 50
    },
    storeNearYouGrid: {
        flex: 1,
        // height: 100
    },
    storeNearYouItem: {
      flexDirection: 'row',
    //   marginBottom: 20,
      borderColor: "#FF0909",
      borderRadius: 20,
      borderWidth: 1,
      flexDirection: 'row',
    },
    storeNearItemLogo: {
      height: 75,
      width: 75,
      borderRadius: 19,
      marginLeft: 10,
      marginTop: 10
  
    },
    storeNearItemDetails: {
      marginLeft: 10,
      marginTop: 10,
      flexDirection: 'row',
      flex: 1
    },
    storeNearItemName: {
      color: '#000000',
      fontSize: 13,
      fontWeight: 'bold',
    },
    storeNearItemAddress: {
      color: '#000000',
      fontSize: 12,
      lineHeight: 22,
  
    },
    storeNearItemDistance: {
      color: '#7F7F7F',
      fontSize: 12,
      lineHeight: 22,
  
    },
    storeNearItemActive: {
      color: '#2C9309',
      fontSize: 12,
      lineHeight: 22,
      fontWeight:'500',
      marginLeft: 5
  
    },
    storeNearItemRatingDive1: {
      flexDirection: 'row',
      flex: 1
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
      marginTop: -3,
      marginTop: 3,
      color: 'white',
      fontSize: 10,
      height: 12
    },
    storeNearItemActiveCount: {
      flexDirection: 'row',
      backgroundColor: '#2C9309',
      height: 20,
      width: 53,
      borderRadius: 5,
      color: 'white',
      fontSize: 11,
      marginBottom: 3
    },
    storeNearItemTime: {
      marginLeft: 5,
      color: '#FF0909',
      fontSize: 9
    },
    storeNearItemDis: {
      flex:1  ,
      width: 20,
      marginLeft: 70
    },
    storeNearItemDisIcons: {
      flexDirection: 'row',
      textAlign: 'center'
    },
  
    storeNearItemDisLable1: {
      backgroundColor: '#2C9309',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      color: 'white',
      marginBottom: 1,
      paddingLeft: 5,
      height: 20,
      fontSize: 10
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
      marginBottom: 12
    },
    storeNearItemRating1: {
      fontSize: 18,
      color: 'black',
      flex: 1
    }
  });

export default List;