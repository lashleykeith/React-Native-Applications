import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RightButton = () => {
  const { addButtonStyle } = styles
  return (
    <TouchableOpacity>
      <Text style={addButtonStyle} onPress={() => Actions.employeeCreate()}>
        Add
      </Text>
    </TouchableOpacity>
  )
}