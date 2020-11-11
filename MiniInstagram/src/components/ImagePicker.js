/**Custom image component for picking an image to be posted */

import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const ImagePicker = ({image, togglePicked}) => {
  const [isPicked, setIsPicked] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const toggleChoice = () => {
    setIsPicked((previousState) => !previousState);
    console.log(isPicked);
    togglePicked(image.key, isPicked);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: image.picked ? 'lightgrey' : 'white',
          borderBottomWidth: 3,
        },
      ]}
      onPress={toggleChoice}>
      <Image
        source={{uri: image.dist}}
        resizeMode="contain"
        style={[
          styles.picture,
          {
            width: windowWidth / 3,
            height: windowHeight / 7,
          },
        ]}
      />
      {image.picked && (
        <Icon name={'check'} color={Colors.secondaryColor} size={20}></Icon>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginHorizontal: 5,
    padding: 5,
  },
});
export default ImagePicker;
