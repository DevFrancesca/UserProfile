import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from "./navigation/rootNavigation";


export default function App() {

	return (
		<NavigationContainer>
			<RootNavigation />
		</NavigationContainer>
	);
}
