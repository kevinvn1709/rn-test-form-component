import React, { Component } from 'react'
import { View } from 'react-native'

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.setComponentValue = this.setComponentValue.bind(this)
  }

  componentWillMount() {
    for (var key in this.props.children) {
      const propName = this.props.children[key].props.name
      if (propName !== undefined) {
        const initValue = {}
        initValue[propName] = null
        this.setState({
          value: { ...this.state.value, ...initValue }
        })
      }
    }
  }

  getValue() {
    const { value } = this.state
    for (var item in value) {
      if (value[item] === null) {
        return null
      }
    }
    return value
  }

  setComponentValue(field, value) {
    const newValue = {}
    newValue[field] = value
    this.setState({
      value: { ...this.state.value, ...newValue }
    })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        setComponentValue: this.setComponentValue
      })
    );

    return (
      <View style={{ flex: 1 }}>
        {childrenWithProps}
      </View>
    )
  }
}

export default FormComponent