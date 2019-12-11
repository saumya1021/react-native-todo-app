
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './Container';
import store from './Store'
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
         <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
