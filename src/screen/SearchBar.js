import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();

    return (
        // <View style={styles.searchContainer}>
           <View style={styles.searchInput}  >
                <TextInput style={styles.input} onChange={() => navigation.navigate('FreqentSearch')} placeholder="Search vendor , or product" />
                <Ionicons style={styles.miceIcon} name="mic" size={24} color="black" />
          </View>
        //   </View>
    );
  }
  
  const styles = StyleSheet.create({

    searchInput: {
        // flex: 1,
        height: 50,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        padding: 10,
      },
      input: {
        width: '100%',
        height: 30,
        flex: 4,
        padding: 0,
        marginTop: -2,
        marginLeft: 15,
        fontSize: 15,
        color: 'black'
      },
      miceIcon: {
        flex: 1,
        textAlign: 'right',
        color: '#EB3223'
      },
  });

export default SearchBar;