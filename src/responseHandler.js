// @flow

export const checkStatus = (response: Object) => {
  console.log("=== api response handler ==== ", response)
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 500) {
    return response.json().then((errorData) => {
      const message = (errorData || {}).error;
      const error = new TypeError(message || 'Server error');
      const ERROR = {
        status: false,
        message: errorData ? errorData.message: 'Server under maintainence' ,
        code: response.status,
      };
      return ERROR;
    });
  }
  if (response.status === 401) {
    const error = {
      status: response.status,
      message: 'Unathorized'
    };
    return error;
  }
  if (response.status === 403) {
    const error = {
      status: false,
      message: 'You may not have permission to access.',
      code: 403
    };
    return error;
  }
  if (response.status === 400) {
    const error = {
      status: false,
      message: 'There are some missing fields.',
      code: response.status
    };
    return error;
  }
  return response.json().then((errorData) => {
    const error = {
      status: response.status,
      message: errorData
    };
    return error;
  });
};

export const parseJSON = (response: Object) => {
  if (response.status === 204 || response.status === 205) {
    return {};
  }
  if (
    response.status === 401
    || response.code === 500
    || response.code === 403
    || response.code === 400
  ) {
    return response;
  }
  if (response.headers) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json();
    }
  }
  return {};
};
