/**Responsible for initializing the store with rootReducer and running saga middleware*/
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
//import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers/rootReducers';
import rootSaga from './middleware/sagas';

let initialState = {};
const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

//const { run: runSaga } = sagaMiddleware;

// sagaMiddleware: Makes redux-sagas work
const middlewares = [sagaMiddleware];
//   const enhancers = [
//     createInjectorsEnhancer({
//       createReducer,
//       runSaga,
//     }),
//   ];

const store = configureStore({
  reducer: rootReducers,
  middleware: [
    ...getDefaultMiddleware({ImmutableStateInvariantMiddleware: false}),
    ...middlewares,
  ],
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',
  //enhancers,
});
sagaMiddleware.run(rootSaga);
// Make reducers hot reloadable, see http://mxs.is/googmo
/* istanbul ignore next */
//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       forceReducerReload(store);
//     });
//   }

export default store;
