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
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import Draw from '../../assets/images/draw3.png';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
    // Here you would typically call an API to initiate the password reset process
    Alert.alert('Password Reset', 'If an account exists for this email, you will receive password reset instructions.');
    // After successful API call, you might want to navigate back to login
    // router.push("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo and Title */}
        <View style={styles.header}>
          <Text style={styles.title}>TruckCare</Text>
          <Image source={Draw} style={{ width: 200, height: 150 }} />
        </View>

        <Text style={styles.subtitle}>Forgot Password</Text>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.instruction}>
            Enter your email address and we'll send you instructions to reset your password.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity 
            style={styles.resetButton}
            activeOpacity={0.8}
            onPress={handleResetPassword}
          >
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>

        {/* Links */}
        <View style={styles.links}>
          <TouchableOpacity onPress={() => router.push("/page/login")}>
            <Text style={styles.link}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  form: {
    gap: 16,
  },
  instruction: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  resetButton: {
    height: 48,
    backgroundColor: '#C97B1D',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
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

