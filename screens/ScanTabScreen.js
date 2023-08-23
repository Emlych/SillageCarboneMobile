import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../style";

// Screens
import HomeScreen from "./HomeScreen";
import ScanScreen from "./ScanScreen";
import ProductScreen from "./ProductScreen";
import ErrorScreen from "./ErrorScreen";

// ScanTabScreen component
const ScanTabScreen = () => {
	// Initialize the bottom tab navigator
	const ScanTab = createBottomTabNavigator();

	return (
		<ScanTab.Navigator initialRouteName="Scan" screenOptions={{ screenOptions }}>
			{/* -- Home Page -- */}
			<ScanTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="lighthouse" size={size} color={color} />
					),
					tabBarLabel: "Port base",
					headerShown: false,
				}}
			/>
			{/* -- Scan Page -- */}
			<ScanTab.Screen
				name="Scan"
				component={ScanScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="barcode-scan" size={size} color={color} />
					),
					headerShown: false,
				}}
			/>

			{/* -- Product Page -- */}
			<ScanTab.Screen
				name="Product"
				component={ProductScreen}
				options={{
					tabBarButton: () => null,
					tabBarVisible: false,
					headerShown: false,
				}}
			/>

			{/* -- Error Page -- */}
			<ScanTab.Screen
				name="Error"
				component={ErrorScreen}
				options={{
					tabBarButton: () => null,
					tabBarVisible: false,
					headerShown: false,
				}}
			/>
		</ScanTab.Navigator>
	);
};

const screenOptions = {
	headerShown: false,
	tabBarStyle: {
		backgroundColor: COLORS.darkBlue,
		height: 100,
	},
	tabBarItemStyle: {
		backgroundColor: "#00ff00",
		margin: 5,
		borderRadius: 10,
	},
	tabBarActiveTintColor: COLORS.whiteBlue,
	tabBarInactiveTintColor: COLORS.lightBlue,
};

export default ScanTabScreen;
