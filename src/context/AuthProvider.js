import React, {createContext, useState} from 'react';
import {baseUrl} from '../util/util';

// Prepares the dataLayer
export const AuthContext = createContext();

// Wrap our app and provide the Data layer
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState(true);
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [vendorsNearBy, setVendorsNearBy] = useState([]);
  var [basket, setBasket] = useState([]);
  const [reloadBasket, setReloadBasket] = useState(false);
  const [url, setUrl] = useState(baseUrl);
  // {lat: 28.7121, lng: 77.206}
  const [location, setLocation] = useState(null);
  const [badge, setBadge] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);
  const [refreshFlatlist, setRefreshFlatList] = useState(false);
  const [orders, setOrders] = useState([]);
  const [reloadOrder, setReloadOrder] = useState(true);
  const [previousVendors, setPreviuosVendors] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        auth,
        setAuth,
        firstLaunch,
        setFirstLaunch,
        categories,
        setCategories,
        vendorsNearBy,
        setVendorsNearBy,
        basket,
        setBasket,
        reloadBasket,
        setReloadBasket,
        url,
        setUrl,
        location,
        setLocation,
        badge,
        setBadge,
        payableAmount,
        setPayableAmount,
        refreshFlatlist,
        setRefreshFlatList,
        orders,
        setOrders,
        reloadOrder,
        setReloadOrder,
        previousVendors,
        setPreviuosVendors,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
