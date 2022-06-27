import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  SearchLocation,
  StoreDetails,
  UserOption,
  Help,
  SearchProduct,
  FreqentSearch,
  CategoryModel,
  CheckOut,
  Deals,
  Login,
  NumberOtp,
  UserDashboard,
  Actionsheet,
  VendorList,
} from '../screen';
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="SearchLocation" component={SearchLocation} />
      <HomeStack.Screen
        name="StoreDetails"
        component={StoreDetails}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="UserOption"
        component={UserOption}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="Help"
        component={Help}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="SearchProduct"
        component={SearchProduct}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="FreqentSearch"
        component={FreqentSearch}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="CategoryModel"
        component={CategoryModel}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="CheckOut"
        component={CheckOut}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="Deals"
        component={Deals}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="Login"
        component={Login}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="NumberOtp"
        component={NumberOtp}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="UserDashboard"
        component={UserDashboard}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="Actionsheet"
        component={Actionsheet}
        Options={{header: () => true}}
      />
      <HomeStack.Screen
        name="VendorList"
        component={VendorList}
        Options={{header: () => true}}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
