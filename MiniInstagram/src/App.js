import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './store/store';
import AppNavigator from './navigation/AppNavigator';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;
