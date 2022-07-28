import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import {useNavigation} from '@react-navigation/native';
import {getTopPickProducts} from '../data/data';
import {ActivityIndicator, TopPickListItem} from '../components';

const TopPicksForYour = () => {
  const [topPick, setTopPick] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await getTopPickProducts(1);
    setTopPick(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.storeNearYou}>
      <View style={styles.storeNearYouHeader}>
        <Text style={styles.storeNearYouHeaderFevorit}>Top Picks For You</Text>
        <TouchableOpacity>
          <Text style={styles.fevoritSectionHeaderHistory}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categorySectionGrid}>
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
            {topPick?.map((item, index) => {
              if (index < 6)
                return (
                  <TopPickListItem
                    key={index.toString()}
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
  storeNearYou: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // flexDirection: 'column'
  },
  storeNearYouHeader: {
    flexDirection: 'row',
    height: 30,
    marginTop: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  storeNearYouHeaderFevorit: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'left',
    // height: 50
  },
  fevoritSectionHeaderHistory: {
    // flex: 1,
    fontSize: 14,
    color: 'rgba(255, 107, 107, 1)',
    textAlign: 'right',
    height: 30,
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
  },
  categorySectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width / 3,
  },
  categoryItemLogoBG: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFECE8',
  },
  categoryItemLogo: {
    height: 50,
    width: 75,
  },
  categoryItemName: {
    fontSize: 9,
    color: '#22292E',
  },
  bgColor1: {
    backgroundColor: '#47CA19',
  },

  bgColor2: {
    backgroundColor: '#FFF6E4',
  },
  bgColor3: {
    backgroundColor: '#F1EDFC',
  },
  bgColor4: {
    backgroundColor: '#FFECE8',
  },
});

export default TopPicksForYour;
