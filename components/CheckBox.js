import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CheckBox = ({ 
    selected, onPress, style, textStyle, size = 30, 
    color = '#211f30', text = '', ...props
  }) => {
    return(
      <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
          <Ionicons
              size={size}
              color={color}
              name={ selected 
                ? 'md-checkmark-circle' 
                : 'ios-checkmark-circle-outline'
              }
          />

          <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  checkBox: {
      flexDirection: 'row',
      alignItems: 'center'
  }
})


export default CheckBox