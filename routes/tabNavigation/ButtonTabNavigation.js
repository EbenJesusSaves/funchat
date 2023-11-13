import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import react from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Call } from '../../screens/Call';
import { Chat } from '../../screens/Chat';
import { Group } from '../../screens/Group';
import { Settings } from '../../screens/Settings';
import { theme } from '../../components/theme';



export default function ButtonTabNavigation() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Chat') {
                        iconName = focused
                            ? 'chatbubble-ellipses-sharp'
                            : 'chatbubble-ellipses-outline';
                    } else if (route.name === 'Call') {
                        iconName = focused ? 'call' : 'call-outline';
                    }
                    else if (route.name === 'Group') {
                        iconName = focused ? 'people' : 'people-outline';
                    }
                    else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primaryBlue,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Chat" component={Call} />
            <Tab.Screen name="Call" component={Chat} />
            <Tab.Screen name="Group" component={Group} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>

    );
}