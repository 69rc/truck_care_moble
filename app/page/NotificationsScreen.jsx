import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Layout from './homescreen';

export default function NotificationsScreen({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Notifications</Text>
        {/* Add notifications content here */}
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
});

