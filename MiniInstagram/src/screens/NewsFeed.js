import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import Post from '../components/Post';


const NewsFeed = ({navigation}) => {
  const [posts, setPosts] = useState({
    username: 'habiba.hamed',
    email: 'habiba@gmail.com',
    date: new Date('09/30/2020'),
    picture: require('../assets/images/profile-picture.png'),
    image: require('../assets/images/venice.jpg'),
    likes: 23,
  });
  return (
    <View style={styles}>
      <TouchableOpacity style={styles.addPostContainer} onPress={()=>navigation.navigate('AddPost')}>
      <Icon name="add" size={40} color='white'/>
        <Text style={styles.addPostText}>AddPost</Text>
      </TouchableOpacity>
      <Post post={posts}/>
    </View>
  );
};
const styles = StyleSheet.create({
container:{
  flex:1,
  //backgroundColor:'white'
},
addPostContainer:{
  backgroundColor: Colors.secondaryColor,
  justifyContent:'center',
  alignItems:'center',
  margin:10,
  borderRadius:20,
  flexDirection:'row'
},
addPostText:{
  fontSize:18,
  paddingVertical:20,
  color:'white',
  //backgroundColor:'black'
}
});
export default NewsFeed;
