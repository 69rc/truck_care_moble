import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Layout from './homescreen';

export default function PersonalInformationScreen() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Truck St, Fleet City, TC 12345',
    driverLicense: 'DL1234567890',
  });

  const handleSave = () => {
    // Handle save action
    setIsEditing(false);
  };

  const renderField = (label, value, key) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => setUserInfo({ ...userInfo, [key]: text })}
        />
      ) : (
        <Text style={styles.fieldValue}>{value}</Text>
      )}
    </View>
  );

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="arrow-left" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.title}>Personal Information</Text>
            <TouchableOpacity onPress={() => (isEditing ? handleSave() : setIsEditing(true))} style={styles.editButton}>
              <Feather name={isEditing ? 'check' : 'edit-2'} size={24} color="#CD8B28" />
            </TouchableOpacity>
          </View>

          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.profileImage}
            />
            {isEditing && (
              <TouchableOpacity style={styles.changePhotoButton}>
                <Feather name="camera" size={20} color="#fff" />
              </TouchableOpacity>
            )}
          </View>

          {renderField('First Name', userInfo.firstName, 'firstName')}
          {renderField('Last Name', userInfo.lastName, 'lastName')}
          {renderField('Email', userInfo.email, 'email')}
          {renderField('Phone', userInfo.phone, 'phone')}
          {renderField('Address', userInfo.address, 'address')}
          {renderField('Driver License', userInfo.driverLicense, 'driverLicense')}

          {isEditing && (
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          )}
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
  scrollContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  editButton: {
    padding: 8,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  changePhotoButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#CD8B28',
    borderRadius: 20,
    padding: 8,
  },
  fieldContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fieldLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#CD8B28',
    paddingVertical: 4,
  },
  saveButton: {
    backgroundColor: '#CD8B28',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
