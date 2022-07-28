import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTab from './BottomTab';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function MajorNavigation({}) {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen options={{}} name="Tab" component={BottomTab} />
    </RootStack.Navigator>
  );
}

export default MajorNavigation;
