import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from '../screens';
import MainNavigation from './MainNavigation';

import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthProvider';
import {CustomStatusBar} from '../components';
const Routes = () => {
  const {auth, isLoading, setAuth, user} = useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <CustomStatusBar />
          <MainNavigation />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
};

export default Routes;
// https://mobile.sprogteam.dk/api/authenticate/login
