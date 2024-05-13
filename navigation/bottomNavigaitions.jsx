import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from '../components/screens/profile/userProfile';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="profile" component={UserProfile} />
      <Tab.Screen name="profile2" component={UserProfile} />
      <Tab.Screen name="profile3" component={UserProfile} />
      <Tab.Screen name="profile4" component={UserProfile} />
      <Tab.Screen name="profile5" component={UserProfile} />
    </Tab.Navigator>
  );
}