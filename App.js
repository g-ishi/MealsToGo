import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastucture/theme";
import { SafeAreaContainer } from "./src/components/utils/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const MapScreen = () => {
  return (
    <SafeAreaContainer>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Text>MapScreen</Text>
    </SafeAreaContainer>
  );
};

const SettingsScreen = () => {
  return (
    <SafeAreaContainer>
      <Ionicons name="md-checkmark-circle" size={32} color="red" />
      <Text>SettingsScreen</Text>
    </SafeAreaContainer>
  );
};

const Tab = createBottomTabNavigator();

const tabIcons = {
  Map: "md-map",
  Restaurants: "md-restaurant",
  Settings: "md-settings",
};

const screenSettings = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = tabIcons[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenSettings}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>

        {/* <RestaurantsScreen /> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
