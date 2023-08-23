//Custom nutton
// Import components and style
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../style";

const Button = ({ text, callback }) => {
	return (
		<View style={styles.content}>
			<TouchableOpacity style={styles.primaryButton} onPress={callback}>
				<Text style={styles.buttonText}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};

// Button styling
const styles = StyleSheet.create({
	content: {
		justifyContent: "space-between",
	},
	primaryButton: {
		height: 60,
		backgroundColor: COLORS.whiteBlue,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		marginHorizontal: 60,
		marginBottom: 40,
		borderRadius: 10,
	},
	buttonText: {
		color: COLORS.darkBlue,
		fontWeight: "bold",
		fontSize: 25,
	},
});

export default Button;
