import React, {useContext} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import HomeStackScreen from './HomeStackScreen';
import OrderStackNavigation from './OrderStackNavigation';
import BagStackNavigation from './BagStackNavigation';
import NotificationStackScreen from './NotificationStackNavigation';
import {AuthContext} from '../context/AuthProvider';

const BottomTab = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {badge} = useContext(AuthContext);

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

  {
    /* <LoginStack.Navigator screenOptions={{headerShown: false}}>
        <LoginStack.Screen name="Login" component={Login} />
      </LoginStack.Navigator> */
  }
  return (
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
        component={OrderStackNavigation}
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
        component={BagStackNavigation}
        options={{
          tabBarBadge: badge,
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
  );
};

export default BottomTab;
