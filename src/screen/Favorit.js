import React, {useContext, useState, useEffect} from 'react';
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

import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import {fetchHistory, getPreviousVendors} from '../data/data';
import {ActivityIndicator, PreviousVendorListItem} from '../components';
import {AuthContext} from '../context/AuthProvider';
import {useNavigation} from '@react-navigation/native';

const Favorit = () => {
  const {previousVendors, setPreviuosVendors} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchData = async () => {
    const res = await getPreviousVendors(1);
    // console.log(res[1]);
    setPreviuosVendors(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.fevoritSection}>
      <View style={styles.fevoritSectionHeader}>
        <Text style={styles.fevoritSectionHeaderFevorit}>Previous Vendor</Text>
        <Text style={styles.fevoritSectionHeaderHistory}>View History</Text>
      </View>

      <View style={styles.fevoritSectionGrid}>
        {loading ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              margin: 20,
            }}>
            <ActivityIndicator size={'large'} show={loading} />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
            showsHorizontalScrollIndicator={false}>
            {previousVendors?.map((item, index) => {
              if (index < 6)
                return (
                  <PreviousVendorListItem
                    key={item.vendorGuid}
                    item={item}
                    index={index}
                    navigation={navigation}
                  />
                );
            })}
          </ScrollView>
        )}
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
