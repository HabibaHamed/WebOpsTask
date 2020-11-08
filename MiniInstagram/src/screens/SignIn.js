import React, {useState} from 'react';
import {View, StyleSheet, Image, Text,useWindowDimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Input from '../components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Colors from '../constants/Colors';

//const { width, height } = Dimensions.get('window');

const SignIn = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const credentials = ['username', 'password'];
  const [input, setInput] = React.useState({});
  
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
          <Input placeHolder="Username" password={false} value = {input['username']} onChange={text=>setInput({...input,username:text})}/>
          <Input placeHolder="Password" password={true} value = {input['password']} onChange={text=>setInput({...input,password:text})}/>
          <View style={styles.btnContainer}>
            <TouchableOpacity //to be changed for the check later
              style={[
                styles.btnLogin,
                {backgroundColor: true ? Colors.headerColor : 'grey', width:windowWidth*0.5}
              ]} //to be changed to dispatching auth action and navigation
              onPress = {()=>console.log(input)}>
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
    //flex:1,
    alignItems: 'center',
    width: '100%',
    //height: '40%',
    justifyContent: 'center',
   // backgroundColor:'black'
  },
  image: {
    //width: '70%',
   // backgroundColor:'white'
  },
  form: {
    flex: 2,
    width: '100%',
    //alignItems:'center'
  },
  btnContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //height: '10%',
    //width:'50%',
    //backgroundColor:'black',
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: Colors.headerColor,
    justifyContent: 'center',
    padding: 10,
    //width: 200,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 14,
    color: 'white',
  },
});
export default SignIn;
