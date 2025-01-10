import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BottomNavigation({ activeTab }) {
  const router = useRouter();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push('/page/DashboardScreen')}
      >
        <Feather name="home" size={24} color={activeTab === 'dashboard' ? '#C97B1D' : '#666'} />
        <Text style={[styles.navText, activeTab === 'dashboard' && styles.navActive]}>
          Dashboard
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push('/page/addtruck')}
      >
        <Feather name="plus" size={24} color={activeTab === 'search' ? '#C97B1D' : '#666'} />
        <Text style={[styles.navText, activeTab === 'search' && styles.navActive]}>
          Add Truck
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push('/page/social')}
      >
        <Feather name="list" size={24} color={activeTab === 'shopping' ? '#C97B1D' : '#666'} />
        <Text style={[styles.navText, activeTab === 'shopping' && styles.navActive]}>
          Shopping List
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push('/page/users')}
      >
        <Feather name="user" size={24} color={activeTab === 'user' ? '#C97B1D' : '#666'} />
        <Text style={[styles.navText, activeTab === 'user' && styles.navActive]}>
          User
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  navItem: {
    alignItems: 'center',
    display: 'flex',
    gap: 4,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  navActive: {
    color: '#C97B1D',
  },
});
