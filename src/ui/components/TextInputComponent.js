import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  labelContainer: {
    marginBottom: 5,
  },
  textInputContainer: {
    height: 36,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 15,
  },
  textInput: {
    height: 36,
  }
})

class TextInputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  componentWillMount() {
    this.state.value = this.props.value
  }

  onTextInputChange(event) {
    this.props.setComponentValue(this.props.name, event.nativeEvent.text)
  }

  render() {
    const locals = this.props
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text>{locals.label ? locals.label : ''}</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            onChange={this.onTextInputChange.bind(this)}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode={'while-editing'}
            value={locals.value}
            style={styles.textInput}
            {...locals}
          />
        </View>
      </View>
    )
  }
}

TextInputComponent.defaultProps = {
  label: 'Label'
}

TextInputComponent.propTypes = {
  ...TextInput.propTypes,
  label: React.PropTypes.string
}

export default TextInputComponent
