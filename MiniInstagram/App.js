import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationTab from './src/navigation/ApplicationTab';
import AuthenticationStack from './src/navigation/AuthenticationStack';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './src/constants/Colors';

const Stack = createStackNavigator();
let isSignedIn = false;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="ApplicationTab"
            component={ApplicationTab}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: Colors.headerColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        ) : (
          <Stack.Screen
            name="AuthenticationStack"
            component={AuthenticationStack}
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
