import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Call } from "../../screens/Call";
import { Chat } from "../../screens/Chat";
import { Group } from "../../screens/Group";
import { Settings } from "../../screens/Settings";
import { theme } from "../../components/theme";
import { View } from "react-native";
import { Create } from "../../screens/Create";

export default function ButtonTabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          right: 10,
          left: 10,
          borderRadius: 15,
          padding: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Chat") {
            iconName = focused
              ? "chatbubble-ellipses-sharp"
              : "chatbubble-ellipses-outline";
          } else if (route.name === "Call") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Group") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primaryBlue,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Chat" component={Call} />
      <Tab.Screen name="Call" component={Chat} />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: theme.colors.primaryBlue,
                top: -20,
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <AntDesign name="plus" size={20} color="#ffff" />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
