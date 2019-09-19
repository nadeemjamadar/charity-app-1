import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CheckBox = ({ selected, onPress, style, textStyle, size, color, text = '', ...props }) => {
  return (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
      <Ionicons
        size={size}
        color={color}
        name={selected ? 'md-checkmark-circle' : 'ios-checkmark-circle-outline'}
      />
      {text && <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

CheckBox.propTypes = {
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
};

CheckBox.defaultProps = {
  style: {},
  textStyle: {},
  size: 30,
  color: '#211f30',
  text: null,
};

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBox;
