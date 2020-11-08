import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Input from '../components/Input';
import ListItem from '../components/ListItem';


const Bucketlist = () => {
  const [wish, setWish] = useState('');
  // const [list, setList] = useState([
  const wishList = [
    {id: '1', title: 'Venice'},
    {id: '2', title: 'Paris'},
    {id: '3', title: 'Barcelona'},
  ];
  const renderList = wishList.map(({itemList})=>(<ListItem item={itemList} />));
  //]); //dummy data to be changed
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
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="add" size={40} color='grey' />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={wishList}
            renderItem={({itemList}) => (<ListItem item={itemList} />)}
          />
         
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
