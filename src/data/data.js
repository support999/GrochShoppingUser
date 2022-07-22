import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

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
      `Vendor/VenderNearByMe?productId=263113&latitude=23.2164638&longitude=77.389849&service=Grocery&userId=12&radius=15`,
    );
    return res.data;
  } catch (error) {
    console.log('Vendors nearby', error);
    return [];
  }
};

//
export const fetchHistory = async customerId => {
  try {
    const res = await axios.get(`/Order/History?customerId=${customerId}`);
    return res.data;
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
    console.log('search for ', name);

    const res = await axios.get(
      `Vendor/NearByVenderProduct?productname=${name}&latitude=23.2164638&longitude=77.389849&service=Grocery&userId=12&radius=15.00`,
    );

    return res.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// return list of product for a single vendor
export const fetchVendorProduct = async (productName, vendorId) => {
  try {
    const res = await axios.get(
      `/Product/VenderProducts?vendorId=${184137}&latitude=23.2164638&longitude=77.389849&service=Grocery&userId=12&radius=15.00`,
    );
    // console.log(res?.data.result[0]);
    return res?.data?.result;
  } catch (error) {
    console.log('Store error', error);
    return [];
  }
};

// search product of single vendor
export const searchVendorProduct = async (productName, vendorId) => {
  try {
    const res = await axios.get(
      `/Product/VenderProductByNameAndVendorId?name=${productName}&vendorid=${184137}`,
    );
    // console.log(res?.data.result[0]);
    return res?.data?.result;
  } catch (error) {
    console.log('Store error', error);
    return [];
  }
};

// return list of procuct from a vendor based on category
export const vendorProductByCategory = async (categoryId, vendorId) => {
  try {
    const res = await axios.get(
      `/Category/VenderProductByCategoryndVendorId?_categoryid=${categoryId}&vendorid=184137`,
    );
    // console.log(res?.data.result[0]);
    return res?.data?.result;
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
export const vendorProductImage = async name => {
  try {
    const res = await axios.get(`/Product/VenderProductImage?name=${name}`);
    return res?.data?.result[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

// add to bag method
export const addToBag = (item, currentbag, customerId, vendorId) => {
  const newItem = {
    productName: item.productName || item.ProductName,
    productPrice: item.productPrice || item.ProductPrice,
    productImage: item.productImage || item.ProductImage,
    productWeight: item.productWeight || item.ProductWeight,

    orderProductId: 0,
    orderId: 0,
    vendorProductId: item.productId || item.ProductId,
    price: item.productPrice || item.ProductPrice,
    quantity: 1,
    createdDate: moment().format('YYYY-MM-DD').toString(),
    modifiedDate: moment().format('YYYY-MM-DD').toString(),
    createdBy: customerId.toString(),
    modifiedBy: customerId.toString(),
    vendorId,
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
    console.log(res.data);
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
  var basket = [];
  try {
    const jsonValue = await AsyncStorage.getItem('bag');
    // if we have token on device
    if (jsonValue !== null) {
      basket = JSON.parse(jsonValue);
    }
    return basket;
  } catch (e) {
    // error reading value
    console.log(e);
    return basket;
  }
};

export const removeFromAsyncStorage = async name => {
  try {
    AsyncStorage.removeItem(name);
    // if we have token on device
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

// top pick
export const getTopPickProducts = async userId => {
  try {
    const res = await axios.get(`/Vendor/TopPickups?customerId=${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// save orderf product t tot the data base
export const orderProduct = async (bag, customerId) => {
  const body = {
    orderId: 0,
    vendorId: 214049,
    customerId: customerId,
    currencyId: 1,
    totalQuantity: 1,
    orderBookedDate: null,
    orderAcceptedDate: null,
    orderCancelledDate: null,
    orderDeliveredDate: null,
    orderPickedDate: null,
    orderRefundInitiatedDate: null,
    orderRefundCompletedDate: null,
    orderProcessedDate: null,
    isOrderCancelled: 0,
    isOrderCancelledByCustomer: 0,
    isOrderCancelledByVendor: 0,
    initialEstimatedDeliveryTimeInMinutes: null,
    paymentModeId: null,
    totalPrice: null,
    netPrice: null,
    discounts: null,
    deliveryCharges: null,
    taxCharges: null,
    orderStatusId: null,
    createdDate: null,
    modifiedDate: null,
    createdBy: null,
    modifiedBy: null,
    orderProductsDto: bag,
  };
  // console.log(bag[0].vendorId);

  try {
    const res = await axios.post('/Order/Orders', body);
    console.log('respons', res.data);
    return res.data;
  } catch (error) {
    console.log(' order error ', error);
    return null;
  }
};

// top purchsed vendors
export const getPreviousVendors = async userId => {
  try {
    const res = await axios.get(
      `/Vendor/TopVendorByCustomerId?customerId=${userId}`,
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// get nearby vendor banner
export const getVendorBanner = async (location, userId) => {
  try {
    const res = await axios.get(
      `/Vendor/VendorBanner?latitude=${location.lat}&longitude=${location.lng}&radius=10&userId=${userId}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
