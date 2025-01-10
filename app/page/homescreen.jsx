import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import BottomNavigation from './BottomNavigation';  

export default function Layout({ children, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.contentWrapper}>
        <ScrollView style={styles.content}>
          {children}
        </ScrollView>
      </View>


      <BottomNavigation navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentWrapper: {
    flex: 1, 
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
