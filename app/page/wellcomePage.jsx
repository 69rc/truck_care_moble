import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  GestureHandlerRootView,
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import Draw from '../../assets/images/draw.png';
import { Image } from "react-native";
const ONBOARDING_DATA = [
  {
    title: "TruckCare",
    subtitle: "Track and schedule maintenance tasks easily",
  },
  {
    title: "Stay Organized",
    subtitle: "Keep all your truck maintenance records in one place",
  },
  {
    title: "Save Time",
    subtitle: "Streamline your maintenance process and reduce downtime",
  },
];

export default function OnboardingScreen() {
  const isDarkMode = useColorScheme() === "dark";
  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    if (currentPage < ONBOARDING_DATA.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlingGestureHandler
        direction={Directions.LEFT}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.END) {
            goToNextPage();
          }
        }}
      >
        <FlingGestureHandler
          direction={Directions.RIGHT}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.END) {
              goToPreviousPage();
            }
          }}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor: isDarkMode ? "#FFFFFF" : "#FFFFFF",
              },
            ]}
          >
            <View style={styles.content}>
            <Image source={Draw} style={{ width: "100%", height: "30%", resizeMode: "contain" }} />
              <Text
                style={[
                  styles.title,
                  { color: isDarkMode ? "#000000" : "#000000" },
                ]}
                
              >
                {ONBOARDING_DATA[currentPage].title}
              </Text>
              <Text
                style={[
                  styles.subtitle,
                  { color: isDarkMode ? "#666666" : "#666666" },
                ]}
              >
                {ONBOARDING_DATA[currentPage].subtitle}
              </Text>

              <View style={styles.pagination}>
                {ONBOARDING_DATA.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      currentPage === index && styles.dotActive,
                      { backgroundColor: isDarkMode ? "#C97B1D" : "#000000" },
                    ]}
                  />
                ))}
              </View>
              <TouchableOpacity
                style={[
                  styles.nextButton,
                  { backgroundColor: isDarkMode ? "#C97B1D" : "#C97B1D" },
                ]}
                onPress={() => {
                  if (currentPage === ONBOARDING_DATA.length - 1) {
                    
                    router.push("/page/login"); 
                  } else {
                    goToNextPage();
                  }
                }}
              >
                <Text
                  style={[
                    styles.nextButtonText,
                    { color: isDarkMode ? "#FFFFFF" : "#FFFFFF" },
                  ]}
                >
                  {currentPage === ONBOARDING_DATA.length - 1
                    ? "Get Started"
                    : "Next"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 24,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  illustrationContainer: {
    position: "relative",
    marginBottom: 40,
    width: 10,
    height: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 100,
  },
  badge: {
    position: "absolute",
    bottom: -10,
    right: -10,
    backgroundColor: "#000000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  pagination: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#CCCCCC",
  },
  dotActive: {
    width: 24,
  },
  nextButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
