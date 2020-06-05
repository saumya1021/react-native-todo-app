
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './Container';
const App: () => React$Node = () => {
  return (
    <>
         <AppNavigator />
    </>
  );
};

export default App;
