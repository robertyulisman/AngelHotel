import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Counter from './Counter';

const Product = ({
  onPress,
  teksPreview,
  roomName,
  roomPrice,
  onCounterChange,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 20,
      }}>
      <View
        style={{
          height: 200,
          width: 200,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: '#d1d1d1',
          marginBottom: 20,
        }}>
        <Text>{teksPreview}</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text>{roomName}</Text>
        <Text>{roomPrice}</Text>
      </View>
      <Counter onCounterChange={value => onCounterChange(value)} />
    </TouchableOpacity>
  );
};

export default Product;
