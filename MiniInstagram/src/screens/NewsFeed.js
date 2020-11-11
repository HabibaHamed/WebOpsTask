/**Newsfeed screen responsible for viewing all posts done */

import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import Post from '../components/Post';
import { ActivityIndicator } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const NewsFeed = ({navigation}) => {
  const dispatch = useDispatch();
  const {posts,isLoading} = useSelector((state)=>state.posts);

  useEffect(() => { 
      dispatch({type:'FETCH_POSTS'});
  }, []);

  //helper function
  function latest(post1, post2) {
    // if (post1.date.getTime() > post2.date.getTime()) return -1;
    // if (post2.date.getTime() > post1.date.getTime()) return 1;
    if (post1.days>post2.days) return 1;
    if (post2.days>post1.days) return -1;
    return 0;
  }

  //render function
  const renderList = posts.slice().sort(latest).map(post => (<Post key={post.id} post={post}/>));
  
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" loading={isLoading} color={Colors.secondaryColor}/>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}> 
   
      <TouchableOpacity
        style={styles.addPostContainer}
        onPress={() => navigation.navigate('AddPost')}>
        <Icon name="add" size={40} color="white" />
        <Text style={styles.addPostText}>Add Post</Text>
      </TouchableOpacity>
      {/* <FlatList //would rather work with FlatList for better performance
        data={posts}
        keyExtractor={(post) => post.username}
        renderItem={({post}) =>  <Post post={post}/>}
      /> */}
      
        {renderList}
      </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'white'
  },
  addPostContainer: {
    backgroundColor: Colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  addPostText: {
    fontSize: 18,
    paddingVertical: 20,
    color: 'white',
    //backgroundColor:'black'
  },
  list:{
   // flex:1
  }
});
export default NewsFeed;
