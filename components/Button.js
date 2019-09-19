import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title = null, style, textStyle, onPress }) => {
  return (
    <>
      {title ? (
        <TouchableOpacity style={style} onPress={onPress}>
          <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={style} onPress={onPress} />
      )}
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  title: null,
  style: {},
  textStyle: {},
};

export default Button;
