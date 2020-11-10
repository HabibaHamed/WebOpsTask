import React from 'react';
import {View, Text, StyleSheet, Image,useWindowDimensions} from 'react-native';
import {getImages} from '../data/imagePaths';

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
              source={getImages(post.picture)}
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
          source={getImages(post.image)}
          //style={styles.image}
          resizeMode="contain"
          style={{height: windowWidth*0.5}}
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
    //backgroundColor:'lightgrey',
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
    //width: '100%',
    //paddingHorizontal:20,
    //paddingTop:20,
    marginHorizontal:10,
    //backgroundColor: 'black',
    //alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    //paddingHorizontal:20,
    //paddingTop:20,
    // marginVertical:10
    backgroundColor: 'white',
    alignItems: 'center',
  },
  footer: {
    //backgroundColor:'lightgrey',
    backgroundColor: 'white',
    marginVertical: 2,

    padding: 10,
  },
});
export default Post;
