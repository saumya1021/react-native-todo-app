// @flow
export default function reducer(
    state: Object = {
        loginStatus: 'uninitiated',
        result: {},
    },
    action: Object,
) {
    switch (action.type) {
        case 'DO_LOGIN_INITIATED': {
            return { ...state, loginStatus: 'initiated' };
        }
        case 'DO_LOGIN_SUCCESS': {
            return { ...state, loginStatus: 'success', result: action.payload };
        }
        case 'DO_LOGIN_FAILED': {
            return { ...state, loginStatus: 'failed', result: action.payload };
        }
        default: {
            return state;
        }
    }
}
