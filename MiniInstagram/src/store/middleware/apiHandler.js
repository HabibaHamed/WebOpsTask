import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const apiUrl = "http://localhost:3000";
const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', //to be changed to localhost after finishing debugging
  headers: {
      'Content-Type': 'application/json'
  },
})
export async function fetchPosts() {
  try {
    const response = await api.get("/posts?_sort=id&_order=asc");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function addNewPost (newPosts){
  try {
    console.log('check api',newPosts);
    const response = await api.post("/posts",newPosts);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchBucklist = async () => {
  try {
    const bucketList = await AsyncStorage.getItem('habiba.hamed') //the key should be the username of the user or token of logged in user
    return bucketList != null ? JSON.parse(bucketList) : [] //if no items in bucketlist of this user return empty array
  } catch(e) {
    // error reading value
  }

};

export const addBucketlist = async (newList) =>{
  try {
    const jsonValue = JSON.stringify(newList)
    await AsyncStorage.setItem('habiba.hamed', jsonValue)
  } catch(e) {
    // save error
  }
  
}
export const removeBucketlist = async (removeItem) =>{
  try {
    //let jsonValue = JSON.stringify(newList)
    //console.log("remove bucketlist");
    const bucketlist = await AsyncStorage.getItem('habiba.hamed');
    const newList = JSON.parse(bucketlist).filter(function(value, index, arr){ return value !== removeItem;});
    //console.log("remove bucketlist",newList,"check");
    const jsonValue = JSON.stringify(newList);
    await AsyncStorage.setItem('habiba.hamed', jsonValue);
  } catch(e) {
    // save error
  }
}
//temp if want to erase the storage data 
export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}
