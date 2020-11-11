/*Tab navigator to navigate between application's main screens*/

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsFeedStack from '../navigation/NewsFeedStack';
import Bucketlist from '../screens/Bucketlist';
import Profile from '../screens/Profile';
import {getFocusedRouteNameFromRoute, useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

//helper function
const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'NewsFeedStack';

  switch (routeName) {
    case 'NewsFeedStack':
      return 'NewsFeedStack';
    case 'Profile':
      return 'Profile';
    case 'Bucketlist':
      return 'Bucketlist';
  }
};

const ApplicationTab = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  React.useLayoutEffect(() => {
    const header = getHeaderTitle(route);
    header !== 'NewsFeedStack'
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
