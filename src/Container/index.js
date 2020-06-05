import React from 'react';
import SplashScreen from './SplashScreen';
import Todos from './Todos';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


const AppNavigator = createStackNavigator({
    Splash: {
      screen: SplashScreen,
    },
    Todos: {
      screen: Todos
    }
  },
  {
    initialRouteName: 'Splash',
    swipeEnabled: false,
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);