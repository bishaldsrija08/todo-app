import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle:{
          backgroundColor: "#1e293b",
          borderTopColor: "yello",
          height: 90,
          paddingBottom: 30,
          paddingTop:10
        },
        tabBarLabelStyle:{
          fontSize: 12,
          fontWeight: "600"
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="flash" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
