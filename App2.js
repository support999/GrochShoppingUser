import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

import Home from './src/screen/Home';
import SearchLocation from './src/screen/SearchLocation';
import UserOption from './src/screen/UserOption';
import StoreDetails from './src/screen/StoreDetails';
import NearYou from './src/screen/NearYou';
import SearchProduct from './src/screen/SearchProduct';
import FreqentSearch from './src/screen/FreqentSearch';
import Help from './src/screen/Help';
import CategoryModel from './src/screen/CategoryModel';
import Bag from './src/screen/Bag';
import Notification from './src/screen/Notification';
import Order from './src/screen/Order';
import Payment from './src/screen/Payment';
import Success from './src/screen/Success';
import CheckOut from './src/screen/CheckOut';
import ReOrder from './src/screen/ReOrder';
import ReOrderCheckout from './src/screen/ReOrderCheckout';
import ScheduleOrder from './src/screen/ScheduleOrder';
import Deals from './src/screen/Deals';
import Login from './src/screen/Login';
import NumberOtp from './src/screen/NumberOtp';
import UserDashboard from './src/screen/UserDashboard';
import Actionsheet from './src/screen/Actionsheet';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const BagStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
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
    </HomeStack.Navigator>
  );
}

function OrderStackScreen() {
  return (
    <OrderStack.Navigator screenOptions={{headerShown: false}}>
      <OrderStack.Screen name="Order" component={Order} />
      <OrderStack.Screen
        name="CheckOut"
        component={CheckOut}
        Options={{header: () => true}}
      />
      <OrderStack.Screen
        name="Payment"
        component={Payment}
        Options={{header: () => true}}
      />
      <OrderStack.Screen
        name="ReOrder"
        component={ReOrder}
        Options={{header: () => true}}
      />
      <OrderStack.Screen
        name="Success"
        component={Success}
        Options={{header: () => true}}
      />
      <OrderStack.Screen
        name="ReOrderCheckout"
        component={ReOrderCheckout}
        Options={{header: () => true}}
      />
      <OrderStack.Screen
        name="ScheduleOrder"
        component={ScheduleOrder}
        Options={{header: () => true}}
      />
    </OrderStack.Navigator>
  );
}

function BagStackScreen() {
  return (
    <BagStack.Navigator screenOptions={{headerShown: false}}>
      <BagStack.Screen name="Bag" component={Bag} />
      <BagStack.Screen
        name="CheckOut"
        component={CheckOut}
        Options={{header: () => true}}
      />
      <BagStack.Screen
        name="Payment"
        component={Payment}
        Options={{header: () => true}}
      />
      <BagStack.Screen name="Success" component={Success} />
    </BagStack.Navigator>
  );
}
function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator screenOptions={{headerShown: false}}>
      <NotificationStack.Screen name="Bag" component={Notification} />
      <NotificationStack.Screen name="Success" component={Success} />
    </NotificationStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{ header: () => null }}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="SearchLocation" component={SearchLocation} Options={{ header: () => true }} />
    //     <Stack.Screen name="UserOption" component={UserOption} Options={{ header: () => true }} />
    //     <Stack.Screen name="StoreDetails" component={StoreDetails} Options={{ header: () => true }} />
    //     <Stack.Screen name="NearYou" component={NearYou} Options={{ header: () => true }} />
    //     <Stack.Screen name="SearchProduct" component={SearchProduct} Options={{ header: () => true }} />
    //     <Stack.Screen name="FreqentSearch" component={FreqentSearch} Options={{ header: () => true }} />
    //     <Stack.Screen name="Help" component={Help} Options={{ header: () => true }} />
    //     <Stack.Screen name="CategoryModel" component={CategoryModel} Options={{ header: () => true }} />
    //     <Stack.Screen name="Bag" component={Bag} Options={{ header: () => true }} />
    //     <Stack.Screen name="Payment" component={Payment} Options={{ header: () => true }} />
    //     <Stack.Screen name="Success" component={Success} Options={{ header: () => true }} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      {/* <LoginStack.Navigator screenOptions={{headerShown: false}}>
        <LoginStack.Screen name="Login" component={Login} />
      </LoginStack.Navigator> */}

      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarActiveTintColor: '#EB3223',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons
                  name="home"
                  resizeMode="contain"
                  size={size}
                  color={color}
                  // style={{ tintColor: focused ? '#EB3223' : 'gray' }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="OrderTab"
          component={OrderStackScreen}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({focused, color, size}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="clipboard-text"
                  size={size}
                  color={color}
                  // style={{ tintColor: focused ? '#EB3223' : 'gray' }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="BagTab"
          component={BagStackScreen}
          options={{
            tabBarLabel: 'Bag',
            tabBarIcon: ({focused, color, size}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Fontisto
                  name="shopping-bag"
                  size={size}
                  color={color}
                  // style={{ tintColor: focused ? '#EB3223' : 'gray' }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NotificationTab"
          component={NotificationStackScreen}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({focused, color, size}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons
                  name="ios-notifications-outline"
                  size={size}
                  color={color}
                  // style={{ tintColor: focused ? '#EB3223' : 'gray' }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
