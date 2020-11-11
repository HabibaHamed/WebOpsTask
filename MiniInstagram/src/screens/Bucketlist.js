/**Bucketlist screen for showing/adding users wishes */

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Input from '../components/Input';
import ListItem from '../components/ListItem';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import Colors from '../constants/Colors';

const Bucketlist = () => {
  const dispatch = useDispatch();

  //store state and component state
  const {bucketlist, isLoading, fetchSuccessful} = useSelector(
    (state) => state.bucketlist,
  );
  const [wish, setWish] = useState('');

  //helper function
  const addNewWish = () => {
    const updatedList = [...bucketlist, wish];
    dispatch({type: 'ADDTO_BUCKETLIST', updatedList});
  };
  const loadBucketlist = () => {
    dispatch({type: 'FETCH_BUCKETLIST'});
  };

  useEffect(() => {
    //dispatch({type:'CLEAR_BUCKETLIST'});
    dispatch({type: 'FETCH_BUCKETLIST'});
  }, []);

  //render function (Flatlist instead)
  const renderList = bucketlist.map((itemList) => (
    <ListItem key={itemList} item={itemList} />
  ));

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator
          size="large"
          loading={isLoading}
          color={Colors.secondaryColor}
        />
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
            <Icon name="add" size={40} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          {/* <FlatList
            keyExtractor={(item) => item.id}
            data={wishList}
            renderItem={itemList => (<ListItem item={itemList} />)}
          /> */}
          {fetchSuccessful ? (
            renderList
          ) : (
            <TouchableOpacity style={styles.refreshButton} onPress={loadBucketlist}>
              <Icon name="refresh" size={40} color="grey" />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {flex: 1},
  addBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  refreshButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
});
export default Bucketlist;
