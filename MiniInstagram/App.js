import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationTab from './src/navigation/ApplicationTab';
import AuthenticationStack from './src/navigation/AuthenticationStack';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './src/constants/Colors';
//import {Provider} from 'react-redux';
// import {configureStore} from '@reduxjs/toolkit';
// import {applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './src/store/reducers/rootReducers';
// import mySaga from './src/store/sagas';

//store and middleware initialization
// const sagaMiddleware = createSagaMiddleware()
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: applyMiddleware(sagaMiddleware)
// });
// sagaMiddleware.run(mySaga);

const Stack = createStackNavigator();

//to be changed to state
let isSignedIn = true;

const App = () => {
  return (
 //   <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="ApplicationTab"
              component={ApplicationTab}
              options={{
                // headerTitleAlign: 'center',
                // headerStyle: {
                //   backgroundColor: Colors.headerColor,
                // },
                // headerTintColor: '#fff',
                // headerTitleStyle: {
                //   fontWeight: 'bold',
                // },
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
 //   </Provider>
  );
};

export default App;
