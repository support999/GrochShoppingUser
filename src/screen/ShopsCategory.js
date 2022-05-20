import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {fetchCategory} from '../data/data';
import {AuthContext} from '../context/AuthProvider';
import {CategoriesListitem} from '../components';

const ShopsCategory = () => {
  const navigation = useNavigation();
  const {categories, setCategories} = useContext(AuthContext);

  const fetchData = async () => {
    const res = await fetchCategory();

    setCategories(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.storeNearYou}>
      <View style={styles.storeNearYouHeader}>
        <Text style={styles.storeNearYouHeaderFevorit}>Shop By Category</Text>
        <TouchableOpacity>
          <Text style={styles.fevoritSectionHeaderHistory}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        showsHorizontalScrollIndicator={false}>
        {categories?.map((item, index) => {
          if (index < 6)
            return (
              <CategoriesListitem
                key={item.productCategoryId}
                item={item}
                index={index}
                navigation={navigation}
              />
            );
        })}
      </ScrollView>

      {/* <TouchableOpacity
          style={styles.categorySectionItem}
          onPress={() => navigation.navigate('SearchProduct')}>
          <View style={[styles.categoryItemLogoBG]}>
            <Image
              style={styles.categoryItemLogo}
              source={require('./../assets/Foodgrains,Oil&Masala.png')}></Image>
          </View>
          <Text style={styles.categoryItemName}>Foodgrains, Oil & Masala</Text>
        </TouchableOpacity> */}
      {/* 
        <TouchableOpacity
          style={styles.categorySectionItem}
          onPress={() => navigation.navigate('SearchProduct')}>
          <View style={[styles.categoryItemLogoBG, styles.bgColor2]}>
            <Image
              style={styles.categoryItemLogo}
              source={require('./../assets/Eggs,Meat&Fish.png')}></Image>
          </View>
          <Text style={styles.categoryItemName}>Eggs, Meat & Fish</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categorySectionItem}
          onPress={() => navigation.navigate('SearchProduct')}>
          <View style={[styles.categoryItemLogoBG, styles.bgColor3]}>
            <Image
              style={styles.categoryItemLogo}
              source={require('./../assets/Bakery,Cakes&Dairy.png')}></Image>
          </View>
          <Text style={styles.categoryItemName}>Bakery, Cakes & Dairy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categorySectionItem}
          onPress={() => navigation.navigate('SearchProduct')}>
          <View style={[styles.categoryItemLogoBG, styles.bgColor3]}>
            <Image
              style={styles.categoryItemLogo}
              source={require('./../assets/Cleansing&Household.png')}></Image>
          </View>
          <Text style={styles.categoryItemName}>Cleansing & Household</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categorySectionItem}
          onPress={() => navigation.navigate('SearchProduct')}>
          <View style={[styles.categoryItemLogoBG, styles.bgColor3]}>
            <Image
              style={styles.categoryItemLogo}
              source={require('./../assets/Beauty&Hygiene.png')}></Image>
          </View>
          <Text style={styles.categoryItemName}>Beauty & Hygiene</Text>
        </TouchableOpacity> */}
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

export default ShopsCategory;
