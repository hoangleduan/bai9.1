import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FoodItem = ({ name, origin, price, discount, isSaleOff, imageUrl }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image}
        defaultSource={require('../../assets/icon.png')} // fallback nếu lỗi, có thể bỏ
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.origin}>By {origin}</Text>
      {isSaleOff ? (
        <View style={styles.priceRow}>
          <Text style={styles.discountPrice}>{price}</Text>
          <Text style={styles.discountBadge}>{discount} OFF</Text>
        </View>
      ) : (
        <Text style={styles.price}>{price}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  origin: {
    color: '#666',
    fontSize: 12,
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff6b6b',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff6b6b',
  },
  discountBadge: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default FoodItem;