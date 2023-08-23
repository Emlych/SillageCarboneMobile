import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { COLORS, SIZE } from "../style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginForm from "../components/LoginForm";
import SigninForm from "../components/SigninForm";

const ConnexionScreen = ({ navigation }) => {
	// Toggle signin or signup views
	const [isSignIn, setIsSignIn] = useState(true);
	const toggleView = () => {
		setIsSignIn((prevState) => !prevState);
	};

	return (
		<SafeAreaView style={styles.safearea}>
			{/* Form with login or signin */}
			<View style={styles.formContainer}>
				{/* Header to switch between signup and signin */}
				<View style={styles.toggleContainer}>
					<TouchableOpacity
						style={[styles.toggleButton, isSignIn ? styles.activeButton : {}]}
						onPress={toggleView}
					>
						<Text style={[styles.toggleButtonText, isSignIn ? styles.activeText : {}]}>
							S'inscrire
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.toggleButton, !isSignIn ? styles.activeButton : {}]}
						onPress={toggleView}
					>
						<Text style={[styles.toggleButtonText, !isSignIn ? styles.activeText : {}]}>
							Se connecter
						</Text>
					</TouchableOpacity>
				</View>

				{/* Block with form */}
				<View>{isSignIn ? <SigninForm /> : <LoginForm />}</View>
			</View>

			{/* Button to navigate to home */}
			<TouchableOpacity
				onPress={() => navigation.navigate("Home")}
				accessibilityLabel="Go back to home screen"
				style={styles.roundButton}
			>
				<MaterialCommunityIcons
					name="lighthouse"
					size={SIZE.iconSize}
					color={COLORS.darkBlue}
				/>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safearea: { backgroundColor: COLORS.lightBlue, flex: 1 },

	// Icon to navigate to home
	roundButton: {
		position: "absolute",
		top: 55,
		left: 20,
		width: 50,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: COLORS.whiteBlue,
		borderRadius: 30,
		borderColor: COLORS.darkBlue,
	},

	// Block with toggling
	formContainer: {
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 120,
	},
	toggleContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	toggleButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginRight: 10,
	},
	toggleButtonText: {
		fontSize: 16,
	},
	activeText: {
		color: "white",
	},
	activeButton: {
		backgroundColor: COLORS.darkBlue,
	},
});

export default ConnexionScreen;
