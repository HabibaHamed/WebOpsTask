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
    const response = await api.get("/posts");
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
//temp if want to erase the storage data 
export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}
