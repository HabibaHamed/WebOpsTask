import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const ListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.wishItem}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        borderBottomColor: Colors.secondaryColor,
        borderBottomWidth:0.5,
        padding:15,
        //alignItems:'center',
        //backgroundColor:'red' 
    },
    wishItem:{
        fontSize: 18,
        color: Colors.headerColor,
        //backgroundColor:'red'
    }
});

export default ListItem;
