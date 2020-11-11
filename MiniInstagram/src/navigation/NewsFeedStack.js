/**Stack navigator to navigate between newsfeed and adding a post screens */

import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsFeed from '../screens/NewsFeed';
import AddPost from '../screens/AddPost';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const NewsFeedStack = ({navigation, route}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.headerColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}}>
      <Stack.Screen name="NewsFeed" component={NewsFeed} options={{title:'Newsfeed'}}/>
      <Stack.Screen name="AddPost" component={AddPost} options={{title:'Add Post'}}/>
    </Stack.Navigator>
  );
};

export default NewsFeedStack;
