import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Privacy Policy</Text>
          
          <Text style={styles.sectionTitle}>1. Information We Collect</Text>
          <Text style={styles.paragraph}>
            We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.
          </Text>

          <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use the information we collect about you to provide, maintain, and improve our services, develop new features, and protect TruckCare and our users.
          </Text>

          <Text style={styles.sectionTitle}>3. Sharing of Information</Text>
          <Text style={styles.paragraph}>
            We may share the information we collect about you as described in this policy or as disclosed at the time of collection or sharing, including with our third-party service providers.
          </Text>

          <Text style={styles.sectionTitle}>4. Data Retention and Deletion</Text>
          <Text style={styles.paragraph}>
            We retain your information for as long as necessary to provide our services and for other essential purposes such as complying with legal obligations, resolving disputes, and enforcing our agreements.
          </Text>

          <Text style={styles.sectionTitle}>5. Changes to this Policy</Text>
          <Text style={styles.paragraph}>
            We may change this privacy policy from time to time. If we make significant changes, we will notify you through the app or by other means.
          </Text>

          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Back to Settings</Text>
          </TouchableOpacity>
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
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 16,
  },
  backButton: {
    marginTop: 24,
    backgroundColor: '#C97B1D',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
