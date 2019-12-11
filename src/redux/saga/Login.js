import { put, takeLatest, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import ApiCaller from '../../ApiCaller';

const callAPI = payload =>
  ApiCaller('api/login', 'post', payload.body).then(response => response);

export default function* watchLogin(): Saga {
    yield takeLatest('DO_LOGIN', function* performAction(action) {
        yield put({ type: 'DO_LOGIN_INITIATED' });
        try {
            const data = yield call(callAPI.bind(this, action.payload));
            yield put({ type: 'DO_LOGIN_SUCCESS', payload: data });
        } catch (error) {
            yield put({ type: 'DO_LOGIN_FAILED', payload: error });
        }
    });
}
