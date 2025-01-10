import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Layout from '../homescreen';

// Mock data for the truck details
const mockTrucks = {
  '1': { id: '1', name: 'Big Rig 2000', size: 'Large', tons: 20, image: 'https://via.placeholder.com/300', hourlyRate: 150 },
  '2': { id: '2', name: 'City Hauler', size: 'Medium', tons: 10, image: 'https://via.placeholder.com/300', hourlyRate: 100 },
  '3': { id: '3', name: 'Compact Mover', size: 'Small', tons: 5, image: 'https://via.placeholder.com/300', hourlyRate: 75 },
  '4': { id: '4', name: 'Mega Transporter', size: 'Extra Large', tons: 30, image: 'https://via.placeholder.com/300', hourlyRate: 200 },
  '5': { id: '5', name: 'Urban Delivery', size: 'Small', tons: 3, image: 'https://via.placeholder.com/300', hourlyRate: 50 },
};

export default function BookingScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const truck = mockTrucks[id];

  if (!truck) {
    return (
      <Layout>
        <SafeAreaView style={styles.container}>
          <Text>Truck not found</Text>
        </SafeAreaView>
      </Layout>
    );
  }

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <ScrollView  scrollEnabled>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Image source={{ uri: truck.image }} style={styles.truckImage} />
          <View style={styles.content}>
            <Text style={styles.truckName}>{truck.name}</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.detailItem}>
                <Feather name="truck" size={20} color="#CD8B28" />
                <Text style={styles.detailText}>Size: {truck.size}</Text>
              </View>
              <View style={styles.detailItem}>
                <Feather name="package" size={20} color="#CD8B28" />
                <Text style={styles.detailText}>Capacity: {truck.tons} tons</Text>
              </View>
              <View style={styles.detailItem}>
                <Feather name="dollar-sign" size={20} color="#CD8B28" />
                <Text style={styles.detailText}>Rate: ${truck.hourlyRate}/hour</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 8,
  },
  truckImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  truckName: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  bookButton: {
    backgroundColor: '#CD8B28',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

