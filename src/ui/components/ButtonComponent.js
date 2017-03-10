import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: '#1D7874',
    height: 36,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
})

class ButtonComponent extends Component {
  render() {
    const locals = this.props
    return (
      <TouchableOpacity
        style={styles.containerButton}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        {...locals}
      >
        <Text style={styles.text}>{locals.children}</Text>
      </TouchableOpacity>
    )
  }
}

ButtonComponent.propTypes = {
  ...TouchableOpacity.propTypes,
}

export default ButtonComponent

