/**Customized input component */

import React from 'react';
import {useWindowDimensions} from 'react-native';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../constants/Colors';

const Input = ({placeHolder, password, onChange, value}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'#AEB6BF'}
        style={[styles.input,{width: windowWidth*8/10}]}
        secureTextEntry={password}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    padding: 8,
    borderRadius: 10,
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    color: Colors.secondaryColor,
    fontSize:16
  },
});
export default Input;
