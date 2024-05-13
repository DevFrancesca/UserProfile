import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./authNavigation.jsx";
import BottomTabNavigator from "./bottomNavigation.jsx";

const Root = createStackNavigator();

const RootNavigation = () => {

  return (
    <Root.Navigator
      initialRouteName=""
      screenOptions={{ headerShown: false }}
    >
      <Root.Screen name="auth" component={AuthNavigation} />
      <Root.Screen name="bottomNavigation" component={BottomTabNavigator} />
    </Root.Navigator>
  );
};

export default RootNavigation;