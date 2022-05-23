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
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

const HomeScreen = () => {
  return (
    <SafeAreaContainer>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Text>HomeScreen</Text>
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
  Home: "home",
  Restaurants: "restaurant",
  Settings: "ios-settings-sharp",
};

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                const iconName = tabIcons[route.name];
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>

        {/* <RestaurantsScreen /> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
