import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function AuthenticatedTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0B0B0F",
          borderTopColor: "#1B1F25",
          height: 64,
          paddingTop: 8,
          paddingBottom: 12,
        },
        tabBarActiveTintColor: "#7C9CFF",
        tabBarInactiveTintColor: "#8A93A6",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={String(color ?? "#7C9CFF")} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={String(color ?? "#7C9CFF")} />
          ),
        }}
      />
    </Tabs>
  );
}
