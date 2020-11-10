import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationTab from './src/navigation/ApplicationTab';
import AuthenticationStack from './src/navigation/AuthenticationStack';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './src/constants/Colors';
import configureAppStore from './src/store/store';
import {Provider } from 'react-redux';
import store from './src/store/store';
import { navigationRef } from './src/navigation/RootNavigation';

const Stack = createStackNavigator();

//to be changed to state
let isSignedIn = true;

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
