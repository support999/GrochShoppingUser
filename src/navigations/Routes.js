import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigation';

import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthProvider';
import {setHeaders, token} from '../util/util';

const initToken = async () => {
  await setHeaders(token);
};

initToken();

const Routes = () => {
  const {auth, isLoading, setAuth, user} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MainNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Routes;
