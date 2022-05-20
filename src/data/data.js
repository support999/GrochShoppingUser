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
