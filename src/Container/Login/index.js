import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import { LOGO_PNG } from '../../config/images';

class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e,name) => {
    this.setState({
    [name]:e
    })
  }   
  handleSubmit = ()  =>{
    const { username,password } = this.state
    const { dispatch } = this.props
  //  console.log("---username", username,password)
     if (username !== '' && password !==''){
      const body = {
        username,
        password,
      };
      dispatch({type: 'DO_LOGIN', payload: { body }});
    }
    
  }
    render() {
        return (
          <View style={styles.containers}>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={LOGO_PNG} />
            </View>
            <View style={styles.formContainer}>
                <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
      backgroundColor: '#8e8280',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default connect(null)(Login);