import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Layout from './homescreen';

export default function DashboardScreen({ navigation }) {
  return (
    <Layout navigation={navigation}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Feather name="user" size={24} color="#666" />
          <Text style={styles.headerTitle}>Maintenance Buddy</Text>
        </View>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <Text style={styles.welcome}>Welcome to TruckCare!</Text>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statsColumn}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Upcoming{'\n'}Maintenance</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Past Maintenance{'\n'}Records</Text>
          </View>
        </View>
        <View style={styles.statsColumn}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>16</Text>
            <Text style={styles.statLabel}>Pending Maintenance{'\n'}Records</Text>
          </View>
          <View style={[styles.statBox, styles.notificationBox]}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>New{'\n'}Notification</Text>
          </View>
        </View>
      </View>

      {/* Today's Tasks */}
      <View style={styles.tasksSection}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>Maintenance</Text>
            <TouchableOpacity>
              <Feather name="settings" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          <Text style={styles.taskTime}>9:00 - 11:00</Text>
          <TouchableOpacity style={styles.addRecord}>
            <Text style={styles.addRecordText}>+ Add Record</Text>
          </TouchableOpacity>
          <View style={styles.taskLocation}>
            <Feather name="map-pin" size={16} color="#666" />
            <Text style={styles.locationText}>Location</Text>
          </View>
        </View>

        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>REMINDERS</Text>
            <TouchableOpacity>
              <Feather name="bell" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          <Text style={styles.taskTime}>12:00 - 15:00</Text>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statsColumn: {
    flex: 1,
    gap: 16,
  },
  statBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  notificationBox: {
    backgroundColor: '#FFF3E0',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  tasksSection: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 20,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  taskTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  addRecord: {
    marginBottom: 12,
  },
  addRecordText: {
    color: '#C97B1D',
    fontSize: 14,
  },
  taskLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: {
    color: '#666',
    fontSize: 14,
  },
});
