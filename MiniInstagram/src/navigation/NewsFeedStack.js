import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsFeed from '../screens/NewsFeed';
import AddPost from '../screens/AddPost';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();
const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'NewsFeed';
  switch (routeName) {
    case 'NewsFeed':
      return 'NewsFeed';
    case 'AddPost':
      return 'Add Post';
  }
};
const NewsFeedStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsFeed" component={NewsFeed} />
      <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'Add Post' }}/>
    </Stack.Navigator>
  );
};

export default NewsFeedStack;
