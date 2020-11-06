import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsFeed from '../screens/NewsFeed';
import Bucketlist from '../screens/Bucketlist';
import Profile from '../screens/Profile';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const getHeaderTitle = (route) => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'NewsFeed';

  switch (routeName) {
    case 'NewsFeed':
      return 'NewsFeed';
    case 'Profile':
      return 'Profile';
    case 'Bucketlist':
      return 'Bucketlist';
  }
};

const ApplicationTab = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="NewsFeed" component={NewsFeed} />
      <Tab.Screen name="Bucketlist" component={Bucketlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default ApplicationTab;
