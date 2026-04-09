import React from 'react';
import { View, FlatList, StyleSheet, ScrollView, Image, Text, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';

// Ảnh local
const pizzaImg = require('../assets/img/piza.jpg');
const burgerImg = require('../assets/img/download.jpg');
const steakImg = require('../assets/img/download (1).jpg');
const food1Img = require('../assets/img/bread.jpg');
const food2Img = require('../assets/img/pho.jpg');
const food3Img = require('../assets/img/shusi.jpg');

const categoryData = [
  { id: '1', name: 'Pizza', image: pizzaImg },
  { id: '2', name: 'Burgers', image: burgerImg },
  { id: '3', name: 'Steak', image: steakImg },
  { id: '4', name: 'Sushi', image: pizzaImg },
  { id: '5', name: 'Ramen', image: pizzaImg },
];

const popularItems = [
  { id: '1', name: 'Food 1', origin: 'By Viet Nam', price: '$1', image: food1Img },
  { id: '2', name: 'Food 2', origin: 'By Viet Nam', price: '$3', image: food2Img },
  { id: '3', name: 'Food 3', origin: 'By Thai', price: '$2', image: food1Img },
  { id: '4', name: 'Food 4', origin: 'By Japan', price: '$4', image: food2Img },
];

const saleOffItems = [
  { id: '5', name: 'Food 3', origin: 'By Viet Nam', price: '$1', discount: '10%', image: food3Img },
  { id: '6', name: 'Food 1', origin: 'By Viet Nam', price: '$1', discount: '15%', image: food1Img },
  { id: '7', name: 'Food 2', origin: 'By Viet Nam', price: '$3', discount: '20%', image: food2Img },
];

// Sale-off item với ảnh to
const SaleOffRow = ({ item }) => (
  <View style={styles.rowCard}>
    <Image source={item.image} style={styles.rowImageLarge} />
    <View style={styles.rowInfo}>
      <Text style={styles.rowNameLarge}>{item.name}</Text>
      <Text style={styles.rowOriginLarge}>{item.origin}</Text>
      <View style={styles.rowPriceRow}>
        <Text style={styles.rowPriceLarge}>{item.price}</Text>
        <Text style={styles.rowDiscountLarge}>{item.discount} OFF</Text>
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryCard}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.foodCard}>
      <Image source={item.image} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodOrigin}>{item.origin}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Explorer</Text>
        <SearchBar />

        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <FlatList
          horizontal
          data={categoryData}
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          renderItem={renderCategoryItem}
        />

        <SectionHeader title="Popular Items" />
        <FlatList
          horizontal
          data={popularItems}
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          renderItem={renderPopularItem}
        />

        <SectionHeader title="Popular Items" />
        <FlatList
          horizontal
          data={saleOffItems}
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => <SaleOffRow item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  pageTitle: { fontSize: 26, fontWeight: '700', paddingHorizontal: 16, marginBottom: 10, marginTop: 5 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginTop: 10, marginBottom: 10 },
  sectionTitle: { fontSize: 19, fontWeight: '600' },
  filterText: { fontSize: 16, color: '#f7a21a', fontWeight: '600' },
  flatListContent: { paddingHorizontal: 16 },

  categoryCard: { marginRight: 16, alignItems: 'center', width: 90 },
  categoryImage: { width: 90, height: 65, borderRadius: 10 },
  categoryText: { marginTop: 5, fontSize: 14, textAlign: 'center' },

  foodCard: { width: 150, backgroundColor: '#fff', marginRight: 16, padding: 10, borderRadius: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  foodImage: { width: '100%', height: 120, borderRadius: 12 },
  foodName: { marginTop: 8, fontSize: 16, fontWeight: '600' },
  foodOrigin: { color: 'gray', fontSize: 13 },
  price: { marginTop: 5, fontSize: 16, fontWeight: '700', color: '#000' },

  // Style cho row card sale-off với ảnh to
  rowCard: {
    flexDirection: 'row',
    width: 350,
    backgroundColor: '#fff',
    marginRight: 16,
    padding: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  rowImageLarge: {
    width: 180,
    height: 180,
    borderRadius: 16,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
  },
  rowInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  rowNameLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rowOriginLarge: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  rowPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  rowPriceLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6b6b',
  },
  rowDiscountLarge: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;