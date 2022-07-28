import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, NumberOtp} from '../screen';

import {AuthContext} from '../context/AuthProvider';

const RootStack = createNativeStackNavigator();

function AuthNavigation() {
  const {firstLaunch} = useContext(AuthContext);
  //
  return (
    <RootStack.Navigator initialRouteName={firstLaunch ? 'Onboard' : 'SignIn'}>
      {/* <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      /> */}
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="NumberOtp"
        component={NumberOtp}
      />
    </RootStack.Navigator>
  );
}

export default AuthNavigation;
