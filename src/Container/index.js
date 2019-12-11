import React from 'react';
import SplashScreen from './SplashScreen';
import LoginScreen from './Login';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


const AppNavigator = createStackNavigator({
    Splash: {
      screen: SplashScreen,
    },
    Login: {
      screen: LoginScreen,
    }
  },
  {
    initialRouteName: 'Login',
    swipeEnabled: false,
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);