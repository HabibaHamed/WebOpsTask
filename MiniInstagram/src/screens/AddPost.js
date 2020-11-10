import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from '../components/ImagePicker';
import {Picker} from '@react-native-picker/picker';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

const AddPost = ({navigation}) => {
  //const temp = useSelector((state) => state.posts);
  //console.log(temp);
  const dispatch = useDispatch();
  const {posts,nextId} = useSelector((state) => state.posts);
  const {bucketlist, isLoading} = useSelector((state) => state.bucketlist);
  const [wish, setWish] = useState('');
  
  const [images, setImages] = useState([
    {
      key: 1,
      dist: require('../assets/images/venice.jpg'),
      picked: false,
      imageName: 'italy',
    },
    {
      key: 2,
      dist: require('../assets/images/egypt.jpg'),
      picked: false,
      imageName: 'egypt',
    },
    {
      key: 3,
      dist: require('../assets/images/paris.jpg'),
      picked: false,
      imageName: 'france',
    },
  ]);
  //console.log(images);
  // const bucketlist = [
  //    'Venice','Paris','Barcelona',
  // ];
  const [picked, setPicked] = useState(0);
  const updatePicked = (imageKey, isPicked) => {
    //console.log('key', imageKey,'isPicked',isPicked);
    setImages(
      images.map((image) =>
        (image.key == imageKey)? ({...image, picked: isPicked}): ({...image, picked: false})),
    );
    //console.log(images);
  };

  const newPost = () => {
    let pickedImageName = '';
    images.forEach(function (image) {
      if (image.picked) {
        pickedImageName = image.imageName;
      }
    });
    if (pickedImageName !== '') {
      //object payload
      //console.log("picked image name",pickedImageName);
      const newPostObj = {
        id: nextId,
        username: 'habiba.hamed', // to be changed to users info
        days: Math.floor(Math.random() * 100),
        picture: 'default profile',// to be changed to users info
        image: pickedImageName,
        likes: Math.floor(Math.random() * 100),
        destination: wish,
      };
      //const updatedPosts = [...posts, newPostObj];
      dispatch({type: 'ADD_POST', newPostObj}).then(navigation.navigate('NewsFeed'));
    } else {
      Alert.alert('Please pick an image to be posted');
    }
  };
  const renderImages = images.map((image) => {
    return (
      <ImagePicker key={image.key} image={image} togglePicked={updatePicked} />
    );
  });
  const renderList = bucketlist.map((item) => {
    return <Picker.Item key={item} label={item} value={item} />;
  });

  useEffect(() => {
    dispatch({type: 'FETCH_BUCKETLIST'});
  }, []);
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
      <ScrollView horizontal style={styles.imagesList}>
        {renderImages}
      </ScrollView>
      <View style={styles.pickWish}>
        <Text style={styles.headerWish}>
          Add destination from your bucketlist
        </Text>
        <Picker
          selectedValue={wish}
          style={{color: Colors.secondaryColor}}
          onValueChange={(itemValue, itemIndex) => setWish(itemValue)}>
          <Picker.Item label={'Choose a destination'} value={''} />
          {renderList}
        </Picker>
        <TouchableOpacity
          style={styles.addPostContainer} //navigation.navigate('NewsFeed')}>
          onPress={newPost}>
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
    height: '100%',
  },
  imagesList: {
    flexDirection: 'row',
    //justifyContent:'center',
    //alignItems:'center',
    //backgroundColor:'black',
    flex: 2,
    //width:'100%'
  },
  pickWish: {
    flex: 1,
    padding: 10,
    //backgroundColor:'red',
    margin: 10,
  },
  headerWish: {
    color: Colors.headerColor,
    fontSize: 18,
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
