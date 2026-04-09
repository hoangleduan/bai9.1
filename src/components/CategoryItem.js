import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const CategoryItem = ({ name, image }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.label}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 70,
    borderRadius: 12,
  },
  label: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default CategoryItem;