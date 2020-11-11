/*Responsible for api calls using axios and AsyncStorage */

import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const apiUrl = 'http://localhost:3000';
const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', //to be changed to localhost after finishing debugging
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
/**Users API */
export async function login(user) {
  try {
    console.log('login api');
    const response = await api.get('/users');
    //console.log(response);
    if ( //or use email and password in header
      response.data.email === user.email &&
      response.data.password === user.password
    ) {
      console.log('log in successful');
      return response.data;
    }
    else{
      Alert.alert("Wrong Username or password");
    }
  } catch (error) {
    Alert.alert("Login failed, please try again");
    console.log(error);
  }
}

/**Posts API */
export async function fetchPosts() {
  try {
    const response = await api.get('/posts?_sort=id&_order=asc');
    return response.data;
  } catch (error) {
    console.log(error);
    return "Fetch_failed";
  }
}
export async function addNewPost(newPosts) {
  try {
    console.log('check api', newPosts);
    const response = await api.post('/posts', newPosts);
    return response.data;
  } catch (error) {
    console.log(error);
    return 'Add_failed';
  }
}

/**Bucketlist API */
export const fetchBucklist = async () => {
  try {
    const bucketList = await AsyncStorage.getItem('habiba.hamed'); //the key should be the username of the user or token of logged in user
    return bucketList != null ? JSON.parse(bucketList) : []; //if no items in bucketlist of this user return empty array
  } catch (e) {
    console.log(error);
    return "Fetch_failed";
  }
};

export const addBucketlist = async (newList) => {
  try {
    const jsonValue = JSON.stringify(newList);
    await AsyncStorage.setItem('habiba.hamed', jsonValue);
  } catch (e) {
    console.log(error);
    return 'Add_failed';
  }
};
export const removeBucketlist = async (removeItem) => {
  try {
    //let jsonValue = JSON.stringify(newList)
    //console.log("remove bucketlist");
    const bucketlist = await AsyncStorage.getItem('habiba.hamed');
    const newList = JSON.parse(bucketlist).filter(function (value, index, arr) {
      return value !== removeItem;
    });
    //console.log("remove bucketlist",newList,"check");
    const jsonValue = JSON.stringify(newList);
    await AsyncStorage.setItem('habiba.hamed', jsonValue);
  } catch (e) {
    // save error
  }
};
//temp if want to erase the storage data
export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};
