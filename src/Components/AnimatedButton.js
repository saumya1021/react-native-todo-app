import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';

export default class AnimatedButton extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(1);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }
  
  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: .6,
      useNativeDriver: true
    }).start()
  }
  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true
    }).start()
  }
  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue}]
    }
    return (
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          onPress={() => setTimeout(this.props.onPress, 500)}
        >
          <Animated.View style={[animatedStyle, this.props.style]}>
            {this.props.children}
          </Animated.View>
        </TouchableWithoutFeedback>
    );
  }
}

