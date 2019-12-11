import {all} from 'redux-saga/effects';
import Login from './Login';

const rootSaga = function* rootSaga() {
  yield all([
      Login()
  ]);
};

export default rootSaga;
