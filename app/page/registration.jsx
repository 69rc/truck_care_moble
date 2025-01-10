import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import Draw from '../../assets/images/draw2.png';

export default function Registration() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('driver');

  const register = () => {
    // Handle registration logic here
    router.push("/page/DashboardScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Logo and Title */}
          <View style={styles.header}>
            <Text style={styles.title}>TruckCare</Text>
            <Image source={Draw} style={{ width: 200, height: 150 }} />
          </View>

          {/* Role Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'driver' && styles.activeTab]}
              onPress={() => setActiveTab('driver')}
            >
              <Text style={[styles.tabText, activeTab === 'driver' && styles.activeTabText]}>Driver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'owner' && styles.activeTab]}
              onPress={() => setActiveTab('owner')}
            >
              <Text style={[styles.tabText, activeTab === 'owner' && styles.activeTabText]}>Vehicle Owner</Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
            {activeTab === 'driver' && (
              <TextInput
                style={styles.input}
                placeholder="Driver's License Number"
                placeholderTextColor="#999"
              />
            )}
            {activeTab === 'owner' && (
              <TextInput
                style={styles.input}
                placeholder="Company Name (Optional)"
                placeholderTextColor="#999"
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <TouchableOpacity 
              style={styles.registerButton}
              activeOpacity={0.8}
              onPress={register}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>

          {/* Links */}
          <View style={styles.links}>
            <TouchableOpacity onPress={() => router.push("/page/login")}>
              <Text style={styles.link}>Already have an account? Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#F5F5F5',
  },
  activeTab: {
    borderBottomColor: '#C97B1D',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#C97B1D',
    fontWeight: '600',
  },
  form: {
    gap: 16,
  },
  input: {
    height: 48,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  registerButton: {
    height: 48,
    backgroundColor: '#C97B1D',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  links: {
    alignItems: 'center',
    marginTop: 24,
  },
  link: {
    color: '#666',
    fontSize: 14,
  },
});

