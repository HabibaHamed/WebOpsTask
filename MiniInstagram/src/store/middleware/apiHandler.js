import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const apiUrl = "http://localhost:3000";
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
      'Content-Type': 'application/json'
  },
})
// export const fetchPosts =  () => async()=> {
//   await api.get("/posts")
//     .then((response) => {
//       // handle success
//       console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//       Alert.alert('Error', error);
//     })
//     .then(function () {
//       // always executed
//     });
// };
export async function fetchPosts() {
  try {
    const response = await api.get("/posts");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export const fetchBucklist = async () => {
  try {
    const bucketList = await AsyncStorage.getItem('habiba.hamed') //the key should be the username of the user or token of logged in user
    //console.log('done async'); 
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
