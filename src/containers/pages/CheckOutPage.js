import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Moment from 'moment';

export default class CheckOutPage extends Component {
  state = {
    data: this.props.navigation.state.params.item,
    startDate: this.props.navigation.state.params.selectedStartDate,
    endDate: this.props.navigation.state.params.selectedEndDate,
    badge: this.props.navigation.state.params.badge,
  };

  deleteOrder = () => {
    this.setState({
      data: {},
      startDate: '',
      endDate: '',
    });
    this.props.navigation.navigate('RoomBooking');
  };
  render() {
    const {data, startDate, endDate, badge} = this.state;
    const convertStart = Moment(startDate).format('Do MMM YYYY');
    console.warn('startDate', startDate);
    console.warn('endDate', endDate);
    console.warn('data', data);
    return (
      <View style={{flex: 1}}>
        {/* header */}
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: 'grey',
            paddingHorizontal: 20,
            flexDirection: 'row',

            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              padding: 10,
              backgroundColor: 'red',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Go Back</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 20, marginLeft: 20}}>
            Check Out
          </Text>
        </View>
        {/* line down header */}
        <ScrollView>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20}}>
            Check Out Page
          </Text>

          {/* detail check out  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16}}>Check in :</Text>
            <Text style={{fontSize: 16}}>{convertStart}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16}}>Check Out :</Text>
            <Text style={{fontSize: 16}}>
              {Moment(endDate).format('Do MMM YYYY')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16}}>Room :</Text>
            <Text style={{fontSize: 16}}>
              {data.roomName}(x{badge})
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16}}> Price :</Text>
            <Text style={{fontSize: 16}}>{`$${data.roomPrice}`}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16}}>Total Price :</Text>
            <Text style={{fontSize: 16}}>{`$${data.roomPrice * badge}`}</Text>
          </View>
          {/* end detail check out  */}
        </ScrollView>
        <View style={{marginHorizontal: 20, marginBottom: 10}}>
          <Button title="Delete Order" onPress={this.deleteOrder} />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Button
            title="Continue"
            onPress={() => this.props.navigation.navigate('PaymentPage')}
          />
        </View>
      </View>
    );
  }
}
