import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const IconButton = ({ iconName, title, onPress, color, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor || '#4267B2' }]}
      onPress={onPress}
    >
      <FontAwesome name={iconName} size={24} color={color || '#fff'} />
      <Text style={[styles.buttonText, { color: textColor || '#fff' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
});

export default IconButton;