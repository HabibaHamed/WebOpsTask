/**Screen for adding a post and optional wish from bucketlist*/

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
  const dispatch = useDispatch();

  //store states and components states
  const {posts, nextId} = useSelector((state) => state.posts);
  const {bucketlist, isLoading} = useSelector((state) => state.bucketlist);
  const{user} = useSelector((state)=>state.user);
  const [wish, setWish] = useState('');
  const [images, setImages] = useState([
    {
      key: 1,
      dist: 'https://img.etimg.com/thumb/msid-66129697,width-640,resizemode-4,imgsize-342241/how-to-get-your-trips-sponsored.jpg)',
      picked: false,
      imageName: 'italy',
    },
    {
      key: 2,
      dist: 'https://www.intrepidtravel.com/sites/intrepid/files/styles/low-quality/public/Intrepid%20Travel-Egypt-Abu-Simbel-137_0.jpg',
      picked: false,
      imageName: 'egypt',
    },
    {
      key: 3,
      dist:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F08%2Fsolo-travel-paris-MOBILEMOONS0819.jpg',
      picked: false,
      imageName: 'france',
    },
  ]);
  //const [picked, setPicked] = useState(0);

  //helper functions
  const updatePicked = (imageKey, isPicked) => {
    setImages(
      images.map((image) =>
        image.key == imageKey
          ? {...image, picked: isPicked}
          : {...image, picked: false},
      ),
    );
  };
  const newPost = () => {
    let pickedImageUrl = '';
    images.forEach(function (image) {
      if (image.picked) {
        pickedImageUrl = image.dist;
      }
    });
    if (pickedImageUrl !== '') {
      const newPostObj = {
        id: nextId,
        username: user.username, // to be changed to users info
        days: Math.floor(Math.random() * 100),
        picture: user.picture, // to be changed to users info
        image: pickedImageUrl,
        likes: Math.floor(Math.random() * 100),
        destination: wish,
      };
      dispatch({type: 'ADD_POST', newPostObj});
    } else {
      Alert.alert('Please pick an image to be posted');
    }
  };

  //rendering list functions (FlatList better option instead)
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
          style={styles.addPostContainer}
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
    flex: 2,
  },
  pickWish: {
    flex: 1,
    padding: 10,
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
  },
});
export default AddPost;
