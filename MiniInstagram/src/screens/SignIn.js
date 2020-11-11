/**Sign In screen for logging in the user*/

import React, {useState} from 'react';
import {View, StyleSheet, Image, Text,useWindowDimensions, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Input from '../components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [input, setInput] = React.useState({email:'',password:''});
 
  //helper function
  const submitLogin = ()=>{
    dispatch({type:'LOG_IN',user:input});
  }
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
        }}>
        <View style={[styles.imageContainer,{height: windowHeight*0.5}]}>
          <Image
            source={require('../assets/images/instagram-logo.png')}
            //style={styles.image}
            resizeMode="contain"
            style={{width:windowWidth*0.7}}
          />
        </View>
        <View style={styles.form}>
          <Input placeHolder="Email" password={false} value = {input['email']} onChange={text=>setInput({...input,email:text})}/>
          <Input placeHolder="Password" password={true} value = {input['password']} onChange={text=>setInput({...input,password:text})}/>
          <View style={styles.btnContainer}>
            <TouchableOpacity //to be changed for the check later
              style={[
                styles.btnLogin,
                {backgroundColor: !input.email||!input.password ? 'grey': Colors.headerColor, width:windowWidth*0.5}
              ]} //to be changed to dispatching auth action and navigation
              onPress = {submitLogin}
              disabled={!input.email||!input.password}>
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
    width: '100%',
    justifyContent: 'center',
  },
  form: {
    flex: 2,
    width: '100%',
  },
  btnContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: Colors.headerColor,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 14,
    color: 'white',
  },
});
export default SignIn;
