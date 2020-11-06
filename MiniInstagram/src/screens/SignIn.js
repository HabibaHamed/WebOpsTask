import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Input from '../components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
        }}>
        <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/instagram-logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        </View>
        <View style={styles.form}>
          <Input placeHolder="Username" />
          <Input placeHolder="password" />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {flex: 1, width: '100%'},
  imageContainer: {
    alignItems: 'center',
    width:'100%',
    //flex:1,
    //backgroundColor: 'blue',
    height: '50%',
    justifyContent: 'center',
  },
  image: {
    width: "70%",
    //backgroundColor:'white'
  },
  form: {
    flex: 1,
    width: '100%',
  },
  btnContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#34495E',
    height: 60,
  },
  btnLogin: {
    //backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#34495E',
    justifyContent: 'center',
    padding: 10,
    width: 200,
    borderRadius: 10,
    //height:60
  },
  btnText: {
    fontSize: 14,
    color: '#fff',
    // justifyContent:'center'
  },
});
export default SignIn;
