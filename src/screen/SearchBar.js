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
import {useNavigation} from '@react-navigation/native';

const SearchBar = props => {
  const {onChange, showText, doSomething, showText2} = props;

  return (
    // <View style={styles.searchContainer}>

    <View style={styles.searchInput}>
      <TouchableOpacity
        onPress={() => {
          doSomething && doSomething();
        }}>
        <Ionicons
          style={styles.miceIcon}
          name="search"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      {showText ? (
        <TouchableOpacity
          onPress={() => {
            onChange();
          }}>
          <Text
            style={[
              styles.input,
              {
                marginTop: -10,
                marginBottom: -10,
                // marginTop: 4,
                opacity: 0.3,
                // backgroundColor: 'gray',
                height: 45,
                width: '100%',
                paddingLeft: 10,
                marginLeft: -50,
                paddingLeft: 60,
                width: 380,
                paddingTop: 10,
                borderRadius: 7,
              },
            ]}>
            Search product
          </Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          onSubmitEditing={() => {
            doSomething && doSomething();
          }}
          style={styles.input}
          onChangeText={val => onChange(val)}
          placeholder={showText2 ? 'Search vendor' : 'Search product'}
        />
      )}
    </View>
    //   </View>fff
  );
};

const styles = StyleSheet.create({
  searchInput: {
    // flex: 1,
    height: 45,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    // marginTop: 20,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#F9F9F9',
  },
  input: {
    width: '100%',
    height: 30,
    flex: 4,
    padding: 0,
    marginTop: -2,
    marginLeft: 15,
    fontSize: 15,
    color: 'black',
  },
  miceIcon: {
    textAlign: 'left',
    color: '#9B9B9B',
    marginLeft: 10,
  },
});

export default SearchBar;
