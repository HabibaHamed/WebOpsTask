import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import Post from '../components/Post';

const NewsFeed = ({navigation}) => {
  const [posts, setPosts] = useState([
    {
      username: 'malak.hussein',
      email: 'habiba@gmail.com',
      date: new Date('10/30/2020'),
      picture: require('../assets/images/profile-picture.png'),
      image: require('../assets/images/venice.jpg'),
      likes: 23,
    },
    {
      username: 'aly.ibrahim',
      email: 'aly@gmail.com',
      date: new Date('09/30/2020'),
      picture: require('../assets/images/profile-picture.png'),
      image: require('../assets/images/india.jpg'),
      likes: 44,
    }]
  );
  function latest(post1, post2) {
    if (post1.date.getTime() > post2.date.getTime()) return -1;
    if (post2.date.getTime() > post1.date.getTime()) return 1;
  
    return 0;
  }
  const renderList = posts.sort(latest).map(post => (<Post key={post.username} post={post}/>));
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
