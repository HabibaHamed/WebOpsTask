import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsFeedStack from '../navigation/NewsFeedStack';
import Bucketlist from '../screens/Bucketlist';
import Profile from '../screens/Profile';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'NewsFeedStack';

  switch (routeName) {
    case 'NewsFeedStack':
      return 'NewsFeed';
    case 'Profile':
      return 'Profile';
    case 'Bucketlist':
      return 'Bucketlist';
  }
};

const ApplicationTab = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const header = getHeaderTitle(route);
    header !== 'NewsFeed'
      ? navigation.setOptions({
          headerShown: true,
          headerTitle: header,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.headerColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })
      : navigation.setOptions({headerShown: false});
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'NewsFeedStack') {
            iconName = 'home';
          } else if (route.name === 'Bucketlist') {
            iconName = 'map-marker';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.secondaryColor,
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="NewsFeedStack" component={NewsFeedStack} />
      <Tab.Screen name="Bucketlist" component={Bucketlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default ApplicationTab;
