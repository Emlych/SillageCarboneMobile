// Import components and style
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	Dimensions,
	Image,
} from "react-native";
import { COLORS, SIZE } from "../style";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Button from "../components/Button";

// Window dimensions for styling
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

/* HomeScreen.js : landing screen that will enable user to navigate to scan screen, project info screen and account management screen  */
const HomeScreen = ({ navigation }) => {
	// Function to navigate to the scan screen
	const navigateToScan = () => {
		navigation.navigate("ScanTabScreen");
	};
	return (
		<SafeAreaView style={styles.safearea}>
			{/* Background image */}
			<View style={styles.bgImageWrapper}>
				<Image source={require("../assets/background.png")} style={styles.bgImage} />
			</View>
			<View style={styles.content}>
				{/* Header section with buttons */}
				<View style={styles.header}>
					{/* Button to navigate to project info screen */}
					<TouchableOpacity
						onPress={() => navigation.navigate("Infos")}
						accessibilityLabel="Access to information on app"
						style={styles.roundButton}
					>
						<Ionicons
							name="information-circle"
							size={SIZE.iconSize}
							color={COLORS.darkBlue}
						/>
					</TouchableOpacity>

					{/* Button to navigate to account management screen */}
					<TouchableOpacity
						onPress={() => navigation.navigate("Connexion")}
						accessibilityLabel="Open connexion screen"
						style={styles.roundButton}
					>
						<FontAwesome5
							name="user-cog"
							size={SIZE.smallIconSize}
							color={COLORS.darkBlue}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.title}>
					<Text style={styles.h1}>Sillage Carbone</Text>
				</View>

				{/* Custom button component to navigate to scan screen */}
				<Button text="Scan" callback={navigateToScan} />
			</View>
		</SafeAreaView>
	);
};

// Homescreen styling
const styles = StyleSheet.create({
	safearea: {
		flex: 1,
		backgroundColor: COLORS.lightBlue,
	},
	bgImageWrapper: {
		position: "absolute",
		top: 50,
		bottom: 0,
		left: -155,
		width: windowWidth + 310,
	},
	bgImage: {
		flex: 1,
		resizeMode: "cover",
		height: null,
		width: null,
		paddingHorizontal: -30,
	},
	content: {
		flex: 1,
		justifyContent: "space-between",
		paddingVertical: 30,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 30,
	},
	roundButton: {
		width: 58,
		height: 56,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: COLORS.whiteBlue,
		borderRadius: 30,
		borderColor: COLORS.darkBlue,
	},
	title: {
		alignItems: "center",
		marginTop: (-windowHeight * 2) / 5,
	},
	h1: {
		fontSize: 32,
		fontWeight: "bold",
		color: COLORS.darkBlue,
	},
});

export default HomeScreen;
