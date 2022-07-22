import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Bag, CheckOut, Payment, Success, NumberOtp} from '../screen';

const BagStack = createNativeStackNavigator();
function BagStackNavigation() {
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
      <BagStack.Screen
        options={{
          headerShown: false,
        }}
        name="NumberOtp"
        component={NumberOtp}
      />
    </BagStack.Navigator>
  );
}
export default BagStackNavigation;
