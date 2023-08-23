{
	/* App.js : Configure stack navigation between screens */
}
//Screens
import ScanTabScreen from "./screens/ScanTabScreen";
//Ecrans
import HomeScreen from "./screens/HomeScreen";
import InfoScreen from "./screens/InfoScreen";
import ProductScreen from "./screens/ProductScreen";
import UserScreen from "./screens/UserScreen";
import ErrorScreen from "./screens/ErrorScreen";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConnexionScreen from "./screens/ConnexionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// -- Encapsulate all screens inside Navigation Container
		<NavigationContainer>
			{/* Linear stack of screens - option: don't display navigation header */}
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="ScanTabScreen" component={ScanTabScreen} />
				<Stack.Screen name="Infos" component={InfoScreen} />
				<Stack.Screen name="Connexion" component={ConnexionScreen} />
				<Stack.Screen name="User" component={UserScreen} />
				<Stack.Screen name="Product" component={ProductScreen} />
				<Stack.Screen name="Error" component={ErrorScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
