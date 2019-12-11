import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import combineReducers from './redux/reducer';
// import fetchTweets from "./sagas/tweets";
import rootSaga from './redux/saga';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers,
  applyMiddleware(...middlewares, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
 const action = type => store.dispatch({ type });

export default store;
