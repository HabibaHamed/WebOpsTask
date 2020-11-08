import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import ImagePicker from '../components/ImagePicker';
import {Picker} from '@react-native-picker/picker';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddPost = ({navigation}) => {
  const [wish, setWish] = useState('');
  const images = [
    {key: 1, dist: require('../assets/images/venice.jpg')},
    {key: 2, dist: require('../assets/images/egypt.jpg')},
    {key: 3, dist: require('../assets/images/paris.jpg')},
  ];
  const bucketList = [
    {id: '1', title: 'Venice'},
    {id: '2', title: 'Paris'},
    {id: '3', title: 'Barcelona'},
  ];
  const [picked, setPicked] = useState(1);
  const togglePicked = (imageKey) => setPicked(imageKey);
  const renderImages = images.map((image) => {
    return <ImagePicker key={image.key} image={image} picked={picked} />;
  });
  const renderList = bucketList.map((item) => {return <Picker.Item label={item.title} value={item.title} />});
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.imagesList}>
        {renderImages}
      </ScrollView>
      <View style={styles.pickWish}>
      <Text style={styles.headerWish}>Add destination from your bucketlist</Text>
      <Picker
        selectedValue={wish}
        style={{color:Colors.secondaryColor}}
        onValueChange={(itemValue, itemIndex) =>
          setWish(itemValue)
        }>
          <Picker.Item label={'Choose a destination'} value={''} />
          {renderList}
      </Picker>
      <TouchableOpacity
        style={styles.addPostContainer}
        onPress={() => navigation.navigate('NewsFeed')}>
        <Icon name="add" size={40} color="white" />
        <Text style={styles.addPostText}>Add Post</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height:'100%'
  },
  imagesList: {
    flexDirection: 'row',
    //justifyContent:'center',
    //alignItems:'center',
    //backgroundColor:'black',
    flex: 1,
    //width:'100%'
  },
  pickWish: {
    flex: 2,
    padding:10,
    //backgroundColor:'red',
    margin:10
  },
  headerWish:{
    color:Colors.headerColor,
    fontSize:18
  },
  addPostContainer: {
    backgroundColor: Colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
    flexDirection: 'row',
  },
  addPostText: {
    fontSize: 18,
    paddingVertical: 10,
    color: 'white',
    //backgroundColor:'black'
  },
});
export default AddPost;
