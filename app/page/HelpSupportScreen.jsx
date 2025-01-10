import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router'; // Use useRouter from expo-router
import { Ionicons } from '@expo/vector-icons'; // Use Ionicons for icons

export default function HelpSupportScreen() {
  const router = useRouter(); // Initialize the router
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    { 
      question: "How do I create an account?", 
      answer: "To create an account, tap on the 'Register' button on the login screen and follow the prompts to enter your information."
    },
    { 
      question: "How can I reset my password?", 
      answer: "You can reset your password by tapping on the 'Forgot Password' link on the login screen and following the instructions sent to your email."
    },
    { 
      question: "How do I update my profile information?", 
      answer: "To update your profile, go to the Settings screen and tap on 'Edit Profile'. Make your changes and tap 'Save' to confirm."
    },
    { 
      question: "What should I do if I encounter a problem with the app?", 
      answer: "If you encounter any issues, please try restarting the app. If the problem persists, contact our support team using the options at the bottom of this screen."
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Help & Support</Text>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for help..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          {faqs.map((faq, index) => (
            <View style={styles.accordionItem} key={index}>
              <TouchableOpacity style={styles.accordionTrigger}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
              </TouchableOpacity>
              <View style={styles.accordionContent}>
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <View style={styles.contactOptions}>
            <TouchableOpacity style={styles.contactOption} onPress={() => router.push('/page/contact')}>
              <Ionicons name="mail" color="#C97B1D" size={24} />
              <Text style={styles.contactOptionText}>Email Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactOption} onPress={() => {}}>
              <Ionicons name="call" color="#C97B1D" size={24} />
              <Text style={styles.contactOptionText}>Call Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactOption} onPress={() => router.push('/live-chat')}>
              <Ionicons name="chatbox-ellipses" color="#C97B1D" size={24} />
              <Text style={styles.contactOptionText}>Live Chat</Text>
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
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#C97B1D',
    borderRadius: 8,
  },
  searchButton: {
    backgroundColor: '#C97B1D',
    padding: 10,
    borderRadius: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactOption: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactOptionText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
});
