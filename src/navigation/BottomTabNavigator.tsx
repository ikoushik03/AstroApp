import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import ConsultScreen from "../screens/Consult/ConsultScreen";
import HoroscopeScreen from "../screens/Horoscope/HoroscopeScreen";
import KundaliScreen from "../screens/Kundali/KundaliScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AdditionalServicesScreen from "../screens/AdditionalServices/AdditionalServicesScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#F5C76B",
        tabBarInactiveTintColor: "#A59ABF",

        tabBarStyle: {
          backgroundColor: "#1C1631",
          borderTopColor: "#392B54",
          borderTopWidth: 1,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;

            case "Horoscope":
              iconName = "sunny-outline";
              break;

            case "Kundali":
              iconName = "planet-outline";
              break;

            case "Consult":
              iconName = "chatbubbles-outline";
              break;

            case "Profile":
              iconName = "person-outline";
              break;

            default:
              iconName = "apps-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Horoscope" component={HoroscopeScreen} />
      <Tab.Screen name="Kundali" component={KundaliScreen} />
      <Tab.Screen name="Consult" component={ConsultScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />

      <Stack.Screen
        name="AdditionalServices"
        component={AdditionalServicesScreen}
      />
    </Stack.Navigator>
  );
};

export default BottomTabNavigator;
