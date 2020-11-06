import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../constants/Colors';

const Input = ({placeHolder}) => {
    return(
    <View style={styles.container}>
        <TextInput placeholder= {placeHolder} placeholderTextColor={"#AEB6BF"} style={styles.input}/>
    </View>

)};
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginVertical:10,
    },
    input:{
        padding:8,
        height:50,
        borderRadius:10,
        width:'80%',
        borderColor:'#CD5C5C',
        borderWidth:2,
        color:'#CD5C5C',
    },
})
export default Input;