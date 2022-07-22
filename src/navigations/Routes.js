import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthProvider';
import {addUser, initBaseurl, loadToken, setHeaders} from '../data/user';
import {ActivityIndicator} from '../components';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import {baseUrl} from '../util/util';

initBaseurl(baseUrl);

const Routes = () => {
  const {isLoading, setIsLoading, setAuth, setUser, user} =
    useContext(AuthContext);

  function onAuthStateChanged(user) {
    if (user) {
      user.getIdToken().then(function (idToken) {
        setHeaders(idToken);
      });

      // store user details
      saveUser(user.phoneNumber);
    }

    setIsLoading(false);
  }
  // console.log(new Date().toISOString());
  const saveUser = async phoneNumber => {
    console.log(phoneNumber);
    const body = {
      user: {
        userId: 0,
        mobileNumber: phoneNumber,
        emailId: 'Nil',
        password: 'Nil',
        isCustomer: 0,
        isVendor: 0,
        isDeliveryDriver: 0,
        isVerified: 0,
        createdDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString(),
        createdBy: 'string',
        modifiedBy: 'string',
        token: 0,
        tokentime: 'string',
        isActive: true,
        firebaseId: 'string',
        userGuid: 'string',
      },
      _lat: {
        latitude: '23.2546',
        longitude: '77.2356',
      },
    };

    const res = await addUser(body);
    console.log(res);

    setAuth(true);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const initToken = async () => {
    await loadToken();
    setIsLoading(false);
  };

  useEffect(() => {
    // initToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator show={isLoading} size="large" color="red" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MainNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Routes;
