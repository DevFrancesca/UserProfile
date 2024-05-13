import { StyleSheet} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./components/screens/auth/login";
import SignUp from "./components/screens/auth/signUp";
// import UserProfile from "./components/screens/profile/userProfile";

const Stack = createStackNavigator()

export default function AuthNavigation() {

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="login" component={Login}/>
			<Stack.Screen name="signup" component={SignUp}/>
			{/* <Stack.Screen name="profile" component={UserProfile}/> */}
		</Stack.Navigator>
	);
}
// const styles = StyleSheet.create({
// 	container: {
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });
