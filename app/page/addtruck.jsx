import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import Layout from './homescreen';

export default function AddTruck() {
  const [truckName, setTruckName] = useState('');
  const [truckType, setTruckType] = useState('');
  const [truckModel, setTruckModel] = useState('');
  const [truckMake, setTruckMake] = useState('');
  const [truckCapacity, setTruckCapacity] = useState('');
  const [truckImage, setTruckImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setTruckImage(result.assets[0].uri);
    }
  };

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Feather name="truck" size={24} color="#000" />
          <Text style={styles.headerTitle}>Add Truck</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Truck Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Truck Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter truck name"
              placeholderTextColor="#999"
              value={truckName}
              onChangeText={setTruckName}
            />
          </View>

          {/* Truck Type Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Truck Type</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter truck type"
              placeholderTextColor="#999"
              value={truckType}
              onChangeText={setTruckType}
            />
          </View>

          {/* Truck Model Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Truck Model</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter truck model"
              placeholderTextColor="#999"
              value={truckModel}
              onChangeText={setTruckModel}
            />
          </View>

          {/* Truck Make Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Truck Make</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter truck make"
              placeholderTextColor="#999"
              value={truckMake}
              onChangeText={setTruckMake}
            />
          </View>

          {/* Truck Capacity Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Truck Capacity</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter truck capacity"
              placeholderTextColor="#999"
              value={truckCapacity}
              onChangeText={setTruckCapacity}
              keyboardType="numeric"
            />
          </View>

          {/* Truck Image Picker */}
          <View style={styles.imageContainer}>
            <Text style={styles.label}>Truck Picture</Text>
            {truckImage ? (
              <Image source={{ uri: truckImage }} style={styles.truckImage} />
            ) : (
              <Pressable style={styles.imagePicker} onPress={pickImage}>
                <Feather name="camera" size={24} color="#999" />
                <Text style={styles.imagePickerText}>Add Photo</Text>
              </Pressable>
            )}
          </View>

          {/* Add Button */}
          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Truck</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  imageContainer: {
    marginBottom: 24,
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePickerText: {
    marginTop: 8,
    color: '#999',
    fontSize: 16,
  },
  truckImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  addButton: {
    backgroundColor: '#CD8B28',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

