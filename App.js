import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./components/Auth/login";
import SignUp from "./components/Auth/signUp";
import UserProfile from "./components/Auth/userProfile";
// import MainContainer, {MainWrapper} from "./components/mainContainer";
// import Typography from "./components/typography";

const Stack = createStackNavigator()
export default function App() {

	return (
   <NavigationContainer>
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="login" component={Login}/>
			<Stack.Screen name="signup" component={SignUp}/>
		</Stack.Navigator>
   </NavigationContainer>
	);
}

{/* <View style={styles.container}>
	<Image
		source={require('./assets/finsWorth.jpg')}
		style={{width: 100, height: 100}}
	/>
	<Typography type="text1">Login</Typography>
	<TextInput
	 style={styles.input}
	 placeholder="Username"
	 />
</View> */}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		// margin: "100"
	},
});
