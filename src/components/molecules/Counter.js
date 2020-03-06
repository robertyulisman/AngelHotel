import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      order: 0,
    };
  }

  handleOnCounterChange = newValue => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleOnCounterChange(this.state.order);
      },
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({order: this.state.order - 1}, () => {
        this.handleOnCounterChange(this.state.order);
      });
    }
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={this.handleMinus}
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'grey',

            justifyContent: 'center',
          }}>
          <Text>-</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            height: 30,
            borderWidth: 1,
            borderColor: 'grey',
            marginHorizontal: 10,
            flex: 1,
          }}>
          <Text>{this.state.order}</Text>
        </View>
        <TouchableOpacity
          onPress={this.handlePlus}
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'grey',

            justifyContent: 'center',
          }}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Counter;
