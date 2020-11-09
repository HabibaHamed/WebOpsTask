import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
//import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Input from '../components/Input';
import ListItem from '../components/ListItem';
import store from '../store/store';
import {useSelector,useDispatch} from 'react-redux';
import { ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';

const Bucketlist = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {bucketlist,isLoading} = useSelector((state) => state.bucketlist);
  
  //console.log(bucketlist);
  const [wish, setWish] = useState('');
  // const [list, setList] = useState([
  // const wishList = [
  //   {id: '1', title: 'Venice'},
  //   {id: '2', title: 'Paris'},
  //   {id: '3', title: 'Barcelona'},
  // ];

  const addNewWish =()=>{
    //console.log('add the post');
    const updatedList = [...bucketlist,wish];
    //console.log('updated'+updatedList);
    dispatch({type:'ADDTO_BUCKETLIST',updatedList})
    //console.log(listState);
  };
  useEffect(() => {     
   // dispatch({type:'CLEAR_BUCKETLIST'});
      dispatch({type:'FETCH_BUCKETLIST'}); //check for async/await to stop loading till bucketlist get fetched
  
  }, []);
  const renderList = bucketlist.map(itemList=>(<ListItem key={itemList} item={itemList}/>));
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" loading={isLoading} color={Colors.secondaryColor}/>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
        }}>
        <View style={styles.addBar}>
          <Input
            placeHolder="Add Wish"
            password={false}
            onChange={(newWish) => setWish(newWish)}
            value={wish}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={addNewWish}>
            <Icon name="add" size={40} color='grey' />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          {/* <FlatList
            keyExtractor={(item) => item.id}
            data={wishList}
            renderItem={itemList => (<ListItem item={itemList} />)}
          /> */}
         {renderList}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  scrollViewContainer: {flex: 1},
  addBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  iconContainer: {
    //backgroundColor:'red',
    marginHorizontal: 5,
    //padding:5
  },
  list: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
    //alignItems:'center'
  },
});
export default Bucketlist;
