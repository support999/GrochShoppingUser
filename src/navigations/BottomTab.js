import React, {useContext} from 'react';
import {Text, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DashBoardScreen,
  InvestmentScreen,
  TransactionsScreen,
  SavingsScreen,
  ProfileScreen,
} from '../screens/bottomTab';
import {fonts} from '../assets/fonts';
import {colors} from '../assets/colors';
import {
  dashboard,
  creditcard,
  coins,
  user,
  wallet,
} from '../assets/images/icons';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import FixedDepositeNavigation from './FixedDepositeNavigation';
import PaymentNavigation from './PaymentNavigation';
import CompaniesNavigation from './CompaniesNavigation';
import TreasureNavigation from './TreasureNavigation';
import ProfileNavigation from './ProfileNavigation';

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.textColor,
        tabBarInactiveTintColor: '#73719B',
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: colors.deepBLue,
            height: Platform.OS === 'ios' ? 90 : 60,
          },
          null,
        ],

        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'DashBoard') {
            iconName = dashboard;
          } else if (route.name === 'Invest') {
            iconName = coins;
          } else if (route.name === 'Transactions') {
            iconName = creditcard;
          } else if (route.name === 'Savings') {
            iconName = wallet;
          } else if (route.name === 'Profile') {
            iconName = user;
          }
          // You can return any component that you like here!
          return (
            <Image
              resizeMode="contain"
              style={{width: 20, height: 20, opacity: focused ? 1 : 0.3}}
              source={iconName}
            />
          );
        },
        tabBarLabel: ({focused, color}) => {
          let labelName;
          if (route.name === 'DashBoard') {
            labelName = 'DashBoard';
          } else if (route.name === 'Invest') {
            labelName = 'Investment';
          } else if (route.name === 'Transactions') {
            labelName = 'Transactions';
          } else if (route.name === 'Savings') {
            labelName = 'Savings';
          } else if (route.name === 'Profile') {
            labelName = 'Account';
          }

          // You can return any component that you like here!
          return (
            <Text
              style={{
                color: color,
                fontFamily: fonts.medium,
                fontSize: 12,
                marginBottom: 5,
              }}>
              {labelName}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="DashBoard" component={DashBoardStack} />
      <Tab.Screen name="Invest" component={InvestmentScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Savings" component={SavingsScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const DashBoardStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Index" component={DashBoardScreen} />
    <Stack.Screen name="FixedNav" component={FixedDepositeNavigation} />
    <Stack.Screen name="PaymentNav" component={PaymentNavigation} />
    <Stack.Screen name="CompanyNav" component={CompaniesNavigation} />
    <Stack.Screen name="TreasureNav" component={TreasureNavigation} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Index" component={ProfileScreen} />
    <Stack.Screen name="ProfileNav" component={ProfileNavigation} />
  </Stack.Navigator>
);
