import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import Layout from './homescreen';

const { width } = Dimensions.get('window');

// Mock data for the truck list
const mockTrucks = [
  { id: '1', name: 'Big Rig 2000', size: 'Large', tons: 20, image: 'https://via.placeholder.com/300' },
  { id: '2', name: 'City Hauler', size: 'Medium', tons: 10, image: 'https://via.placeholder.com/300' },
  { id: '3', name: 'Compact Mover', size: 'Small', tons: 5, image: 'https://via.placeholder.com/300' },
  { id: '4', name: 'Mega Transporter', size: 'Extra Large', tons: 30, image: 'https://via.placeholder.com/300' },
  { id: '5', name: 'Urban Delivery', size: 'Small', tons: 3, image: 'https://via.placeholder.com/300' },
];

export default function SocialScreen() {
  const [trucks, setTrucks] = useState(mockTrucks);
  const [sortBy, setSortBy] = useState('size');
  const router = useRouter();

  const sortTrucks = useCallback((option) => {
    const sortedTrucks = [...trucks].sort((a, b) => {
      if (option === 'size') {
        const sizeOrder = { Small: 1, Medium: 2, Large: 3, 'Extra Large': 4 };
        return sizeOrder[a.size] - sizeOrder[b.size];
      } else {
        return a.tons - b.tons;
      }
    });
    setTrucks(sortedTrucks);
    setSortBy(option);
  }, [trucks]);

  const renderTruckItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.truckItem}
      onPress={() => router.push(`/page/booking/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.truckImage} />
      <View style={styles.truckInfo}>
        <Text style={styles.truckName}>{item.name}</Text>
        <Text style={styles.truckDetails}>Size: {item.size}</Text>
        <Text style={styles.truckDetails}>Capacity: {item.tons} tons</Text>
      </View>
      <Feather name="chevron-right" size={24} color="#CD8B28" style={styles.chevron} />
    </TouchableOpacity>
  );

  return (
    <Layout>
      <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.title}>Truck Social</Text>
          <View style={styles.sortContainer}>
            <Text style={styles.sortLabel}>Sort by:</Text>
            <TouchableOpacity
              style={[styles.sortButton, sortBy === 'size' && styles.sortButtonActive]}
              onPress={() => sortTrucks('size')}
            >
              <Text style={[styles.sortButtonText, sortBy === 'size' && styles.sortButtonTextActive]}>Size</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sortButton, sortBy === 'tons' && styles.sortButtonActive]}
              onPress={() => sortTrucks('tons')}
            >
              <Text style={[styles.sortButtonText, sortBy === 'tons' && styles.sortButtonTextActive]}>Tons</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={trucks}
          renderItem={renderTruckItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          
        />
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    fontSize: 16,
    marginRight: 8,
    color: '#666',
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    marginRight: 8,
  },
  sortButtonActive: {
    backgroundColor: '#CD8B28',
  },
  sortButtonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  sortButtonTextActive: {
    color: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  truckItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  truckImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 8,
    marginRight: 16,
  },
  truckInfo: {
    flex: 1,
  },
  truckName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    color: '#333',
  },
  truckDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  chevron: {
    marginLeft: 8,
  },
});
