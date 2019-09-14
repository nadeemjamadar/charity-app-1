import React from 'React';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, style, textStyle, onPress }) => (
  <TouchableOpacity
   style={style}
   onPress={onPress}
  >
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
)

export default Button;