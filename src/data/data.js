import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// fetch list of category
export const fetchCategory = async () => {
  try {
    const res = await axios.get(`/Category`);
    return res.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// fetch nearby vendor based on user location
export const vendorsNearby = async location => {
  try {
    const res = await axios.get(
      `/Vendor/VenderNearBy?latitude=${location.lat}&longitude=${location.lng}`,
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

//
export const fetchHistory = async () => {
  try {
    const res = await axios.get(`/Order/History?customerId=11`);
    // console.log(res.data.result[163]);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const checkHeaderParameter = () => {
  if (axios.defaults.headers.Authorization === undefined) {
    console.log('header is missing');
  }
};

// return list of product based on the searched work
export const searchProductByName = async name => {
  try {
    console.log('searching for ', name);

    const res = await axios.get(
      // return image
      // `/Product/VenderProductImage?name=Sticks - Jeera Bread`,

      // returns lit of product by name
      `/Product/VenderProductByName?name=${name}`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// return list of product for a single vendor
export const searchVendorProduct = async (productName, vendorId) => {
  try {
    const res = await axios.get(
      `search/productByVendorId?name=${productName}&VendorId=${vendorId}`,
    );
    console.log(res?.data);
    return res?.data[0]?.VendorProducts;
  } catch (error) {
    console.log('Store error', error);
    return [];
  }
};

// returns list of vendors based on the searched word
export const searchVendorByProductName = async name => {
  try {
    console.log('searching for ', name);
    const res = await axios.get(
      // return image
      // `/Product/VenderProductImage?name=Sticks - Jeera Bread`,

      // returns lit of product by name
      `/Search/VenderProducts?name=${name}`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// getting vendor product Image
export const vendorProductImage = async () => {
  // http://164.52.219.97/Grochouse_V2/api/Product/VenderProductImage?name=Cheese%20-%20Gouda
  try {
    const res = await axios.get(
      // return image
      `/Product/VenderProductImage?name=Sticks - Jeera Bread`,

      // returns list of vendors that sells a producr product similar to vendor nearby
      // `/Search/VenderProducts?name=rice`,

      // returns a particulr vendoer information contains vendors product
      // `/Vendor/VenderByName?name=ADAYAT RICE & FLOUR MILL"`,

      // returns lit of product by name
      // `/Product/VenderProductByName?name=bread`,
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

// add to bag method
export const addToBag = (item, currentbag) => {
  const newItem = {
    productName: item.productName || item.ProductName,
    productPrice: item.productPrice || item.ProductPrice,
    totalPrice: item.productPrice || item.ProductPrice,
    productImage: item.productImage || item.ProductImage,
    productWeight: item.productWeight || item.ProductWeight,
    productQuantity: 1,
    productId: item.productId || item.ProductId,
  };
  // console.log(newItem);
  var tempSearch = [];
  // tempSearch = frequentSearch;
  tempSearch.push(newItem);
  Array.prototype.push.apply(tempSearch, currentbag);
  // console.log(tempSearch.length);
  return tempSearch;
};

//s
export const searchVendorByProductId = async (productId, location) => {
  try {
    const res = await axios.get(
      // returns lit of product by name
      `/Vendor/VenderNearBy?productId=${productId}&latitude=${location.lat}&longitude=${location.lng}&service=Grocery&userId=12&radius=15.00`,
      // `/Search/VenderProducts?ProductId=${productId}&latitude=${location.lat}&longitude=${location.lng}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// add to bsket
export const addToBasket = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('bag', jsonValue);
    // console.log('added to bag');
  } catch (e) {
    console.log(e);
  }
};

export const getBasket = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('bag');
    // if we have token on device
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
