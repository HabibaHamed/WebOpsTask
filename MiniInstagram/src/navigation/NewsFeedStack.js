import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsFeed from '../screens/NewsFeed';
import AddPost from '../screens/AddPost';

const Stack = createStackNavigator();

const NewsFeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsFeed" component={NewsFeed} />
      <Stack.Screen name="AddPost" component={AddPost} />
    </Stack.Navigator>
  );
};

export default NewsFeedStack;
