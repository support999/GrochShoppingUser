import axios from 'axios';
import {baseUrl} from '../util/util';

export const fetchCategory = async () => {
  try {
    const res = await axios.get(`${baseUrl}/Category`);
    return res.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const vendorsNearby = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/Vendor/VenderNearBy?latitude=70.000&longitude=29.30`,
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchHistory = async () => {
  try {
    const res = await axios.get(`${baseUrl}/Order/History?customerId=11`);
    console.log(res.data.result);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const data = {
  city: 'Chamba',
  country: 'India',
  createdBy: '6',
  createdDate: '2021-12-13T22:40:18.487',
  emailId: null,
  isActive: false,
  isDisabled: 1,
  isPremium: '0',
  modifiedBy: '6',
  modifiedDate: '2021-12-13T22:40:18.487',
  orders: [],
  postcode: '176302',
  primaryPhoneNumber: '',
  registrationNumber: null,
  shopName: 'Chowari CH',
  state: 'Himachal Pradesh',
  street: 'NA',
  userId: null,
  vendorAddress: 'NA',
  vendorAddressLine2: 'NA',
  vendorBusinessHours: [],
  vendorClosingTime: '22:00',
  vendorDiscounts: [],
  vendorDocuments: [],
  vendorGuid: '236AD08E-E25F-4020-B290-0C8269933533',
  vendorId: 237769,
  vendorLatitude: 32.42914265,
  vendorLogoUrl: null,
  vendorLongitude: 76.01339712,
  vendorName: 'Chowari CH-Chamba',
  vendorOpeningTime: '10:00',
  vendorPhones: [],
  vendorProducts: [],
  vendorRatings: [],
  vendorServiceOffereds: [],
  vendorWorkingDays: 'Su,Mo,Tu,We,Th,Fr,Sa',
};
