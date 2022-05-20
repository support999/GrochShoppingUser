import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView, TouchableOpacity,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import NearYou from './NearYou'
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const Header = () => {

}

const location = [
    {
        id: 1,
        heade: 'MP Nagar',
        fullAdd: 'Room No 8, SOS Hostel, CISF Complex, DSector, Govindpura, Bhopal'
    },
    {
        id: 2,
        heade: 'MP Nagar zone 1',
        fullAdd: 'Room No 8, SOS Hostel, CISF Complex, DSector, Govindpura, Bhopal'
    },
    {
        id: 3,
        heade: 'MP Nagar zone 2',
        fullAdd: 'Room No 8, SOS Hostel, CISF Complex, DSector, Govindpura, Bhopal..'
    },
]
const Locations = ({navigation}) => {
  return (
    
      <View style={styles.List}>
          {location.map(emp => {
              return (
                <View style={styles.ListItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.ItemHeader}>{emp.heade}</Text>
                        <AntDesign style={styles.ItemIcon} name="down" />
                        <Text style={styles.ItemDetails}> {emp.fullAdd}</Text>
                    </TouchableOpacity>
                </View>
              )
          })}
        
    </View>

        
    );
  }
  
const styles = StyleSheet.create({
container: {
// flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
},
header:{
	// flex: 1,
	marginLeft: 20,
	marginRight: 20,
	marginTop: 10,
	flexDirection: 'row'
},
AntDesign: {
	marginLeft: 15,
	marginLeft: 5,
	fontSize: 21,
	color: 'black',
	marginTop: 5,
	fontWeight: 'bold'				
},
headerText: {
		marginTop: 3,
		fontSize: 18,
		marginLeft: 12,
		fontWeight: 'bold',
		color: "black"
		// numberOfLines: 1,
},
MaterialIcons: {
		fontSize: 26,
		flex: 1,
		textAlign: 'right',
		marginRight: 15,
		marginTop: 5
	},
	searchBG: {
		width: '90%',
		marginLeft: "5%",
		marginTop: 12,
		// height: 44,
		
	},
	searchView: {
		flexDirection: 'row',
		alignItems: "center",
	},
	shadow: {
		borderRadius:5,
		shadowColor: "gray",
		shadowOffset: {
		  width: 0,
		  height: 0,
		},
		shadowOpacity: 1.27,
		shadowRadius: 1.65,
		elevation: 6,
	},
	
	searchIcon: {
		color: '#9B9B9B',
		marginLeft: 12
	},
	searchInput: {
		marginLeft: '5%'
	},
		Listcontainer: {
			marginTop: 10,
			marginLeft: 15,
			flex: 1,

		},
		List: {
				marginLeft: 30,
			marginRight: 15,
			// flex: 1,
		},
		ListItem: {
		borderBottomColor: '#F7F7F7',
		borderBottomWidth: 1,
		marginTop: 10
		},
		ItemHeader: {
		flex: 14,
		fontSize: 14,
		fontWeight: '600',
		color: 'black',
		marginBottom: -10
		},
		ItemIcon: {
		marginRight:10,
		fontSize: 20,
		marginTop: -10,
		fontWeight: 'bold',
		color: '#7F7F7F',
		textAlign: 'right',
		marginBottom: 10,
		marginTop: -15
			
		},
		ItemDetails: {
		fontSize: 12,
		marginTop: -10,
		color: '#7F7F7F',
		marginTop: 0,
		flexWrap: 'wrap',
		width: '80%',
		marginBottom:10
	},
	 colorRed: {
		 color: '#F20505'
	 }
   });

export default Locations;