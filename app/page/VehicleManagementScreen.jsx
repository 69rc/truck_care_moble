import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Layout from './homescreen';

// Mock data for the vehicle list
const mockVehicles = [
  { id: '1', name: 'Truck 1', type: 'Semi', status: 'Active' },
  { id: '2', name: 'Truck 2', type: 'Box Truck', status: 'Maintenance' },
  { id: '3', name: 'Truck 3', type: 'Flatbed', status: 'Inactive' },
];

export default function VehicleManagementScreen() {
  const [vehicles, setVehicles] = useState(mockVehicles);

  const renderVehicleItem = ({ item }) => (
    <TouchableOpacity style={styles.vehicleItem}>
      <Image
        source={{ uri: 'https://via.placeholder.com/60' }}
        style={styles.vehicleImage}
      />
      <View style={styles.vehicleInfo}>
        <Text style={styles.vehicleName}>{item.name}</Text>
        <Text style={styles.vehicleType}>{item.type}</Text>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
      <Feather name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return '#4CAF50';
      case 'Maintenance':
        return '#FFC107';
      case 'Inactive':
        return '#F44336';
      default:
        return '#999';
    }
  };

  return (
    <Layout>
      <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.title}>Vehicle Management</Text>
          <Link href="/page/addtruck" asChild>
            <TouchableOpacity style={styles.addButton}>
              <Feather name="plus" size={24} color="#fff" />
            </TouchableOpacity>
          </Link>
        </View>

        <FlatList
          data={vehicles}
          renderItem={renderVehicleItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />

        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>{vehicles.length}</Text>
            <Text style={styles.summaryLabel}>Total Vehicles</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>
              {vehicles.filter(v => v.status === 'Active').length}
            </Text>
            <Text style={styles.summaryLabel}>Active</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>
              {vehicles.filter(v => v.status === 'Maintenance').length}
            </Text>
            <Text style={styles.summaryLabel}>In Maintenance</Text>
          </View>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#CD8B28',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  vehicleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  vehicleImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  vehicleInfo: {
    flex: 1,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  vehicleType: {
    fontSize: 14,
    color: '#666',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#CD8B28',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

