import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthProvider';
import {initBaseurl, loadToken} from '../data/user';
import {ActivityIndicator} from '../components';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import {baseUrl} from '../util/util';

initBaseurl(baseUrl);

const Routes = () => {
  const {isLoading, setIsLoading, setAuth, setUser, user} =
    useContext(AuthContext);

  function onAuthStateChanged(user) {
    // console.log(user);
    // setUser(user);
    if (user) {
      user.getIdToken().then(function (idToken) {
        // <------ Check this line
        // console.log(idToken);
        // setAuth(true);
      });
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const initToken = async () => {
    await loadToken();
    setIsLoading(false);
  };

  useEffect(() => {
    initToken();
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
