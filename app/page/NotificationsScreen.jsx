import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Layout from './homescreen';

const mockNotifications = [
  {
    id: '1',
    type: 'maintenance',
    title: 'Maintenance Due',
    message: 'Your truck "Big Rig 2000" is due for maintenance in 3 days.',
    date: '2025-01-07T09:00:00Z',
    read: false,
  },
  {
    id: '2',
    type: 'booking',
    title: 'New Booking',
    message: 'You have a new booking for "City Hauler" on January 15, 2025.',
    date: '2025-01-06T14:30:00Z',
    read: true,
  },
  {
    id: '3',
    type: 'system',
    title: 'System Update',
    message: 'TruckCare app will be undergoing maintenance on January 10, 2025, from 2 AM to 4 AM EST.',
    date: '2025-01-05T11:15:00Z',
    read: false,
  },
  {
    id: '4',
    type: 'maintenance',
    title: 'Maintenance Completed',
    message: 'The scheduled maintenance for "Compact Mover" has been completed.',
    date: '2025-01-04T16:45:00Z',
    read: true,
  },
  {
    id: '5',
    type: 'booking',
    title: 'Booking Reminder',
    message: 'Reminder: You have a booking for "Mega Transporter" tomorrow at 9 AM.',
    date: '2025-01-03T08:00:00Z',
    read: false,
  },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(mockNotifications);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate fetching new notifications
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const renderNotificationIcon = (type) => {
    switch (type) {
      case 'maintenance':
        return <Feather name="tool" size={24} color="#4CAF50" />;
      case 'booking':
        return <Feather name="calendar" size={24} color="#2196F3" />;
      case 'system':
        return <Feather name="info" size={24} color="#FF9800" />;
      default:
        return <Feather name="bell" size={24} color="#757575" />;
    }
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[styles.notificationItem, !item.read && styles.unreadNotification]}
      onPress={() => markAsRead(item.id)}
    >
      <View style={styles.notificationIcon}>{renderNotificationIcon(item.type)}</View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationDate}>
          {new Date(item.date).toLocaleString()}
        </Text>
      </View>
      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Notifications</Text>
          <TouchableOpacity onPress={() => setNotifications([])} style={styles.clearButton}>
            <Feather name="trash-2" size={24} color="#CD8B28" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.notificationList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#CD8B28']} />
          }
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Feather name="bell-off" size={48} color="#999" />
              <Text style={styles.emptyStateText}>No notifications</Text>
            </View>
          }
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  clearButton: {
    padding: 8,
  },
  notificationList: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  unreadNotification: {
    backgroundColor: '#FFF9C4',
  },
  notificationIcon: {
    marginRight: 16,
    justifyContent: 'center',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CD8B28',
    position: 'absolute',
    top: 16,
    right: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyStateText: {
    marginTop: 16,
    fontSize: 16,
    color: '#999',
  },
});
