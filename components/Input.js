import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZE } from "../style";

// Custom input with icon and text input
const CustomInput = ({ icon, value, placeholder, callback }) => {
	return (
		<View style={styles.inputWithIcon}>
			<View style={styles.icon}>
				<FontAwesome5 name={icon} size={SIZE.smallIconSize} color={COLORS.darkBlue} />
			</View>

			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder={placeholder}
					value={value}
					onChangeText={callback}
					secureTextEntry
					autoCapitalize="none"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputWithIcon: {
		flexDirection: "row",
		alignItems: "center",
		width: 200,
	},
	icon: {
		width: 58,
		height: 56,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	textInput: {
		height: 40,
		paddingRight: 20,
	},
});

export default CustomInput;
