import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import PaymentFormView from './stripe/PaymentFormView';

export default class PaymentPage extends Component {
  render() {
    return (
      <View>
        {/* header */}
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: 'grey',
            justifyContent: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}> Payment Page </Text>
        </View>
        {/* line down header */}
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontSize: 20,
            marginBottom: 20,
          }}>
          Enter Your Creadit Card Information
        </Text>
        <PaymentFormView />
      </View>
    );
  }
}
