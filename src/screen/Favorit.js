import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
const Favorit = () => {
  return (
    <View style={styles.fevoritSection}>
      <View style={styles.fevoritSectionHeader}>
        <Text style={styles.fevoritSectionHeaderFevorit}>Order Again</Text>
        <Text style={styles.fevoritSectionHeaderHistory}>View History</Text>
      </View>

      <View style={styles.fevoritSectionGrid}>
        <View style={styles.fevoritSectionItem}>
          <Image
            style={styles.fevoritItemLogo}
            source={require('./../assets/shopLogo.png')}></Image>
          <View style={styles.fevoritItemDetails}>
            <Text style={styles.fevoritItemName}>Jain kirana store</Text>
            <Text style={styles.fevoritItemDistance}>1.5 km</Text>
            <AntDesign style={styles.fevoritItemRating} name="star" />
          </View>
        </View>

        <View style={styles.fevoritSectionItem}>
          <Image
            style={styles.fevoritItemLogo}
            source={require('./../assets/shopLogo.png')}></Image>
          <View style={styles.fevoritItemDetails}>
            <Text style={styles.fevoritItemName}>Jain kirana store</Text>
            <Text style={styles.fevoritItemDistance}>1.5 km</Text>
            <AntDesign style={styles.fevoritItemRating} name="star" />
          </View>
        </View>

        <View style={styles.fevoritSectionItem}>
          <Image
            style={styles.fevoritItemLogo}
            source={require('./../assets/shopLogo.png')}></Image>
          <View style={styles.fevoritItemDetails}>
            <Text style={styles.fevoritItemName}>Jain kirana store</Text>
            <Text style={styles.fevoritItemDistance}>1.5 km</Text>
            <AntDesign style={styles.fevoritItemRating} name="star" />
          </View>
        </View>

        <View style={styles.fevoritSectionItem}>
          <Image
            style={styles.fevoritItemLogo}
            source={require('./../assets/shopLogo.png')}></Image>
          <View style={styles.fevoritItemDetails}>
            <Text style={styles.fevoritItemName}>Jain kirana store</Text>
            <Text style={styles.fevoritItemDistance}>1.5 km</Text>
            <AntDesign style={styles.fevoritItemRating} name="star" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fevoritSection: {
    marginTop: 18,
    flexDirection: 'column',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  fevoritSectionHeader: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  fevoritSectionHeaderFevorit: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
    height: 30,
  },
  fevoritSectionHeaderHistory: {
    // flex: 1,
    fontSize: 14,
    color: 'rgba(255, 107, 107, 1)',
    textAlign: 'right',
    height: 30,
  },
  fevoritSectionGrid: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 6,
    marginLeft: 15,
    marginRight: 15,
  },
  fevoritSectionItem: {
    flexDirection: 'row',
    // width: 180,
    marginBottom: 20,
    width: Dimensions.get('window').width / 2.3,
  },
  fevoritItemLogo: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  fevoritItemDetails: {
    marginLeft: 10,
  },
  fevoritItemName: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 'bold',
    width: Dimensions.get('window').width / 3,
  },
  fevoritItemDistance: {
    color: '#7F7F7F',
    fontSize: 12,
    lineHeight: 22,
  },
  fevoritItemRating: {
    height: 12,
    width: 12,
    color: '#FFBA49',
  },
});

export default Favorit;
