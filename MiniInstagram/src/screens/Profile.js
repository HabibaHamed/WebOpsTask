/**Profile screen is responsible for displaying user's info */

import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import Post from '../components/Post';

const Profile = () => {
  const{user} = useSelector((state)=>state.user);
  const {posts,isLoading} = useSelector((state)=>state.posts);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  
  const usersPosts = posts.filter(function(post){ return post.username === user.username});

  const renderPosts = usersPosts.map(post =>(<Post key={post.id} post={post}/>));
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri:user.picture}}
          resizeMode="contain"
          style={[styles.image,{width: windowWidth * 0.5 ,height: windowHeight*0.2,borderRadius:windowWidth * 0.5 }]}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.age}>{user.age} years old</Text>
      </View>
      <ScrollView style={styles.userPosts}>
        {renderPosts}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    paddingTop:20,
    marginVertical:10
  },
  info: {
    paddingHorizontal: 30,
    paddingBottom:10,
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.secondaryColor,
  },
  userPosts:{
    marginVertical:10,

  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  email: {
    color: 'dimgrey',
  },
  age: {
    color: 'dimgrey',
  },
 
});
export default Profile;
