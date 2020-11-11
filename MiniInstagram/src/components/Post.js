/**Post Component for generating a post view*/

import React from 'react';
import {View, Text, StyleSheet, Image,useWindowDimensions} from 'react-native';

const Post = ({post}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  //add library moments instead
  // const calculateDays = () => {
  //   let Difference_In_Time = new Date().getTime() - post.date.getTime();
  //   return Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  // };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.info}>
          <View style={styles.pictureContainer}>
            <Image
              source={{uri:post.picture}}
              resizeMode="contain"
              style={[styles.picture,{width: windowWidth*0.1, height: windowWidth*0.1,borderRadius:windowWidth * 0.6}]}
            />
          </View>
          <Text>{post.username}</Text>
        </View>
        <Text style={{color:'grey'}}>{post.days}d</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{uri: post.image}}
          resizeMode="contain"
          style={{width:windowWidth,height: windowWidth*0.5,backgroundColor:'black'}}
        />
      </View>
      <View style={styles.footer}>
        <Text style={{color:'grey'}}>{post.likes} likes</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: 'white',
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pictureContainer: {
    marginHorizontal:10,
  },
  imageContainer: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'white',
    marginVertical: 2,
    padding: 10,
  },
});
export default Post;
