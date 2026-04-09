import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = () => {
  const { signOut } = useAuth();

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER BLUE */}
      <View style={styles.headerBackground}>
        <View style={styles.avatarWrapper}>
          <Image 
            source={require('../assets/img/avta.jpg')}  
            style={styles.avatar}
          />
        </View>
      </View>

      {/* INFO */}
      <View style={styles.content}>
        <Text style={styles.name}>Duan Hoang</Text>
        <Text style={styles.role}>Mobile developer</Text>

        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development, now i am learning React Native
        </Text>

        <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  headerBackground: {
    height: 170,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },

  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: -55, // đẩy avatar đè xuống phần dưới
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 55,
  },

  content: {
    marginTop: 70,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },

  role: {
    fontSize: 15,
    color: '#00AEEF',
    marginTop: 4,
  },

  bio: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 18,
    lineHeight: 22,
    color: '#444',
  },

  signOutButton: {
    marginTop: 25,
    backgroundColor: '#FFA000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
  },

  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;