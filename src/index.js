import React, { Component } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'
import tcomb from 'tcomb-form-native'
import * as UIComponents from './ui/components'

const TextInputComponent = UIComponents.TextInputComponent
const FormComponent = UIComponents.FormComponent
const ButtonComponent = UIComponents.ButtonComponent

class App extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    const values = this.form.getValue()
    if (values === null) {
      Alert.alert('Message', 'Please give full information in the form')
    } else {
      const { username, password } = values
      Alert.alert('Your Information', `Username: ${username} \n Password: ${password}`)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FormComponent ref={(comp) => {
          this.form = comp
        }}>
          <TextInputComponent name={'username'} label={'Username'} placeholder={'Please enter you username'}/>
          <TextInputComponent name={'password'} label={'Password'} secureTextEntry={true} placeholder={'******'}/>
          <ButtonComponent onPress={this.onSubmit.bind(this)}>Submit</ButtonComponent>
        </FormComponent>
        <View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 10,
    backgroundColor: '#F5FCFF'
  }
});

export default App
