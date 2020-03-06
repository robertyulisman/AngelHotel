import React, {Component} from 'react';
import {Text, View, Button, ScrollView, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import Product from '../../components/molecules/Product';
const data = [
  {
    roomName: 'Deluxe Room',
    roomPrice: 88,
  },
  {
    roomName: 'Executive Suite',
    roomPrice: 188,
  },
];
export default class RoomBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      badge: 0,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  handleChange = newValue => {
    this.setState({
      badge: newValue,
    });
  };

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const {selectedStartDate, selectedEndDate, badge} = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2021, 3, 5);
    const startDate = selectedStartDate
      ? Moment(selectedStartDate).format('Do MMM YYYY')
      : 'start date did not selected yet';
    const endDate = selectedEndDate
      ? Moment(selectedEndDate).format('Do MMM YYYY')
      : 'end date did not selected yet';
    return (
      <View style={{flex: 1}}>
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
          <Text style={{color: 'white', fontSize: 20}}> Angel Hotel App </Text>
        </View>
        {/* line down header */}

        <ScrollView>
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20}}>
            Room Booking Page
          </Text>
          <View>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
            />
          </View>
          <Text style={{marginLeft: 20, marginTop: 20, fontSize: 16}}>
            Start Date :
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'grey',
              marginHorizontal: 20,
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: 14, color: 'grey'}}>{startDate}</Text>
          </View>
          <Text style={{marginLeft: 20, marginTop: 20, fontSize: 16}}>
            End Date :
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'grey',
              marginHorizontal: 20,
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: 14, color: 'grey'}}>{endDate}</Text>
          </View>

          {/* display room */}
          <Text style={{marginLeft: 20, marginTop: 20, fontSize: 16}}>
            Select Room :
          </Text>
          <ScrollView horizontal>
            {data.map((item, index) => {
              return (
                <Product
                  onPress={() =>
                    this.props.navigation.navigate('CheckOutPage', {
                      item,
                      selectedStartDate,
                      selectedEndDate,
                      badge,
                    })
                  }
                  teksPreview=" no Image Preview"
                  roomName={item.roomName}
                  roomPrice={`$${item.roomPrice}`}
                  onCounterChange={value => {
                    this.handleChange(value);
                  }}
                />
              );
            })}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
