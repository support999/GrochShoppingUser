import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Order,
  CheckOut,
  Payment,
  ReOrder,
  Success,
  ReOrderCheckout,
  ScheduleOrder,
} from '../screen';
const OrderStack = createNativeStackNavigator();

function OrderStackNavigation() {
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
export default OrderStackNavigation;
