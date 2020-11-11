/*Navigator between authentication screen and application*/

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationTab from './ApplicationTab';
import AuthenticationStack from './AuthenticationStack';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector } from 'react-redux';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

const App = () => {

  const{isSignedIn} = useSelector((state)=>state.user);

  return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="ApplicationTab"
              component={ApplicationTab}
              options={{
                headerShown:false
              }}
            />
          ) : (
            <Stack.Screen
              name="AuthenticationStack"
              component={AuthenticationStack} //can be replaced with SignIn directly??
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
