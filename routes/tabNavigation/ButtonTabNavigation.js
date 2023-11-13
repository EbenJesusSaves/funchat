import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import react from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Call } from '../../screens/Call';
import { Chat } from '../../screens/Chat';



export default function ButtonTabNavigation() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Call} />
            <Tab.Screen name="Settings" component={Chat} />
        </Tab.Navigator>

    );
}