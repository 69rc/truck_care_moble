import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link,router } from 'expo-router';
import Layout from './homescreen';

export default function SettingsScreen() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);

  const logout = () => {
    router.push('/page/login');
    alert('Logged out');
  }

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Settings</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Push Notifications</Text>
              <Switch
                value={pushNotifications}
                onValueChange={setPushNotifications}
                trackColor={{ false: "#767577", true: "#C97B1D" }}
                thumbColor={pushNotifications ? "#f4f3f4" : "#f4f3f4"}
              />
            </View>
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Email Notifications</Text>
              <Switch
                value={emailNotifications}
                onValueChange={setEmailNotifications}
                trackColor={{ false: "#767577", true: "#C97B1D" }}
                thumbColor={emailNotifications ? "#f4f3f4" : "#f4f3f4"}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Appearance</Text>
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Dark Mode</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#767577", true: "#C97B1D" }}
                thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Privacy</Text>
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Location Services</Text>
              <Switch
                value={locationServices}
                onValueChange={setLocationServices}
                trackColor={{ false: "#767577", true: "#C97B1D" }}
                thumbColor={locationServices ? "#f4f3f4" : "#f4f3f4"}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <Link href="/user/change-password" asChild>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Change Password</Text>
                <Feather name="chevron-right" size={20} color="#666" />
              </TouchableOpacity>
            </Link>
            <Link href="/user/update-email" asChild>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Update Email</Text>
                <Feather name="chevron-right" size={20} color="#666" />
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support</Text>
            <Link href="/user/faq" asChild>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>FAQ</Text>
                <Feather name="chevron-right" size={20} color="#666" />
              </TouchableOpacity>
            </Link>
            <Link href="/user/contact-support" asChild>
              <TouchableOpacity style={styles.linkItem}>
                <Text style={styles.linkText}>Contact Support</Text>
                <Feather name="chevron-right" size={20} color="#666" />
              </TouchableOpacity>
            </Link>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    padding: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  linkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  linkText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#CD8B28',
    marginHorizontal: 16,
    marginVertical: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

