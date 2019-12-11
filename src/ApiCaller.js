// @flow
import fetch from 'cross-fetch';
import { checkStatus, parseJSON } from './responseHandler';

const queryString = require('query-string');

const HeaderWithNOToken = {
    'content-type': 'application/x-www-form-urlencoded',
};
const API_URL = 'https://reqres.in/';

const BodyConversion = (body: Object, header: Object) => {
    if (header['content-type'] === 'application/x-www-form-urlencoded') {
        return queryString.stringify(body);
    } if (header['content-type'] === 'application/json') {
        return JSON.stringify(body);
    }
    return body;
};

export default (
    endpoint: string,
    method: string,
    body: Object,
    header?: Object = HeaderWithNOToken,
    hostName?: string = API_URL
) => fetch(`${hostName}${endpoint}`, {
    headers: header,
    method,
    body: BodyConversion(body, header)
})
    .then(checkStatus).then(parseJSON)
    .catch((err) => {
        console.log('api error', err);
        return ({
            status: false,
            message: 'Ooops network error! Check your net connection'
        });
    });
