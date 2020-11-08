import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Colors from '../constants/Colors';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Habiba Hamed',
    email: 'habiba@gmail.com',
    age: 23,
    picture: require('../assets/images/profile-picture.png'),
  });
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={user.picture}
          //style={styles.image}
          resizeMode="contain"
          style={[styles.image,{width: windowWidth * 0.5 ,height: windowHeight*0.2,borderRadius:windowWidth * 0.5 }]}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.age}>{user.age} years old</Text>
      </View>
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
    //paddingHorizontal:20,
    paddingTop:20,
    marginVertical:10
    //backgroundColor: 'red',
  },
  info: {
    paddingHorizontal: 30,
    paddingBottom:10,
    //marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondaryColor,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  email: {
    //marginVertical:2,
    color: 'dimgrey',
  },
  age: {
    color: 'dimgrey',
  },
 
});
export default Profile;
