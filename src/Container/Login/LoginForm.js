import React, { Component} from 'react'  
import {View, TextInput,StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginForm extends Component {
 
 
    render(){
      const { handleChange, handleSubmit } = this.props
        // const {username, password }= this.state
        return (
          <View style={styles.container}>
            <TextInput
              name="username"
              style={styles.input}
              value={this.props.username}
              placeholder="Username"
              onChangeText={e => handleChange(e, 'username')}
            />
            <TextInput
              name="password"
              style={styles.input}
              placeholder="password"
              value={this.props.password}
              onChangeText={e => handleChange(e, 'password')}
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText} onPress={handleSubmit}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    backgroundColor: '#b9b1b7',
    height: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#e5e4e1',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});