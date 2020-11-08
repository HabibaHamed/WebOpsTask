import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const ImagePicker = ({image, picked}) => {
  let pickedFlag = image.key===picked;
  const [isPicked, setIsPicked] = useState({picked});
  const toggleChoice = () => setIsPicked((previousState) => !previousState);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  //const toggleChoice = () =>(picked=!picked);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: image.key == isPicked ? 'lightgrey' : 'white',
          borderBottomWidth: 3,
        },
      ]}
      onPress={toggleChoice}>
      <Image
        source={image.dist}
        resizeMode="contain"
        style={[
          styles.picture,
          {
            width: windowWidth / 3,
            height: windowHeight / 7,
          },
        ]}
      />
      {image.key == isPicked && (
        <Icon name={'check'} color={Colors.secondaryColor} size={20}></Icon>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex:1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginHorizontal: 5,
    //backgroundColor:'red',
    padding: 5,
  },
});
export default ImagePicker;
