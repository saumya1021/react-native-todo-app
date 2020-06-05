import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { SPLASH_LOGO } from '../../config/images';
import styles from './style';

class SplashScreen extends Component {

  componentDidMount() {

    setTimeout(() => {
      this.props.navigation.navigate('Todos');
    }, 2500);
    
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={SPLASH_LOGO}
          style={styles.splashLogo}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

export default SplashScreen;