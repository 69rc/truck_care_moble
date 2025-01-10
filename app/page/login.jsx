  import React from 'react';
  import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    SafeAreaView,
    Platform,
    StatusBar 
  } from 'react-native';
  import { Feather } from '@expo/vector-icons';
  import { useRouter } from 'expo-router';
  import Draw from '../../assets/images/draw.png';
  import { Image } from 'react-native';

  export default function login() {  
    const router = useRouter();

    const login =()=>{
      router.push("/page/DashboardScreen");
    }
 
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* Logo and Title */}
          <View style={styles.header}>
          <Text style={styles.title}>TruckCare</Text>

            < Image source={Draw} style={{ width: 200, height: 200 }}  />
          </View>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <TouchableOpacity 
              style={styles.loginButton}
              activeOpacity={0.8}
              onPress={login}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>

          {/* Links */}
          <View style={styles.links}>
            <TouchableOpacity onPress={() => router.push('/page/forgot-password')}>
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/page/registration')}>
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 24,
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
      // flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 48,
    },
    title: {
      fontSize: 20,
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
    loginButton: {
      height: 48,
      backgroundColor: '#C97B1D',
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    links: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
      paddingHorizontal: 8,
    },
    link: {
      color: '#666',
      fontSize: 14,
    },
  });