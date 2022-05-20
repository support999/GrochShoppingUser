import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignInScreen,
  SignUpScreen,
  OnboardingScreen,
  OTPScreen,
} from '../screens/auth';

import {AuthContext} from '../context/AuthProvider';

const RootStack = createNativeStackNavigator();

function AuthNavigation() {
  const {firstLaunch} = useContext(AuthContext);
  //
  return (
    <RootStack.Navigator initialRouteName={firstLaunch ? 'Onboard' : 'SignIn'}>
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="Onboard"
        component={OnboardingScreen}
      />
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignInScreen}
      />
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUpScreen}
      />

      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="OTP"
        component={OTPScreen}
      />
    </RootStack.Navigator>
  );
}

export default AuthNavigation;
